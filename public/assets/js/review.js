$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?review_id=23)
  var url = window.location.search;
  var reviewId;
  // Sets a flag for whether or not we're updating a review to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the review id from the url
  // In localhost:8080/review?review_id=1, reviewId is 1
  if (url.indexOf("?review_id=") !== -1) {
    reviewId = url.split("=")[1];
    getReviewData(reviewId);
  }
  // Getting jQuery references to the post body, title, form, and category select
  var nameInput = $("#name");
  var barInput = $("#barname");
  var commentInput = $("#comment");
  var ratingInput = $(".rating");
  var reviewForm = $("#review");

  // Adding an event listener for when the form is submitted
  $("#submit").on("click", function() {
    console.log("clicked");
    event.preventDefault();
    // Wont submit the post if we are missing a name or a bar name or a comment
    if (
      !nameInput.val().trim() ||
      !barInput.val().trim() ||
      !commentInput.val().trim()
    ) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newReview = {
      name: nameInput.val().trim(),
      bar: barInput.val().trim(),
      comment: commentInput.val().trim(),
      rating: ratingInput.val()
    };

    console.log(newReview);
  });
});
