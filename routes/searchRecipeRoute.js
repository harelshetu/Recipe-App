const express = require('express');
const router = express.Router();

router.get('/search', require('../controllers/searchRecipeController').getSearchRecipe);
router.post('/search', require('../controllers/searchRecipeController').postSearchRecipe);

module.exports =router;