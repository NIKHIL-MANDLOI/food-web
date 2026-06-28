const express = require('express');
const { requireAuth } = require('../middleware/auth');
const { getCart, saveCart, addToCart, updateCartItem, removeCartItem, clearCart } = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter.get('/', requireAuth, getCart);
cartRouter.post('/save', requireAuth, saveCart);
cartRouter.post('/items', requireAuth, addToCart);
cartRouter.patch('/items', requireAuth, updateCartItem);
cartRouter.delete('/items/:foodId', requireAuth, removeCartItem);
cartRouter.delete('/', requireAuth, clearCart);

module.exports = { cartRouter };
