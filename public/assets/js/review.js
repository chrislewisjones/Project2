$(document).ready(function() {

  // Getting jQuery references to the review body, title, form
  var nameInput = $("#name");
  var barInput = $("#barname");
  var commentInput = $("#comment");
  // var ratingVal="";
  // var ratingInput = $("input[type='radio'][name='rating']:checked").val();

  // if (ratingInput.length > 0) {
  //   ratingVal = ratingInput.val();
  // }

  // console.log(ratingInput);
  var reviewForm = $("#review");
  // Adding an event listener for when the form is submitted
  $("#submit").on("click", function() {
    console.log("clicked");
    // $("#review").on("submit", function(){

    event.preventDefault();
    var ratingInput = $("input[name='rating']:checked").val();
    console.log(ratingInput);
    // Wont submit the post if we are missing a name or a bar name or a comment
    if (
      !nameInput.val().trim() ||
      !barInput.val().trim() ||
      !commentInput.val().trim() ||
      !ratingInput
    ) 
    {
      return;
    }
     // Send an AJAX POST-request with jQuery
  $.post("/api/new", newReview)
  // On success, run the following code
  .then(function() {

   var row = $("<div>");
      row.addClass("review");

      row.append("<p> Name - " + newReview.name + "</p>");
      row.append("<p> Bar Name - " + newReview.bar_name + " </p>")
      row.append("<p> Comment - " + newReview.comment + "</p>");
      row.append("<p> Rating - " + newReview.rate + " Stars </p>");
      row.append("<p>At " + moment(newReview.created_at).format("h:mma on dddd, MMMM Do YYYY") + "</p>");
      row.append("<hr>") 
      $("#review-area").prepend(row);

  });

// Empty each input box by replacing the value with an empty string
$("#name").val("");
$("#barname").val("");
$("#comment").val("");
$("input[name='rating']:checked").attr("checked", false);
  });
   // When the page loads, grab all of our reviews
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("review");

     
      row.append("<p> Name - " + data[i].name + "</p>");
      row.append("<p> Bar Name - " + data[i].bar_name + "</p>")
      row.append("<p> Comment - " + data[i].comment + "</p>");
      row.append("<p> Rating - " + data[i].rate + " Stars </p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd, MMMM Do YYYY") + "</p>");
      row.append("<hr>") 
      $("#review-area").prepend(row);

    }

  }
});
});
