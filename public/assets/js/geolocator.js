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
    for (let i = 0; i < response.length; i++) {
      var item = $("<div>");
      item.html(
        `<div class="card" style="width: 18rem;"><img src=${
          response[i].image_url
        } class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${
          response[i].name
        }</h5><p class="card-text">${response[i].location.address1}
        <br>${
          response[i].location.city
        }</p><a href="#" class="btn btn-primary" >Leave Review</a><button class="btn btn-success">Read Reviews</button></div></div>`
      );
      $("#yelpResults").append(item);
    }
  });
}
