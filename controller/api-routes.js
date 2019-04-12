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
};
