const yelp = require("yelp-fusion");
var keys = require("./keys.js"); // link the keys.js
var yKey = keys.yelpKey; // key
const client = yelp.client(yKey);

exports.queryYelpNearby = function(latitude, longitude) {
  client
    .business({
      term: "Dogs Allowed",
      coordinates: {
        latitude: 37.80587,
        longitude: -122.42058
      }
    })
    .then(response => {
      console.log(response.jsonBody.businesses[0].name);
    })
    .catch(e => {
      console.log(e);
    });
};
