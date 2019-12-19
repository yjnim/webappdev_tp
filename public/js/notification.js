const sendNotificationForm = document.getElementById('send-notification-form');
sendNotificationForm.addEventListener("submit", sendNotification);

var answerDiv = document.getElementById('answer');

FIREBASE_DATABASE.ref('/answers').on('child_added', function(data){
  let answers = data.val();
  let div = document.createElement('div');
  div.setAttribute('class', 'a-answer');

  for (var i=0; i<2; i++) {
      let p = document.createElement('p');
      if (i == 0) {
          p.innerHTML = `${answers.name}`;
          p.setAttribute('class', 'answer-name');
      } else if (i == 1) {
          p.innerHTML = `${answers.answer}`;
          p.setAttribute('class', 'answer-contents');
      }
      div.appendChild(p);
  }
  answerDiv.insertBefore(div, answerDiv.childNodes[0]);
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

