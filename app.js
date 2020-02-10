const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
var cookieParser = require('cookie-parser');
const flash = require('connect-flash');
var methodOverride = require('method-override')
const PORT = process.env.PORT|| 5000;
const path = require('path');
const app = express();
const db = require('./util/database');
const recipesRoute = require('./routes/recipesRoute');
const addRecipeRoute = require('./routes/addRecipeRoute');
const getRecipeRoute = require('./routes/getRecipeRoute');
const searchRecipeRoute = require('./routes/searchRecipeRoute')

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret:'my secret',
  resave:true,
  saveUninitialized:true
}));
app.use(require('connect-flash')());

//  Messages Middleware
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// template engine to reload ejs file
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));
app.use(recipesRoute);
app.use(addRecipeRoute);
app.use(getRecipeRoute);
app.use(searchRecipeRoute);



// check DB connection
db
.authenticate()
.then(() => {
                console.log('Connection has been established successfully.');

            })
.catch(err => {
                console.error('Unable to connect to the database:', err);
            });
db.sync()
  .then(result => {
    app.listen(PORT,() => console.log("server started at %s",PORT));
    require('./models/recipeModel').initDB();
    //var temp = new Recipe().initDB();

  } )
        



