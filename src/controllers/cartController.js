const { Cart } = require('../models/Cart');
const { Food } = require('../models/Food');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');

async function getOrCreateCart(userId) {
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = await Cart.create({ user: userId, items: [] });
  }
  return cart;
}

const getCart = asyncHandler(async (req, res) => {
  const cart = await getOrCreateCart(req.user._id);
  await cart.populate('items.food');
  res.json(new ApiResponse(200, 'Cart loaded', { cart }));
});

const saveCart = asyncHandler(async (req, res) => {
  const { items = [] } = req.body;
  const cart = await getOrCreateCart(req.user._id);
  cart.items = items;
  cart.updatedAtClient = new Date();
  await cart.save();
  res.json(new ApiResponse(200, 'Cart saved', { cart }));
});

const addToCart = asyncHandler(async (req, res) => {
  const { foodId, quantity = 1 } = req.body;
  const food = await Food.findById(foodId);
  if (!food) throw new ApiError(404, 'Food not found');

  const cart = await getOrCreateCart(req.user._id);
  const item = cart.items.find((entry) => entry.food.toString() === food._id.toString());

  if (item) {
    item.quantity += Number(quantity);
  } else {
    cart.items.push({ food: food._id, name: food.name, image: food.images?.[0] || '', price: food.price, quantity: Number(quantity) });
  }

  cart.updatedAtClient = new Date();
  await cart.save();
  res.json(new ApiResponse(200, 'Item added to cart', { cart }));
});

const updateCartItem = asyncHandler(async (req, res) => {
  const { foodId, quantity } = req.body;
  const cart = await getOrCreateCart(req.user._id);
  const item = cart.items.find((entry) => entry.food.toString() === foodId);
  if (!item) throw new ApiError(404, 'Cart item not found');

  if (Number(quantity) <= 0) {
    cart.items = cart.items.filter((entry) => entry.food.toString() !== foodId);
  } else {
    item.quantity = Number(quantity);
  }

  cart.updatedAtClient = new Date();
  await cart.save();
  res.json(new ApiResponse(200, 'Cart updated', { cart }));
});

const removeCartItem = asyncHandler(async (req, res) => {
  const { foodId } = req.params;
  const cart = await getOrCreateCart(req.user._id);
  cart.items = cart.items.filter((entry) => entry.food.toString() !== foodId);
  cart.updatedAtClient = new Date();
  await cart.save();
  res.json(new ApiResponse(200, 'Cart item removed', { cart }));
});

const clearCart = asyncHandler(async (req, res) => {
  const cart = await getOrCreateCart(req.user._id);
  cart.items = [];
  cart.updatedAtClient = new Date();
  await cart.save();
  res.json(new ApiResponse(200, 'Cart cleared', { cart }));
});

module.exports = { getCart, saveCart, addToCart, updateCartItem, removeCartItem, clearCart };
