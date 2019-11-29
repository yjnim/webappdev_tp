$(document).ready(function(){
  $("#header").load("header.html");
  $("#container").load("home.html");

  // $("#bt-goselab").on("click", gopage('selab.html'));
  // $("#bt-gocourse").on("click", gopage('course.html'));
});

function gopage(filename) {  
  $("#container").load(filename)
}