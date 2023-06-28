var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const mongoose = require('../models/connection');
const Booking = require('../models/bookings');
const moment = require ("moment");
 

//Booking de tous les voyages

router.post("/", (req, res) => {
    for (let i=0; i<req.body.length; i++) {
        const newBooking = new Booking ({
            departure: req.body[i].departure,
            arrival: req.body[i].arrival,
            date: req.body[i].date,
            price: req.body[i].price,
        })
        newBooking.save()
    }
    Booking.find ()
    .then (tripsBooked => res.json ({result: true, tripsBooked}))
});

module.exports = router

/*
[
      {
        "departure": "Bruxelles",
        "arrival": "Paris",
        "date": "2023-06-27T16:34:43.939Z",
        "price": 49
      },
      {
        "departure": "Marseille",
        "arrival": "Lyon",
        "date": "2023-07-11T07:42:40.309Z",
        "price": 84
      },
      {
        "departure": "Alger",
        "arrival": "Nantes",
        "date": "2023-07-11T07:43:32.605Z",
        "price": 36
      },
      {
        "departure": "Bordeaux",
        "arrival": "Toulouse",
        "date": "2023-07-11T09:30:45.027Z",
        "price": 76
      },
    ]
  */