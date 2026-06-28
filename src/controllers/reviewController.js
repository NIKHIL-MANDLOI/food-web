const { Review } = require('../models/Review');
const { Food } = require('../models/Food');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');

const listReviewsByFood = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ food: req.params.foodId }).populate('user', 'name avatar');
  res.json(new ApiResponse(200, 'Reviews loaded', { reviews }));
});

const upsertReview = asyncHandler(async (req, res) => {
  const { foodId, rating, comment = '' } = req.body;
  const food = await Food.findById(foodId);
  if (!food) throw new ApiError(404, 'Food not found');

  const review = await Review.findOneAndUpdate(
    { user: req.user._id, food: foodId },
    { $set: { rating, comment } },
    { upsert: true, new: true, runValidators: true }
  );

  const aggregate = await Review.aggregate([
    { $match: { food: food._id } },
    { $group: { _id: '$food', ratingAverage: { $avg: '$rating' }, ratingCount: { $sum: 1 } } }
  ]);

  if (aggregate[0]) {
    food.ratingAverage = Number(aggregate[0].ratingAverage.toFixed(1));
    food.ratingCount = aggregate[0].ratingCount;
    await food.save();
  }

  res.json(new ApiResponse(200, 'Review saved', { review }));
});

const deleteReview = asyncHandler(async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findOneAndDelete({ _id: reviewId, user: req.user._id });
  if (!review) throw new ApiError(404, 'Review not found');
  res.json(new ApiResponse(200, 'Review deleted'));
});

module.exports = { listReviewsByFood, upsertReview, deleteReview };
