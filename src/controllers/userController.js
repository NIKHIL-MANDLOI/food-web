const { User } = require('../models/User');
const { Order } = require('../models/Order');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');

const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(new ApiResponse(200, 'Profile loaded', { user }));
});

const updateAddressBook = asyncHandler(async (req, res) => {
  const { action, addressId, address } = req.body;
  const user = await User.findById(req.user._id);

  if (action === 'add') {
    if (!address?.line1 || !address?.city || !address?.state || !address?.pincode) {
      throw new ApiError(400, 'Address fields are required');
    }

    if (address.isDefault) {
      user.addresses.forEach((item) => {
        item.isDefault = false;
      });
    }

    user.addresses.push(address);
  }

  if (action === 'update') {
    const target = user.addresses.id(addressId);
    if (!target) throw new ApiError(404, 'Address not found');

    Object.assign(target, address);
    if (address?.isDefault) {
      user.addresses.forEach((item) => {
        item.isDefault = item._id.toString() === target._id.toString();
      });
    }
  }

  if (action === 'remove') {
    user.addresses = user.addresses.filter((item) => item._id.toString() !== addressId);
  }

  await user.save();
  res.json(new ApiResponse(200, 'Address book updated', { addresses: user.addresses }));
});

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(new ApiResponse(200, 'Orders loaded', { orders }));
});

module.exports = { getProfile, updateAddressBook, getMyOrders };
