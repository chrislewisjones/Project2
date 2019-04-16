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
    $("#yelpResults").empty();
    console.log("nearby:", response);
    for (let i = 0; i < response.length; i++) {
      var item = $("<div>");
      item.html(
        `<div class="card" style="width: 18rem;"><img src=${
          response[i].image_url
        } class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${
          response[i].name
        }</h5><p class="card-text">${response[i].location.address1}
        <br>${response[i].location.city}</p><a href=/review?data=${response[
          i
        ].name
          .split(" ")
          .join(
            "%"
          )} class="btn btn-primary" >Leave Review</a><a href="/readreview" class="btn btn-success">Read Reviews</a></div></div>`
      );
      $("#yelpResults").append(item);
    }
  });
}
