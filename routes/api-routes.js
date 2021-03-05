const db = require('../models');
var express = require("express");


module.exports = (app) => {
  // GET route for getting all of the posts
  app.get('/api/search/make/', (req, res) => {
      console.log(req.body)
    db.Vehicle.findAll(
        {
      where: {
          Make: req.query.make
        }
    }
    ).then((dbVehicle) => {
        res.json(dbVehicle)
       res.redirect("/")
    });
  }); 

  app.get('/api/search/type/', (req, res) => {
      console.log(req.body)
    db.Vehicle.findAll(
        {
      where: {
          Type: req.query.type
        }
    }
    ).then((dbVehicle) => {
        res.json(dbVehicle)
    });
  }); 

  app.get('/api/search/model/', (req, res) => {
    db.Vehicle.findAll({
      where: {
          Model: req.query.model
        }
    }).then((dbVehicle) => res.json(dbVehicle));
  }); 
  
  app.get('/api/search/year/', (req, res) => {
    db.Vehicle.findAll({
      where: {
          Year: req.query.year
        }
    }).then((dbVehicle) => res.json(dbVehicle));
  });
  app.get('/api/search/color/', (req, res) => {
    db.Vehicle.findAll({
      where: {
          Color: req.query.color
        }
    }).then((dbVehicle) => res.json(dbVehicle));
  }) ;
  app.get('/api/search/price/', (req, res) => {
    db.Vehicle.findAll({
      where: {
          Price: req.query.price
        }
    }).then((dbVehicle) => res.json(dbVehicle));
  });

  app.post("/api/vehicles/", (req, res) => {
      console.log(req.body)
      db.Vehicle.create({
          Type: req.body.typeupdate,
          Make: req.body.makeupdate,
          Model: req.body.modelupdate,
          Year: req.body.yearupdate,
          Color: req.body.colorupdate,
          Price: req.body.priceupdate,
          Email: req.body.emailupdate
      })
        .then((dbVehicle)=> {
            console.log(dbVehicle)
            res.redirect("/")
        })
  });
}