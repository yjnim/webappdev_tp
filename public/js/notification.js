$(document).ready(function(){
  const sendNotificationForm = document.getElementById('send-notification-form');
  sendNotificationForm.addEventListener("submit", sendNotification);
});

var answerDiv = document.getElementById('answer');

FIREBASE_DATABASE.ref('/answers').on('child_added', function(data){
  let answers = data.val();
  let p = document.createElement('p');
  p.innerHTML = `${answers.name} : ${answers.answer}`
  answerDiv.insertBefore(p, answerDiv.childNodes[0]);
})


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

