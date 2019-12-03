$(document).ready(function(){
  $("#header").load("/html/header.html");
  $("#container").load("/html/home.html");
});

function gopage(filename) {  
  $("#container").load(filename)
}