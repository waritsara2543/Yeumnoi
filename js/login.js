var firebaseConfig = {
  apiKey: "AIzaSyDaIcVja2qOFzfpalsvfAlNVUh8usBpZIs",
  authDomain: "yuemnouy.firebaseapp.com",
  databaseURL: "https://yuemnouy.firebaseio.com",
  projectId: "yuemnouy",
  storageBucket: "yuemnouy.appspot.com",
  messagingSenderId: "380855889580",
  appId: "1:380855889580:web:dd628715a048c024f4f909",
  measurementId: "G-D02XVV0RLY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
     console.log("user :", email, " signed in");
     displayName = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    console.log(displayName, email, photoUrl);
    $("#username").text(email);
    $("#displayname").text(displayName);
    $("#image").attr("src", photoUrl);

  } else {
    // User is signed out.

  }
});

 function signup () {
   console.log("sign up");
   var email = $("#email-signup").val();
   var password = $("#password-signup").val();
   console.log(email);
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
     window.location.href = '../yuemnoi.html';
   })
     .catch(function (error) {

       console.log(error.message);
    });

};
  



$("#signinemail").click(function () {
  console.log("login");
  var email = $("#email").val();
  var password = $("#password").val();
  
  firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    window.location.href = '../yuemnoi.html';
  })
    .catch(function (error) {

      // console.log(error.message);
    });

});

$("#signingoogle").click(function () {

  console.log("signingoogle");
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.href = '../yuemnoi.html';

  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});





