var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/test", function(req, res) {
    db.Test.findAll({}).then(function(dbTest) {
      res.json(dbTest);
    });
  });
};
