const path = require('path');
var exphbs = require("express-handlebars");

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.render("index"))
  ;
  app.get('/post', (req, res) =>
    res.render("post")
  );
  app.get('/search', (req, res) =>
    res.render("search")
  );
}
