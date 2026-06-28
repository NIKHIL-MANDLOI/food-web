const { Category } = require('../models/Category');
const { Food } = require('../models/Food');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');
const { categories, foods } = require('../seed/seedData');

const seedCatalog = asyncHandler(async (req, res) => {
  const categoryDocs = [];

  for (const category of categories) {
    const doc = await Category.findOneAndUpdate(
      { name: category.name },
      { $set: category },
      { upsert: true, new: true }
    );
    categoryDocs.push(doc);
  }

  for (const food of foods) {
    const categoryDoc = categoryDocs.find((item) => item.name === food.category);
    if (!categoryDoc) continue;

    await Food.findOneAndUpdate(
      { name: food.name },
      {
        $set: {
          ...food,
          category: categoryDoc._id,
          price: food.price,
          originalPrice: food.originalPrice,
          images: food.images,
          offerText: food.offerText
        }
      },
      { upsert: true, new: true }
    );
  }

  res.json(new ApiResponse(200, 'Catalog seeded', {
    categories: categoryDocs.length,
    foods: foods.length
  }));
});

const listCategories = asyncHandler(async (req, res) => {
  const data = await Category.find({ isActive: true }).sort({ sortOrder: 1, createdAt: 1 });
  res.json(new ApiResponse(200, 'Categories loaded', { categories: data }));
});

const listFoods = asyncHandler(async (req, res) => {
  const {
    search = '',
    category = '',
    featured,
    minPrice,
    maxPrice,
    sort = 'featured'
  } = req.query;

  const query = { isActive: true };

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { tags: { $regex: search, $options: 'i' } }
    ];
  }

  if (category) {
    const categoryDoc = await Category.findOne({ $or: [{ slug: category }, { name: category }] });
    if (categoryDoc) {
      query.category = categoryDoc._id;
    }
  }

  if (featured === 'true') {
    query.isFeatured = true;
  }

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }

  const sortMap = {
    featured: { isFeatured: -1, ratingAverage: -1, createdAt: -1 },
    price_asc: { price: 1 },
    price_desc: { price: -1 },
    rating_desc: { ratingAverage: -1 },
    newest: { createdAt: -1 }
  };

  const foodsData = await Food.find(query)
    .populate('category')
    .sort(sortMap[sort] || sortMap.featured);

  res.json(new ApiResponse(200, 'Foods loaded', { foods: foodsData }));
});

const getFoodBySlug = asyncHandler(async (req, res) => {
  const food = await Food.findOne({ slug: req.params.slug }).populate('category');
  if (!food) {
    return res.status(404).json({ success: false, message: 'Food not found' });
  }

  res.json(new ApiResponse(200, 'Food loaded', { food }));
});

module.exports = {
  seedCatalog,
  listCategories,
  listFoods,
  getFoodBySlug
};
