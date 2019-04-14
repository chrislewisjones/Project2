var yelp = require("../utils/yelp");
console.log(yelp.queryYelpNearby);

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/test", function(req, res) {
    db.Test.findAll({}).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  // geolocator
  app.post("/api/geolocation", function(req, res) {
    yelp.queryYelpNearby(req.body.latitude, req.body.longitude);
  });
 // Get all reviews
 app.get("/api/all", function(req, res) {

  // Finding all reviews, and then returning them to the user as JSON.
  // Sequelize queries are asynchronous, which helps with perceived speed.
  // If we want something to be guaranteed to happen after the query, we'll use
  // the .then function
  db.Review.findAll({}).then(function(results) {
    // results are available to us inside the .then
    res.json(results);
  });

});

// Add a review
app.post("/api/new", function(req, res) {

  console.log("Review Data:");
  console.log(req.body);

  db.Review.create({
    name: req.body.name,
    bar_name: req.body.bar_name,
    comment: req.body.comment,
    rate: req.body.rate,
    created_at: req.body.created_at
  }).then(function(dbReview) {
    // `results` here would be the newly created review
    res.json(dbReview);
  });

});
  
};
