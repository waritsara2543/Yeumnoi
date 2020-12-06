// var login = function() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
  
//     if (username === 'bob' && password === 'secret') {
//       ons.notification.alert('Congratulations!');
//     } else {
//       ons.notification.alert('Incorrect username or password.');
//     }
//   };

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

$("#signUp").click(function () {
    var email=$("#email").val();
  var password=$("#password").val();
  console.log(email);
  
  //Create User with Email and Password
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var userupdate = firebase.auth().currentUser;
        userupdate.updateProfile({
            displayName: name,
            photoURL: imgtarget
        }).then(function () {
            // Update successful.
            window.location.href = "index1.html"
        }).catch(function (error) {
            // An error happened.
        });
    }
});
})
  



    $("#Logout").click(function () {
        firebase.auth().signOut().then(function () {
            window.location.href = "login.html"
        }).catch(function (error) {
            // An error happened.
        });
    })
    

