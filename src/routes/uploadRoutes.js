const express = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const { upload } = require('../middleware/upload');
const { uploadImage } = require('../controllers/uploadController');

const uploadRouter = express.Router();

uploadRouter.post('/', requireAuth, requireRole('admin'), upload.single('file'), uploadImage);

module.exports = { uploadRouter };
