const express = require('express');
const { requireAuth } = require('../middleware/auth');
const { getWishlist, toggleWishlist } = require('../controllers/wishlistController');

const wishlistRouter = express.Router();

wishlistRouter.get('/', requireAuth, getWishlist);
wishlistRouter.post('/toggle', requireAuth, toggleWishlist);

module.exports = { wishlistRouter };
