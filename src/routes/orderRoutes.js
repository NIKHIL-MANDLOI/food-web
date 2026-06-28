const express = require('express');
const { requireAuth } = require('../middleware/auth');
const { checkout, listMyOrders, getOrderById, confirmPayment } = require('../controllers/orderController');

const orderRouter = express.Router();

orderRouter.post('/checkout', requireAuth, checkout);
orderRouter.post('/confirm-payment', requireAuth, confirmPayment);
orderRouter.get('/', requireAuth, listMyOrders);
orderRouter.get('/:orderId', requireAuth, getOrderById);

module.exports = { orderRouter };
