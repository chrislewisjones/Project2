const yelp = require("yelp-fusion");
var keys = require("./keys.js"); // link the keys.js
var yKey = keys.yelpKey; // key
const client = yelp.client(yKey.key);
console.log(yKey.key);

exports.queryYelpLocation = function(location) {
  client
    .search({
      term: "Dogs Allowed Bars",
      limit: 3,
      location: location
    })
    .then(response => {
      console.log(response.jsonBody.businesses);
    })
    .catch(e => {
      console.log(e);
    });
};
