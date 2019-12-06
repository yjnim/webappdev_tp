$(document).ready(function(){
    const subscribeButton = document.getElementById('subscribe');
    const unsubscribeButton = document.getElementById('unsubscribe');
    subscribeButton.addEventListener("click", subscribeToNotifications);
    unsubscribeButton.addEventListener("click", unsubscribeFromNotifications);
})


var lastMessageData = getLastMessage();

FIREBASE_MESSAGING.onTokenRefresh(handleTokenRefresh);
FIREBASE_MESSAGING.onMessage(async function(payload){
    if (payload){
        let lastMessageData = getLastMessage();
        if (lastMessageData.lastMessage){
            
            const { value: formValues } = await Swal.fire({
                title: '알림',
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

function subscribeToNotifications() {
    FIREBASE_MESSAGING.requestPermission()
        .then(() => handleTokenRefresh())
        .then(() => checkSubscription())
        .catch((err) => {
            console.log("error getting permission :(");
        });
}

function unsubscribeFromNotifications() {
    FIREBASE_MESSAGING.getToken()
        .then((token) => FIREBASE_MESSAGING.deleteToken(token))
        .then(() => FIREBASE_DATABASE.ref('/tokens').orderByChild("uid").equalTo(FIREBASE_AUTH.currentUser.uid).once('value'))
        .then((snapshot) => {
            const key = Object.keys(snapshot.val())[0];
            return FIREBASE_DATABASE.ref('/tokens').child(key).remove();
        })
        .then(() => checkSubscription())
        .catch((err) => {
            console.log("error deleting token :(");
        });
}

function checkSubscription() {
    FIREBASE_DATABASE.ref('/tokens').orderByChild("uid").equalTo(FIREBASE_AUTH.currentUser.uid).once('value').then((snapshot) => {
        if (snapshot.val()) {
            subscribeButton.setAttribute("hidden", "true");
            unsubscribeButton.removeAttribute("hidden");
        } else {
            unsubscribeButton.setAttribute("hidden", "true");
            subscribeButton.removeAttribute("hidden");
        }
    });
}


function handleTokenRefresh() {
    let user = FIREBASE_AUTH.currentUser;
    return FIREBASE_MESSAGING.getToken().then((token) => {
        FIREBASE_DATABASE.ref('/tokens').push({
            token: token,
            uid: user.uid,
            name: user.displayName,
            email: user.email
        });
    });
}