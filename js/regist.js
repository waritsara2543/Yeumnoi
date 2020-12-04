// var login = function() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
  
//     if (username === 'bob' && password === 'secret') {
//       ons.notification.alert('Congratulations!');
//     } else {
//       ons.notification.alert('Incorrect username or password.');
//     }
//   };

    $("#Logout").click(function () {
        firebase.auth().signOut().then(function () {
            window.location.href = "login.html"
        }).catch(function (error) {
            // An error happened.
        });
    })

