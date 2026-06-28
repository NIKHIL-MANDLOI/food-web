const crypto = require('crypto');
const { Order } = require('../models/Order');
const { Cart } = require('../models/Cart');
const { User } = require('../models/User');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');
const { createRazorpayClient } = require('../config/razorpay');

async function getCartForCheckout(userId) {
  const cart = await Cart.findOne({ user: userId });
  if (!cart || cart.items.length === 0) {
    throw new ApiError(400, 'Cart is empty');
  }
  return cart;
}

function calculateTotals(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 499 ? 0 : 39;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;
  return { subtotal, deliveryFee, tax, total };
}

const checkout = asyncHandler(async (req, res) => {
  const { addressId, address: directAddress, paymentMethod = 'cod', customerNote = '' } = req.body;
  const cart = await getCartForCheckout(req.user._id);
  const user = await User.findById(req.user._id);
  const address = directAddress || (addressId ? user.addresses.id(addressId) : user.addresses.find((item) => item.isDefault) || user.addresses[0]);

  if (!address) {
    throw new ApiError(400, 'Please add a delivery address');
  }

  const orderItems = cart.items.map((item) => ({
    food: item.food,
    name: item.name,
    image: item.image,
    price: item.price,
    quantity: item.quantity
  }));

  const totals = calculateTotals(orderItems);
  const orderData = {
    user: req.user._id,
    items: orderItems,
    address,
    ...totals,
    paymentMethod,
    paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
    orderStatus: 'placed',
    trackingEvents: [{ status: 'placed', note: 'Order placed' }],
    customerNote
  };

  if (paymentMethod === 'razorpay') {
    const razorpay = createRazorpayClient();
    if (razorpay) {
      const razorpayOrder = await razorpay.orders.create({
        amount: totals.total * 100,
        currency: 'INR',
        receipt: `order_${Date.now()}`
      });
      orderData.razorpayOrderId = razorpayOrder.id;
      orderData.paymentStatus = 'pending';
    }
  }

  const order = await Order.create(orderData);
  cart.items = [];
  await cart.save();

  res.status(201).json(new ApiResponse(201, 'Order placed', { order }));
});

const listMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(new ApiResponse(200, 'Orders loaded', { orders }));
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findOne({ _id: req.params.orderId, user: req.user._id });
  if (!order) throw new ApiError(404, 'Order not found');
  res.json(new ApiResponse(200, 'Order loaded', { order }));
});

const confirmPayment = asyncHandler(async (req, res) => {
  const { orderId, razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;
  const order = await Order.findById(orderId);
  if (!order) throw new ApiError(404, 'Order not found');

  if (razorpayOrderId) order.razorpayOrderId = razorpayOrderId;
  if (razorpayPaymentId) order.razorpayPaymentId = razorpayPaymentId;
  if (razorpaySignature) {
    const digest = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest('hex');
    if (digest !== razorpaySignature) {
      throw new ApiError(400, 'Payment signature verification failed');
    }
  }

  order.paymentStatus = 'paid';
  order.orderStatus = 'confirmed';
  order.trackingEvents.push({ status: 'confirmed', note: 'Payment verified' });
  await order.save();

  res.json(new ApiResponse(200, 'Payment confirmed', { order }));
});

module.exports = { checkout, listMyOrders, getOrderById, confirmPayment };
