const express = require('express');
const { seedCatalog, listCategories, listFoods, getFoodBySlug } = require('../controllers/catalogController');

const catalogRouter = express.Router();

catalogRouter.post('/seed', seedCatalog);
catalogRouter.get('/categories', listCategories);
catalogRouter.get('/foods', listFoods);
catalogRouter.get('/foods/:slug', getFoodBySlug);

module.exports = { catalogRouter };
