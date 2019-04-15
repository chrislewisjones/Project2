const yelp = require("yelp-fusion");
var keys = require("./keys.js"); // link the keys.js
var yKey = keys.yelpKey; // key
const client = yelp.client(yKey.key);
console.log(yKey.key);

exports.queryYelpNearby = function(latitude, longitude) {
  client
    .search({
      term: '"dogs allowed"',
      categories: "bars",
      limit: 10,
      // location: "Chicago, IL"
      // coordinates: {
      latitude: latitude,
      longitude: longitude
      // }
    })
    .then(response => {
      console.log(response.jsonBody.businesses);
    })
    .then(function(response) {
      var pOne = $("<div>");
      pOne.attr("id", "barName");
      pOne.text(response.jsonBody.businesses.name);
      $("#yelpResults").append(pOne);
    })
    .catch(e => {
      console.log(e);
    });
};
