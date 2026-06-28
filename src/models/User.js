const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const addressSchema = new mongoose.Schema({
  label: { type: String, trim: true, default: 'Home' },
  name: { type: String, trim: true },
  phone: { type: String, trim: true },
  line1: { type: String, trim: true, required: true },
  line2: { type: String, trim: true, default: '' },
  city: { type: String, trim: true, required: true },
  state: { type: String, trim: true, required: true },
  country: { type: String, trim: true, default: 'India' },
  pincode: { type: String, trim: true, required: true },
  isDefault: { type: Boolean, default: false }
}, { timestamps: true });

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, lowercase: true, unique: true, required: true },
  phone: { type: String, trim: true, default: '' },
  password: { type: String, required: true, minlength: 6, select: false },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
  avatar: { type: String, default: '' },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Food' }],
  addresses: [addressSchema],
  forgotPasswordToken: String,
  forgotPasswordExpiresAt: Date,
  isBlocked: { type: Boolean, default: false },
  lastLoginAt: Date
}, { timestamps: true });

userSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = { User };
