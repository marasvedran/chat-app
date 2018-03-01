let config = {
    apiKey: "AIzaSyCyxysH2qZO_E9lub8mYpczm-cVBZySbhU",
    authDomain: "chatt-app-903ac.firebaseapp.com",
    databaseURL: "https://chatt-app-903ac.firebaseio.com",
    projectId: "chatt-app-903ac",
    storageBucket: "chatt-app-903ac.appspot.com",
    messagingSenderId: "605110691806"
};
firebase.initializeApp(config);


$("#email-password-create").click((event) => {

    event.preventDefault();

    let email = $("#email").val();

    let password = $("#password").val();

    $('form :input').val('');


    window.location.assign("index.html");

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

        // Handle Errors here.

        let errorCode = error.code;

        console.log("Error code", errorCode);

        let errorMessage = error.message;

        console.log("Error message", errorMessage);

        // ...

    });


});