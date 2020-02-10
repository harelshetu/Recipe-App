const express = require('express');
const router = express.Router();
const getRecipeController = require('../controllers/getRecipeController');


router.get('/recipes/:id', getRecipeController.getRecipe);
router.delete('/recipes/:id', getRecipeController.deleteRecipe);
router.get('/recipes/edit/:id',getRecipeController.loadEditForm)
router.put('/recipes/edit/:id',getRecipeController.updateRecipe)


module.exports = router