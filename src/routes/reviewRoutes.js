const express = require('express');
const { requireAuth } = require('../middleware/auth');
const { listReviewsByFood, upsertReview, deleteReview } = require('../controllers/reviewController');

const reviewRouter = express.Router();

reviewRouter.get('/food/:foodId', listReviewsByFood);
reviewRouter.post('/', requireAuth, upsertReview);
reviewRouter.delete('/:reviewId', requireAuth, deleteReview);

module.exports = { reviewRouter };
