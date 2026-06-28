require('dotenv').config();

const { connectDatabase } = require('../config/db');
const { Category } = require('../models/Category');
const { Food } = require('../models/Food');
const { categories, foods } = require('./seedData');

async function runSeed() {
  await connectDatabase();

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
}

runSeed()
  .then(() => {
    console.log('Seed complete');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  });
