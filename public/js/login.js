const signInButton = document.getElementById('sign-in');
const FIREBASE_AUTH = firebase.auth();

FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);
signInButton.addEventListener('click', signIn);

function handleAuthStateChanged(user) {
    if (user){
        window.location = '/';
    }
}

function signIn(e) {
    e.preventDefault();
    FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}