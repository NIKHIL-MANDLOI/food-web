const { User } = require('../models/User');
const { Food } = require('../models/Food');
const { Category } = require('../models/Category');
const { Order } = require('../models/Order');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');

const dashboard = asyncHandler(async (req, res) => {
  const [users, foods, categories, orders] = await Promise.all([
    User.countDocuments(),
    Food.countDocuments(),
    Category.countDocuments(),
    Order.countDocuments()
  ]);

  res.json(new ApiResponse(200, 'Dashboard loaded', { users, foods, categories, orders }));
});

const listUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  res.json(new ApiResponse(200, 'Users loaded', { users }));
});

const updateFoodStatus = asyncHandler(async (req, res) => {
  const { isActive, isFeatured, stock } = req.body;
  const food = await Food.findByIdAndUpdate(
    req.params.foodId,
    { $set: { isActive, isFeatured, stock } },
    { new: true }
  );
  res.json(new ApiResponse(200, 'Food updated', { food }));
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const { orderStatus, paymentStatus } = req.body;
  const order = await Order.findByIdAndUpdate(
    req.params.orderId,
    { $set: { orderStatus, paymentStatus } },
    { new: true }
  );
  res.json(new ApiResponse(200, 'Order updated', { order }));
});

module.exports = { dashboard, listUsers, updateFoodStatus, updateOrderStatus };
