$(".geolocator").click(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getNearbyLocations(latitude, longitude);
  });
});

function getNearbyLocations(latitude, longitude) {
  $.post("/api/geolocation", { latitude, longitude }, function(response) {
    console.log("nearby:", response);
  });
}
