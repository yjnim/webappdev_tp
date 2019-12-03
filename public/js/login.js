const signInButton = document.getElementById('sign-in');


const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_MESSAGING = firebase.messaging();


FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);
signInButton.addEventListener('click', signIn);

function handleAuthStateChanged(user) {
    if (user){
        window.location = '/';
    }
}


function signIn() {
    FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
  