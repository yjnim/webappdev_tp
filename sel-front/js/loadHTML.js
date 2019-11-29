$(document).ready(function(){
  $("#header").load("header.html");
  $("#container").load("home.html");
});

function gopage(filename) {  
  $("#container").load(filename)
}