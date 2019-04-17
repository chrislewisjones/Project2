$(document).ready(function() {
  // Getting jQuery references to the review body, title, form
  var nameInput = $("#name");
  var barInput = $("#barname");
  var reviewUrl = window.location.href
    .split("=")[1]
    .split("%")
    .join(" ");
  // split("%").join(" ");
  console.log(reviewUrl);
  barInput.val(reviewUrl);

  var commentInput = $("#comment");

  // Adding an event listener for when the form is submitted
  $("#submit").on("click", function() {
    console.log("clicked");
    event.preventDefault();
    var ratingInput = $("input[name='rating']:checked").val();
    console.log(ratingInput);
    var newReview = {
      name: nameInput.val().trim(),
      bar_name: barInput.val().trim(),
      comment: commentInput.val().trim(),
      rate: ratingInput,
      created_at: moment().format("YYYY-MM-DD HH:mm:ss") 
    };

    console.log(newReview);
    // Wont submit the post if we are missing a name or a bar name or a comment or a rating
    if (
      !nameInput.val().trim() ||
      !barInput.val().trim() ||
      !commentInput.val().trim() ||
      !ratingInput
    ) {
       return  $("#myModal").modal("toggle");
      // alert("please enter the fields");
    }
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newReview)
      // On success, run the following code
      .then(function(data) {
        console.log(data);

        var row = $("<div>");
        row.addClass("review");
        row.append("<p>REVIEW</p>");
        row.append("<hr>");
        row.addClass("jumbotron");
        row.append("<p>" + data.name + "</p>");
        row.append("<p> Bar Name: " + data.bar_name + " </p>");
        row.append("<p> Comment: " + data.comment + "</p>");
        row.append("<p> Rating: " + data.rate + " Stars </p>");
        row.append(
          "<p>At " +
            moment(data.created_at).format("h:mma on dddd, MMMM Do YYYY") +
            "</p>"
        );
        row.append("<hr>");
        $("#review-area").prepend(row);
      });

    // Empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#barname").val("");
    $("#comment").val("");
    $("input[name='rating']:checked").attr("checked", false);
    window.location.href = "/readreview";
  });
  // When the page loads, grab all of our reviews
  $.get("/api/all", function(data) {
    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
        var row = $("<div>");
        row.addClass("review");
        row.append("<p>REVIEW</p>");
        row.append("<hr>");
        row.addClass("jumbotron");
        row.append("<p> Name - " + data[i].name + "</p>");
        row.append("<p> Bar Name - " + data[i].bar_name + "</p>");
        row.append("<p> Comment - " + data[i].comment + "</p>");
        row.append("<p> Rating - " + data[i].rate + " Stars </p>");
        row.append(
          "<p>At " +
            moment(data[i].created_at).format("h:mma on dddd, MMMM Do YYYY") +
            "</p>"
        );
        row.append("<hr>");
        $("#review-area").prepend(row);
      }
    }
  });
});
