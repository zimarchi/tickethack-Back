var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const mongoose = require('../models/connection');
const Trip = require('../models/trips');
const moment = require ("moment");
 
//test recherche par date 

router.get("/test", (req, res) => {
    let date = moment(req.body.date).endOf("day")
    Trip.find ({
        date: {$lte: date.toDate()}
    })
    .then (tripsResults => res.json ({tripsResults}))
   });

//test Afficher tous les voyages

router.get("/all", (req, res) => {
    Trip.find ({})
    .then (tripsResults => res.json ({tripsResults}))
});

//Recherche de voyages

router.get("/", (req, res) => {
    if (!req.body.departure || !req.body.arrival || !req.body.date ) {
        return res.json({ result: false, error: 'Missing or empty fields' })
    }
    let startDate = moment(req.body.date).startOf("day")
    let endDate = moment(req.body.date).endOf("day")
    Trip.find ({
        departure: { $regex: new RegExp(req.body.departure, 'i')},
        arrival: { $regex: new RegExp(req.body.arrival, 'i')},
        //problème de décalage horaire de deux heures !!!!!
        date: { $gte: startDate.toDate() },
        date: { $lte: endDate.toDate() },
    })
    .then (tripResult => {
        if (tripResult===[]) {
            res.json ({result: false, error: 'No trip found'})
        } else {
        res.json ({result: true, tripResult})
        }
   })
});

  module.exports = router