const db = require("../models/recipeDB");

exports.getRecipe = (req, res) => {
  db.findAll({
    where: { id: req.params.id }
  })
    .then(result => {
      var ret = result;
      if (!result) {
        //console.log("not found");
        ret = "Recipe not found, error in db";
      }
      res.render("getRecipePage", { searchResult: ret });
    })
    .catch(err => {     
      console.log(err);
    });
};

exports.deleteRecipe = (req, res) => {

  db.destroy({
    where: {
      id: req.params.id
    },
    truncate: false
  })
    .then(() => {
      //console.log("removed");
      return res.json("removed");

      //return res.redirect('/');
    })

    .catch(err => {
     // console.log(err + " remove image failed");
      return res.redirect("/");
    });

  //return res.send("deleted");
};

exports.updateRecipe = (req, res) => {
  
  const recipe = {
    author: req.body.author,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description
  };

  db.update(
    recipe,
    { where: { id: req.params.id } }
  )
    .then(result => {
      req.flash('success', 'Recipe have been edited');
      return res.redirect("/");
      console.log(result);
    })
    .catch(err => {
      console.log("update faild", err);
      req.flash('danger', 'Failed to edit Recipe');
      return res.redirect("/");
    });
  
};

exports.loadEditForm = (req, res) => {
  
  db.findAll({
    where: { id: req.params.id }
  })
    .then(result => {
      return res.render("editRecipePage", {
        errors: [],
        recipeId: req.params.id,
        requestedRecipe: result[0]
      });
    }).catch(err => {
      console.log(err);
    });

};
