const path = require('path');
var exphbs = require("express-handlebars");

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.render("index"))
  ;
  app.get('/post', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/post.html'))
  );
  app.get('/search', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/search.html'))
  );
}
