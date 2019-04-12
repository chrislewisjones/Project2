const yelp = require("yelp-fusion");
var keys = require("./keys.js"); // link the keys.js
var yKey = keys.yelpKey; // key
const client = yelp.client(yKey.key);
console.log(yKey.key);

exports.queryYelpNearby = function(latitude, longitude) {
  client
    .search({
      term: "Dogs Allowed Bars",
      // location: "Chicago, IL"
      // coordinates: {
      latitude: 41.9759751,
      longitude: -87.6750917
      // }
    })
    .then(response => {
      console.log(response.jsonBody.businesses);
    })
    .catch(e => {
      console.log(e);
    });
};
