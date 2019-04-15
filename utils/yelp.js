const yelp = require("yelp-fusion");
var keys = require("./keys.js"); // link the keys.js
var yKey = keys.yelpKey; // key
const client = yelp.client(yKey.key);
console.log(yKey.key);

exports.queryYelpNearby = function(latitude, longitude) {
  return client.search({
    term: '"dogs allowed"',
    categories: "bars",
    limit: 3,
    // location: "Chicago, IL"
    // coordinates: {
    latitude: latitude,
    longitude: longitude
    // }
  });
  // .then(response => {
  //   console.log(response.jsonBody.businesses[i].name);
  // })
  // .then(function(response) {
  //   return new Promise(function(resolve) {
  //     return resolve(response.jsonBody.businesses);
  //   });

  // var pOne = document.createElement("<div>");   // Create a <button> element
  // item.innerHTML = "CLICK ME";                   // Insert text
  // document.body.appendChild();

  // var item = $("<div>");
  // item.attr("id", "barName");
  // item.text(response.jsonBody.businesses.name);
  // $("#yelpResults").append(item);
  // })
  // .catch(e => {
  //   console.log(e);
  // });
};
