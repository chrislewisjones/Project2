$(".geolocator").click(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    let latitude = position.coords.latitude;
    console.log(latitude);

    let longitude = position.coords.longitude;
    console.log(longitude);

    getNearbyLocations(latitude, longitude);
  });
});

function getNearbyLocations(latitude, longitude) {
  $.post("/api/geolocation", { latitude, longitude }, function(response) {
    console.log("nearby:", response);
    var item = $("<div>");
    item.attr("id", "barName");
    item.text(response[0].name);
    $("#yelpResults").append(item);
  });
}
