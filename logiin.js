let config = {
    apiKey: "AIzaSyCyxysH2qZO_E9lub8mYpczm-cVBZySbhU",
    authDomain: "chatt-app-903ac.firebaseapp.com",
    databaseURL: "https://chatt-app-903ac.firebaseio.com",
    projectId: "chatt-app-903ac",
    storageBucket: "chatt-app-903ac.appspot.com",
    messagingSenderId: "605110691806"
};
firebase.initializeApp(config);




let provider = new firebase.auth.GoogleAuthProvider();



$("#google-login").click(() => {

    firebase.auth().signInWithPopup(provider).then(function(result) {

        // This gives you a Google Access Token. You can use it to access the Google API.

        let token = result.credential.accessToken;

        // The signed-in user info.

        let user = result.user;

        // ...

        window.location.assign("index.html");

    }).catch(function(error) {

        // Handle Errors here.

        let errorCode = error.code;

        let errorMessage = error.message;

        // The email of the user's account used.

        let email = error.email;

        // The firebase.auth.AuthCredential type that was used.

        let credential = error.credential;

        // ...

    });

});



$("#login-email-password").click((event) => {

    event.preventDefault();

    let email = $("#email").val();

    let password = $("#password").val();



    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

        // Handle Errors here.

        let errorCode = error.code;

        console.log("Error code", errorCode);

        let errorMessage = error.message;

        console.log("Error message", errorMessage);

        // ...

    });

    window.location.assign("index.html");

});