const db = require("./recipeDB");

class Recipe {
  constructor(author, title, description,image) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

exports.initDB = ()=>{
  var recipes = initRecipes();
    console.log("::::::::::::::::"+recipes)
    db.bulkCreate(recipes)
      .then(()=> console.log("DB initialized"))
      .catch(err=> console.log("DB init failed "+err))
};

function initRecipes() {
  var allRecipes = [];
  allRecipes.push(
    new Recipe(
      "Bob",
      "Omlet",
      "egg and cheese",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfkt3oj8aXrl6Ttb0Nmgb-xNshKtKeDIJTnmfl9WvdVrbPcRDsg&s"
    )
  );
  allRecipes.push(
    new Recipe(
      "Alisa",
      "Vanilla Cake",
      "Whisk the cake flour, salt, baking powder, and baking soda together.  Scrape down the sides and up the bottom of the bowl with a rubber spatula as needed.",
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/01/vanilla-cake-5.jpg"
    )
  );
  allRecipes.push(
    new Recipe(
      "Liz",
      "Lettuce Salad with Tomato and Cucumber",
      "First, wash all vegetables, chop and add to a large salad bowl as you are chopping. Work through ingredients in order listed in the recipe.",
      "https://ifoodreal.com/wp-content/uploads/2017/06/lettuce-tomato-cucumber-salad-recipe-15.jpg"
    )
  );
  allRecipes.push(
    new Recipe(
      "Pam",
      "Chocolate Chip Cookies",
      "In large bowl, beat softened butter and sugars with electric mixer on medium speed, or mix with spoon about 1 minute or until fluffy, scraping side of bowl occasionally.",
      "https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg"
    )
  );
  allRecipes.push(
    new Recipe(
      "Sam",
      "Butter Cookies",
      "Prepare cookies as directed above omitting frosting.  To prepare glaze, stir together 2 1/2 cups powdered sugar, 2 tablespoons water,",
      "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/2014_Best-Ever-Butter-Cookies_05690_Evergreen600x600.jpg?ext=.jpg"
    )
  );
  allRecipes.push(
    new Recipe(
      "Tom",
      "No-Bake Cookies",
      "Place the butter, sugar, milk, and unsweetened cocoa powder in a saucepan and heat over medium heat, making sure to stir often until the butter is melted and everything is well combined.",
      "https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/07/Classic-No-Bake-Cookies-4.jpg?resize=1360%2C2040&ssl=1"
    )
  );
  allRecipes.push(
    new Recipe(
      "Tim",
      "Hazelnut Cookies",
      "Divide in 2-tablespoon portions and round each one into a smooth ball. (Portioned dough can be refrigerated in a heavy-duty zipper-lock bag up to 1 week, or frozen 6 months.",
      "https://www.seriouseats.com/recipes/images/2017/10/20170913-hazelnut-sugar-cookies-vicky-wasik-16-1500x1125.jpg"
    )
  );
  return allRecipes;
}


