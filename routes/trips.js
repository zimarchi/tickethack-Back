    // departure: String,
	// arrival: Number,
	// departureDate: Date,
    // departureTime: Date,
    // Price: Number,

    //Trip;

var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const mongoose = require('../models/connection');

const Trip = require('../models/trips');






// // Import d'une nouvelle ville si n'existe pas

// router.post("/", (req, res) => {

// City.findOne({cityName : {$regex : new RegExp (req.body.cityName, "i")}})
// .then (foundCity => {

// if (!foundCity) {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${OWM_API_KEY}&units=metric`)
//         //https://api.openweathermap.org/data/2.5/weather?q=Alger&appid=347e166e4d4fc4b77faf8744ec272318&units=metric 
//             .then(response => response.json())
//             .then(apiData => {
//                 const newCity = new City ({
//                     cityName: apiData.name,
//                     main: apiData.weather[0].main,
//                     description: apiData.weather[0].description,
//                     tempMin: apiData.main.temp_min,
//                     tempMax: apiData.main.temp_max,
//                 })
//                 newCity.save();
//                 res.json({ result: true, weather: newCity });
//             });
// } else {
//         res.json({ result: false, error: "City already saved" });
//   }
// });
//     })
 
  
// //afficher toutes les villes

//   router.get("/", (req, res) => {
//     City.find ({}).then (data => res.json ({weather: data}))
    
//   });
  
// //afficher une seule ville si existe

//   router.get("/:cityName", (req, res) => {
    
// City.findOne({cityName : {$regex : new RegExp (req.params.cityName, "i")}})
// .then (cityFound => {
//     if (cityFound)
//     {
//       res.json({ result: true, weather: cityFound });
//     } else {
//       res.json({ result: false, error: "City not found" });
//     }
//   });
// }) 
  

// // supprimer une ville si existe

//   router.delete("/:cityName", (req, res) => {

//     City.findOne({cityName : {$regex : new RegExp (req.params.cityName, "i")}})
//     .then (foundCity => {
//         if (foundCity) {
//             City.deleteOne ({cityName: {$regex : new RegExp (req.params.cityName, "i")}})
//             .then (() => City.find ({}))
//             .then (data => res.json ({result: true, data: data}))
            
//             } else {
//             City.find ().then (data => res.json ({result: false, error: "City not found"})) 
              
//             }
//     })

 
//   });

  module.exports = router;