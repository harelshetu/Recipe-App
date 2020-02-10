const db = require('../models/recipeDB');

exports.getRecipes = (req, res, next) => {

    db.findAll()
        .then((result) => {

            if (result)
                res.render('recipesPage', { recipes: result });
        }).catch((err) => {

        });
};