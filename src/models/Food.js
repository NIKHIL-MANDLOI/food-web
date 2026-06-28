const mongoose = require('mongoose');
const slugify = require('slugify');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, unique: true, index: true },
  description: { type: String, required: true, trim: true },
  shortDescription: { type: String, trim: true, default: '' },
  price: { type: Number, required: true },
  originalPrice: { type: Number, default: 0 },
  offerText: { type: String, trim: true, default: '' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  images: [{ type: String }],
  tags: [{ type: String, trim: true }],
  ingredients: [{ type: String, trim: true }],
  ratingAverage: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  preparationTime: { type: Number, default: 20 },
  spicyLevel: { type: String, enum: ['mild', 'medium', 'spicy'], default: 'medium' }
}, { timestamps: true });

foodSchema.pre('save', function setSlug(next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const Food = mongoose.model('Food', foodSchema);
module.exports = { Food };
