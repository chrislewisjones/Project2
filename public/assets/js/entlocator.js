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
    alert("Please enter a Location"); // alert to be changed to modal
    console.log("Search Input is " + searchInput);
    return false;
  }
  for (var i = 0; i < searchInput.length; i++) {
    if (specialCharacters.indexOf(searchInput.charAt(i)) !== -1) {
      alert("Please enter a location without special characters"); // alert to be changed to modal
      console.log("This is working");
      $("#searchText").val(" ");
      return false;
    } else {
      console.log("query location: ", searchInput);
      getEntLocations(searchInput);
    }
  }
}

function getEntLocations(location) {
  $.post("/api/entlocation", { location }, function(response) {
    console.log("location:", response);
  });
}
