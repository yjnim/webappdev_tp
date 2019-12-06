checkSubscription();
var subscribeButton = null;
var unsubscribeButton = null;

FIREBASE_MESSAGING.onTokenRefresh(handleTokenRefresh);

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
    var subscribeButton = document.getElementById('subscribe');
    var unsubscribeButton = document.getElementById('unsubscribe');
    subscribeButton.addEventListener("click", subscribeToNotifications);
    unsubscribeButton.addEventListener("click", unsubscribeFromNotifications);
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