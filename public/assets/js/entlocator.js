$(document).ready(function() {
  $(".entlocation").click(function() {
    console.log("click produces: ", $("#searchText").val());
    event.preventDefault();
    validateSearch();
  });
});

var specialCharacters = "~`#$%^*+=[]\\'/{}|\"<>";

function validateSearch() {
  var searchInput = $("#searchText")
    .val()
    .trim();
  if (searchInput === "") {
    $("#myModal1").modal("toggle");
    console.log("Search Input is " + searchInput);
    return false;
  }
  for (var i = 0; i < searchInput.length; i++) {
    if (specialCharacters.indexOf(searchInput.charAt(i)) !== -1) {
      $("#myModal2").modal("toggle");
      console.log("This is working");
      $("#searchText").val(" ");
      return false;
    } else {
      console.log("query location: ", searchInput);
      getEntLocation(searchInput);
    }
  }
}

function getEntLocation(searchInput) {
  $.post("/api/entlocation", { location }, function(response) {
    console.log("location:", response);
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
        }</p><a href="#" class="btn btn-primary">Leave Review</a><button class="btn btn-success">Read Reviews</button></div></div>`
      );
      $("#yelpResults").append(item);
    }
  });
}
