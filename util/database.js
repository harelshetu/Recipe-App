const Sequelize = require('sequelize');
module.exports = new Sequelize('allRecipes', 'root', /*process.env.DB_PASSWORD*/'', {
    dialect: 'mysql',
    host: 'localhost'
  });

 