const db = require('../models');
var express = require("express");
var router = express.Router();

module.exports = (app) => {
  // GET route for getting all of the posts
  app.get('/api/search/make/', (req, res) => {
    db.Vehicle.findAll({
      where: {
          make: req.body.make
        }
    }).then((dbPost) => res.json(dbPost));
  }); 
  app.get('/api/search/model/', (req, res) => {
    db.Vehicle.findAll({
      where: {
          model: req.body.model
        }
    }).then((dbPost) => res.json(dbPost));
  }); 
  app.get('/api/search/year/', (req, res) => {
    db.Vehicle.findAll({
      where: {
          year: req.body.year
        }
    }).then((dbPost) => res.json(dbPost));
  });
  app.get('/api/search/color/', (req, res) => {
    db.Vehicle.findAll({
      where: {
          color: req.body.color
        }
    }).then((dbPost) => res.json(dbPost));
  }) ;
  app.get('/api/search/price/', (req, res) => {
    db.Vehicle.findAll({
      where: {
          price: req.body.price
        }
    }).then((dbPost) => res.json(dbPost));
  });

  app.post("/api/vehicles/", (req, res) => {
      console.log(req.body)
      db.Vehicle.create({
          Make: req.body.makeupdate,
          Model: req.body.modelupdate,
          Year: req.body.yearupdate,
          Color: req.body.colorupdate,
          Price: req.body.priceupdate
      })
        .then((dbVehicle)=> {
            console.log(dbVehicle)
            res.redirect("/")
        })
  });
}