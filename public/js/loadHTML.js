const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_MESSAGING = firebase.messaging();
var lastMessageData = getLastMessage();

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

FIREBASE_MESSAGING.onMessage(async function(payload){
  if (payload){
      let lastMessageData = getLastMessage();
      if (lastMessageData.lastMessage){
          
          const { value: formValues } = await Swal.fire({
              title: 'Notification',
              html:
              `<h3>${lastMessageData.lastMessage}</h3>` + 
              '<input id="popup_input" class="popup_input">',
              focusConfirm: false,
              preConfirm: () => {
                return [
                  document.getElementById('popup_input').value,
                ]
              }
            })
            let answer = formValues[0];
            if (formValues) {
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: '답변이 제출되었습니다',
                  showConfirmButton: false,
                  timer: 1500
                })
            }

          if (answer && answer !== ""){
              let user = FIREBASE_AUTH.currentUser;
              FIREBASE_DATABASE.ref('/answers').push({
                  notificationKey: lastMessageData.lastMessageKey,
                  notification: lastMessageData.lastMessage,
                  answer: answer,
                  uid: user.uid,
                  name: user.displayName,
              }) 
          }
      }
  }
});

function getLastMessage(){
  let lastMessageData = {};
  let lastMessage = null;
  let lastMessageKey = null;
  FIREBASE_DATABASE.ref('/notifications').on('value', function(data) {
      let notifications = data.val();
      if (notifications){
          let keys = Object.keys(notifications);
          for(let i=0;i<keys.length;i++){
              let k = keys[i]
              let message = notifications[k].message
              if (i === keys.length-1){
                  lastMessageData.lastMessage = message;
                  lastMessageData.lastMessageKey = k
              }
          }
      }
  })
  return lastMessageData;
}