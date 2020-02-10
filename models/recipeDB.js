const Sequelize = require('sequelize');
const db  = require('../util/database');

const recipe = db.define('recipeList', {

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true      
    },
    author:{
        type: Sequelize.STRING,
         allowNull: false
    },
    title:{
        type: Sequelize.STRING,
         allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    }

});

module.exports = recipe;