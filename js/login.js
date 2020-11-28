$(function () {
  

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


  $("#logIn").click(function () {
    const Username = $("#Username").val();
    const Password = $("#password").val();
    firebase.auth().signInWithEmailAndPassword(Username, Password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      ons.notification.alert(errorMessage);
    });
  })
  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     window.location.href = 'signin1.html';
  //   }

});




// $("#signingoogle").click(function () {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//   firebase.auth().signInWithRedirect(provider);
//   firebase.auth().getRedirectResult().then(function (result) {
//     if (result.credential) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = result.credential.accessToken;
//     }
//     // The signed-in user info.
//     var user = result.user;
//   }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode);
//     ons.notification.alert(errorMessage);
//   });
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       window.location.href = 'mongduu.html';
//     }
//   });
// });




$("#login-button").click(function (event) {
  event.preventDefault();

  $('form').fadeOut(500);

  $('.wrapper').addClass('form-success');
});