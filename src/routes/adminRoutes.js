const express = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const { dashboard, listUsers, updateFoodStatus, updateOrderStatus } = require('../controllers/adminController');

const adminRouter = express.Router();

adminRouter.use(requireAuth, requireRole('admin'));
adminRouter.get('/dashboard', dashboard);
adminRouter.get('/users', listUsers);
adminRouter.patch('/foods/:foodId', updateFoodStatus);
adminRouter.patch('/orders/:orderId', updateOrderStatus);

module.exports = { adminRouter };
