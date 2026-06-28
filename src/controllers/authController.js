const crypto = require('crypto');
const { User } = require('../models/User');
const { Cart } = require('../models/Cart');
const { Wishlist } = require('../models/Wishlist');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');
const { signAccessToken } = require('../utils/tokens');

function buildUserPayload(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    avatar: user.avatar,
    addresses: user.addresses,
    wishlist: user.wishlist,
    lastLoginAt: user.lastLoginAt
  };
}

function attachSessionCookie(res, token) {
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
}

const register = asyncHandler(async (req, res) => {
  const { name, email, password, phone = '' } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, 'Name, email, and password are required');
  }

  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new ApiError(409, 'User already exists');
  }

  const user = await User.create({ name, email, password, phone });
  await Cart.create({ user: user._id, items: [] });
  await Wishlist.create({ user: user._id, foods: [] });

  const token = signAccessToken({ id: user._id, role: user.role });
  attachSessionCookie(res, token);

  return res.status(201).json(new ApiResponse(201, 'Account created', { user: buildUserPayload(user), token }));
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }

  const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
  if (!user || user.isBlocked) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, 'Invalid credentials');
  }

  user.lastLoginAt = new Date();
  await user.save();

  const token = signAccessToken({ id: user._id, role: user.role });
  attachSessionCookie(res, token);

  const safeUser = await User.findById(user._id).select('-password');
  return res.json(new ApiResponse(200, 'Logged in', { user: buildUserPayload(safeUser), token }));
});

const logout = asyncHandler(async (req, res) => {
  res.clearCookie('token');
  res.json(new ApiResponse(200, 'Logged out'));
});

const me = asyncHandler(async (req, res) => {
  res.json(new ApiResponse(200, 'Current user', { user: buildUserPayload(req.user) }));
});

const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('+password');
  const { name, phone, avatar } = req.body;

  if (name !== undefined) user.name = name;
  if (phone !== undefined) user.phone = phone;
  if (avatar !== undefined) user.avatar = avatar;

  await user.save();
  const safeUser = await User.findById(user._id).select('-password');
  res.json(new ApiResponse(200, 'Profile updated', { user: buildUserPayload(safeUser) }));
});

const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    throw new ApiError(400, 'Current password and new password are required');
  }

  const user = await User.findById(req.user._id).select('+password');
  const matches = await user.comparePassword(currentPassword);
  if (!matches) {
    throw new ApiError(401, 'Current password is invalid');
  }

  user.password = newPassword;
  await user.save();
  res.json(new ApiResponse(200, 'Password changed'));
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email?.toLowerCase() }).select('+password');
  if (!user) {
    return res.json(new ApiResponse(200, 'If the email exists, a reset token was generated'));
  }

  const token = crypto.randomBytes(24).toString('hex');
  user.forgotPasswordToken = crypto.createHash('sha256').update(token).digest('hex');
  user.forgotPasswordExpiresAt = new Date(Date.now() + 15 * 60 * 1000);
  await user.save();

  res.json(new ApiResponse(200, 'Password reset token generated', { resetToken: token }));
});

const resetPassword = asyncHandler(async (req, res) => {
  const { token, password } = req.body;
  if (!token || !password) {
    throw new ApiError(400, 'Token and new password are required');
  }

  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  const user = await User.findOne({
    forgotPasswordToken: tokenHash,
    forgotPasswordExpiresAt: { $gt: new Date() }
  }).select('+password');

  if (!user) {
    throw new ApiError(400, 'Reset token is invalid or expired');
  }

  user.password = password;
  user.forgotPasswordToken = undefined;
  user.forgotPasswordExpiresAt = undefined;
  await user.save();

  res.json(new ApiResponse(200, 'Password reset successful'));
});

module.exports = {
  register,
  login,
  logout,
  me,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword
};
