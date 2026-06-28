const express = require('express');
const { ApiResponse } = require('../utils/ApiResponse');
const { authRouter } = require('./authRoutes');
const { catalogRouter } = require('./catalogRoutes');
const { userRouter } = require('./userRoutes');
const { cartRouter } = require('./cartRoutes');
const { wishlistRouter } = require('./wishlistRoutes');
const { orderRouter } = require('./orderRoutes');
const { reviewRouter } = require('./reviewRoutes');
const { adminRouter } = require('./adminRoutes');
const { uploadRouter } = require('./uploadRoutes');

const apiRouter = express.Router();

apiRouter.get('/health', (req, res) => {
  res.json(new ApiResponse(200, 'OK', { service: 'A1 Fast Food API' }));
});

apiRouter.use('/auth', authRouter);
apiRouter.use('/catalog', catalogRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/cart', cartRouter);
apiRouter.use('/wishlist', wishlistRouter);
apiRouter.use('/orders', orderRouter);
apiRouter.use('/reviews', reviewRouter);
apiRouter.use('/admin', adminRouter);
apiRouter.use('/uploads', uploadRouter);

module.exports = { apiRouter };
