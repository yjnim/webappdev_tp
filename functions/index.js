const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('./app');

admin.initializeApp();

exports.app = functions.https.onRequest(app);


exports.sendNotifications = functions.database.ref('/notifications/{notificationId}').onWrite((change, context) => {

    if (change.before.exists()) {
        return null;
    }

    if (!change.after.exists()) {
        return null;
    }

    const NOTIFICATION_SNAPSHOT = change.after;
    const payload = {
        notification: {
            title: `${NOTIFICATION_SNAPSHOT.val().user}님의 새로운 메세지`,
            body: NOTIFICATION_SNAPSHOT.val().message,
            icon: NOTIFICATION_SNAPSHOT.val().userProfileImg,
            click_action: "https://webappdev-1a951.firebaseapp.com"
        }
    }


    return admin.database().ref('/tokens').once('value').then((data) => {

        if (!data.val()) return;

        const snapshot = data.val();
        const tokens = [];

        for (let key in snapshot) {
            tokens.push(snapshot[key].token);
        }
        return admin.messaging().sendToDevice(tokens, payload)
    });
}); 