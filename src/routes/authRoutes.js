const express = require('express');
const { requireAuth } = require('../middleware/auth');
const {
  register,
  login,
  logout,
  me,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword
} = require('../controllers/authController');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/forgot-password', forgotPassword);
authRouter.post('/reset-password', resetPassword);
authRouter.get('/me', requireAuth, me);
authRouter.patch('/profile', requireAuth, updateProfile);
authRouter.patch('/password', requireAuth, changePassword);

module.exports = { authRouter };
