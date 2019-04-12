const yelp = require("yelp-fusion");
var keys = require("./keys.js"); // link the keys.js
var yKey = keys.yelpKey; // key
const client = yelp.client(
  yKey
  //   "3W1Ih_3WrgJSGw3nEUgwTTZid6u70bqTF_Yw4oA4FfM_4w99b7Ruxka5J0U9PfCrIf2yCO3Nz7oD0vCcP-xlxKyhraXpRJms7XxjyQe-3VSz2OuozWUAQtn3xOerXHYx"
);

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
