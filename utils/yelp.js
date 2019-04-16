const yelp = require("yelp-fusion");
var keys = require("./keys.js"); // link the keys.js
var yKey = keys.yelpKey; // key
const client = yelp.client(yKey.key);

exports.queryYelpNearby = function(latitude, longitude) {
  return client.search({
    term: '"dogs allowed"',
    categories: "bars",
    radius: 1610,
    limit: 3,
    // location: "Chicago, IL"
    // coordinates: {
    latitude: latitude,
    longitude: longitude
  });
};
