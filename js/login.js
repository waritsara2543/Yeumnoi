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


  $(function () {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log(user);
        window.location.href = '../index1.html';
      }
    });


    $("#signinemail").click(function () {

      var email = $("#email").val();
      var password = $("#password").val();

      firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          $("#error").text(errorMessage);
          // ...
        });
    });

    $("#signingoogle").click(function () {

      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result){
        console.log(result);
        window.location.href = '../index1.html';
        
      }).catch(function(error){
        var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          $("#error").text(errorMessage);
      });


      // var provider = new firebase.auth.GoogleAuthProvider();
      // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      // firebase.auth().signInWithRedirect(provider);
      // firebase.auth().getRedirectResult().then(function (result) {
      //   if (result.credential) {
      //     // This gives you a Google Access Token. You can use it to access the Google API.
      //     var token = result.credential.accessToken;
      //   }
      //   // The signed-in user info.
      //   var user = result.user;
      // }).catch(function (error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   console.log(errorCode);
      //   $("#error").text(errorMessage);
      // });

    });

  })


})

