var barName = window.location.href
  .split("=")[1]
  .split("%")
  .join(" ");
$.post("/api/reviews/", { barName }, function(data) {
  console.log(data);
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("review");
      
      row.append("<p> Bar Name - " + data[i].bar_name + "</p>");
      row.append("<hr>");
      row.addClass("jumbotron");
      row.append("<p> Name - " + data[i].name + "</p>");
      row.append("<p> Comment - " + data[i].comment + "</p>");
      row.append("<p> Rating - " + data[i].rate + " ⭐(s)</p>");
      row.append("<hr>");
      row.append(
        "<p>At " +
          moment(data[i].created_at).format("h:mma on dddd, MMMM Do YYYY") +
          "</p>"
      );
      $("#review-area").prepend(row);
    }
  } else {
    $("#review-area").prepend("<h1>🐶No reviews yet🐶</h1>");
  }
});
