const signInButton = document.getElementById('sign-in');
FIREBASE_AUTH.onAuthStateChanged(loginHandleAuthStateChanged);
signInButton.addEventListener('click', signIn);

function signIn(e) {
    e.preventDefault();
    FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

function loginHandleAuthStateChanged (user){
    if(user){
        window.location = '/';
    }
}