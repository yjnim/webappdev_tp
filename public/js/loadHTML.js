$(document).ready(function(){
<<<<<<< HEAD
  $("#header").load("header.html");
  $("#container").load("home.html");
=======
  $("#header").load("/html/header.html");
  $("#container").load("/html/home.html");
>>>>>>> haeseok
});

function gopage(filename) {  
  $("#container").load(filename)
}