const yelp = require("yelp-fusion");
var keys = require("./keys.js"); // link the keys.js
var yKey = keys.yelpKey; // key
const client = yelp.client(yKey.key);
console.log(yKey.key);

exports.queryYelpNearby = function(latitude, longitude) {
  client
    .search({
      term: "Dogs Allowed Bars",
      limit: 3,
      // location: "Chicago, IL"
      // coordinates: {
      latitude: latitude,
      longitude: longitude
      // }
    })
    .then(response => {
      console.log(response.jsonBody.businesses);
     
    })
    .then(function(response)
    {
    var pOne = $("<div>").text(response.jsonBody.businesses)
     $("#yelpResults").append(pOne)
    })
    .catch(e => {
      console.log(e);
    });
};
