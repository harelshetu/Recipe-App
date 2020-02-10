const express = require('express');
const recipesController = require('../controllers/recipesController');
const router = express.Router(); 

router.get('/', recipesController.getRecipes);

module.exports= router;
