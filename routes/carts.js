var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const mongoose = require('../models/connection');
const Cart = require('../models/carts');
const moment = require ("moment");
 

//Ajout d'un voyage dans le cart

router.post("/", (req, res) => {
    const newCart = new Cart ({
        departure: req.body.departure,
        arrival: req.body.arrival,
        date: req.body.date,
        price: req.body.price,
    })
    newCart.save()
    .then (tripCarted => {
        res.json ({result: true, tripCarted})
    })
})

//Suppression d'un voyage du cart

router.delete("/delete", (req, res) => {
    Cart.deleteOne ({
        departure: {$regex : new RegExp (req.body.departure, "i")}
    })
    .then (() => Cart.find ({}))
    .then (data => res.json ({result: true, data: data}))
})





module.exports = router