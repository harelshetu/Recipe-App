const db = require("../models/recipeDB");

exports.getSearchRecipe = (req, res) => {
  return res.render("searchRecipePage");
};

exports.postSearchRecipe = (req, res) => {
  
  db.findAll({
    limit: 15,  
    where: { title: req.body.quary }
  })
    .then(result => {
      if (!result) return null;
      else return res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
  
  /*db.findAll({
    limit: 10,
    where: {
      title: '%' + lookupValue + '%'
    }
  })
    .then(ans => {
        console.log(ans);
        if(ans)
            return res.json(ans);
        else
            return  res.json('posts');
    })
    .catch(function(error) {
      console.log(error);
    });*/

  // return res.json('posts');
};
