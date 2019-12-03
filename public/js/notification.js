
const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();

const sendNotificationForm = document.getElementById('send-notification-form');
var answerDiv = document.getElementById('answer');

FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);

sendNotificationForm.addEventListener("submit", sendNotification);

FIREBASE_DATABASE.ref('/answers').on('child_added', function(data){
  let answers = data.val();
  let p = document.createElement('p');
  p.innerHTML = `${answers.name} : ${answers.answer}`
  answerDiv.insertBefore(p, answerDiv.childNodes[0]);
})



function handleAuthStateChanged(user) {
  if (user) {
    if(user.email !== 'interpret96@gmail.com'){
      window.location = '/';
    }
   
  } else {
    window.location = '/';
  }
}

function sendNotification(e) {
  e.preventDefault();

  const notificationMessage = document.getElementById('notification-message').value;
  if (!notificationMessage) return;

  FIREBASE_DATABASE.ref('/notifications')
    .push({
      user: FIREBASE_AUTH.currentUser.displayName,
      message: notificationMessage,
      userProfileImg: FIREBASE_AUTH.currentUser.photoURL
    })
    .then(() => {
      document.getElementById('notification-message').value = "";
    })
    .catch(() => {
      console.log("error sending notification :(")
    });
}

