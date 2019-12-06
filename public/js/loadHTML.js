const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_MESSAGING = firebase.messaging();
FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);


$(document).ready(function(){
  $("#header").load("/html/header.html");
  $("#container").load("/html/home.html");
});

function gopage(filename) {  
  $("#container").load(filename)
}

function handleAuthStateChanged(user) {
  if (user){
    document.getElementById('login').setAttribute("hidden", "true");
    document.getElementById('logout').removeAttribute("hidden");
    document.getElementById('mypage').removeAttribute("hidden");
    if (user.email === 'interpret96@gmail.com'){
      document.getElementById('notice').removeAttribute("hidden");
    }
  }else{
    var login = document.getElementById('login')
    if (login){
      document.getElementById('logout').setAttribute("hidden", "true");
      document.getElementById('mypage').setAttribute("hidden", "true");
      document.getElementById('notice').setAttribute("hidden", "true");
      document.getElementById('login').removeAttribute("hidden");
    }
    $("#header").load("/html/header.html");
    $("#container").load("/html/home.html");
  }
}

function signOut() {
  FIREBASE_AUTH.signOut();
}