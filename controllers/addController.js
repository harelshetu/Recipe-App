const db = require('../models/recipeDB');
const { validationResult } = require('express-validator');

exports.getAdd = (req, res, next) => {

    res.render('addRecipePage', {
        errors: []
    });

};

exports.postAdd = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // console.log(errors.errors[0].msg);
        var allErrors = [];
        errors.errors.forEach(element => {
            var errorMessage = element.msg;
            allErrors.push(errorMessage);
        });
        console.log(allErrors);
        return res.render('addRecipePage', {
            errors: allErrors
        });
    }

    let extension = req.body.image.substring(
        req.body.image.lastIndexOf('.') + 1)
        .toLowerCase();

    if (!(extension === "jpeg" || extension === "png" || extension === "gif" ||
        extension === "jpg"))
        return res.render('addRecipePage', {
            errors: ["Wrong image format. Only theseformats are allowed: jpeg, png, gif"]
        });

    const recipe = {
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    };
    var exists = false;

    db.findAll({
        where: { description: recipe.description, title: recipe.title }
      })
        .then(result => {
            console.log("the reseult is ==================== ",result);
          if (result.length != 0)
          {
            req.flash('danger', 'Recipe already exists');
            res.redirect('/');
          }
          else{

            db.create({
                title: recipe.title,
                author: recipe.author,
                description: recipe.description,
                image: recipe.image
              })
                .then(result => {
                  console.log("recipe has been added sucessssssss ",exists);
                  req.flash('success', 'Recipe have been added');
                  res.redirect('/');
                })
                .catch(err => {
                  console.log("failed to add recipe - " + err);
                  req.flash('danger', 'Failed to add recipe');
                  res.redirect('/')
                });
          }})
        .catch(err => {
          console.log(err);
        });
        console.log('exist:::: ',exists);
}


