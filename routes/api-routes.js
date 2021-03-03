const db = require('../models');

module.exports = (app) => {
  // GET route for getting all of the posts
  app.get('/api/search/make/', (req, res) => {
    db.Post.findAll({
      where: {
          make: req.body.make
        }
    }).then((dbPost) => res.json(dbPost));
  }); 
  app.get('/api/search/model/', (req, res) => {
    db.Post.findAll({
      where: {
          model: req.body.model
        }
    }).then((dbPost) => res.json(dbPost));
  }); 
  app.get('/api/search/year/', (req, res) => {
    db.Post.findAll({
      where: {
          year: req.body.year
        }
    }).then((dbPost) => res.json(dbPost));
  });
  app.get('/api/search/color/', (req, res) => {
    db.Post.findAll({
      where: {
          color: req.body.color
        }
    }).then((dbPost) => res.json(dbPost));
  }) ;
  app.get('/api/search/price/', (req, res) => {
    db.Post.findAll({
      where: {
          price: req.body.price
        }
    }).then((dbPost) => res.json(dbPost));
  }) 
}