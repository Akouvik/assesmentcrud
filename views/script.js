$(document).ready(function() {
  $("#create").on("click", function() {
    location.href = "/getAUser";
  });

  $("p").text("The DOM is now loaded and can be manipulated!!!!.");
  console.log("akouvi you are doing the best you can");
  //the login
  $("#signup").on("click", function(e) {
    const username = document.getElementById;
    //onclick send a get request with the username and the password
    e.preventDefault();
    alert("hey");
  });
});
