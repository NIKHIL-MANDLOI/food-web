const express = require('express');
const { requireAuth } = require('../middleware/auth');
const { getProfile, updateAddressBook, getMyOrders } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/profile', requireAuth, getProfile);
userRouter.patch('/addresses', requireAuth, updateAddressBook);
userRouter.get('/orders', requireAuth, getMyOrders);

module.exports = { userRouter };
