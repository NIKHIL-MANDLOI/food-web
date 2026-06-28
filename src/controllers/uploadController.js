const path = require('path');
const { uploadDir } = require('../middleware/upload');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');
const { configureCloudinary, cloudinary } = require('../config/cloudinary');

const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const client = configureCloudinary();
  if (client) {
    const result = await client.uploader.upload(req.file.path, { folder: 'a1-fast-food' });
    return res.json(new ApiResponse(200, 'Image uploaded', { url: result.secure_url, publicId: result.public_id }));
  }

  const url = `/uploads/${path.basename(req.file.path)}`;
  res.json(new ApiResponse(200, 'Image uploaded', { url, filePath: req.file.path, uploadDir }));
});

module.exports = { uploadImage };
