const { Wishlist } = require('../models/Wishlist');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');

async function getOrCreateWishlist(userId) {
  let wishlist = await Wishlist.findOne({ user: userId });
  if (!wishlist) {
    wishlist = await Wishlist.create({ user: userId, foods: [] });
  }
  return wishlist;
}

const getWishlist = asyncHandler(async (req, res) => {
  const wishlist = await getOrCreateWishlist(req.user._id);
  await wishlist.populate('foods');
  res.json(new ApiResponse(200, 'Wishlist loaded', { wishlist }));
});

const toggleWishlist = asyncHandler(async (req, res) => {
  const { foodId } = req.body;
  const wishlist = await getOrCreateWishlist(req.user._id);
  const exists = wishlist.foods.some((item) => item.toString() === foodId);

  if (exists) {
    wishlist.foods = wishlist.foods.filter((item) => item.toString() !== foodId);
  } else {
    wishlist.foods.push(foodId);
  }

  await wishlist.save();
  res.json(new ApiResponse(200, 'Wishlist updated', { wishlist }));
});

module.exports = { getWishlist, toggleWishlist };
