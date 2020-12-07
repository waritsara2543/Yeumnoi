// splitter

window.fn = {};

window.fn.open = function () {
  var menu = document.getElementById('menu');

  menu.open();
};

window.fn.load = function (page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');

  content.load(page)
    .then(menu.close.bind(menu));

};


//alert เลือกวันที่ยืม
var selectDate = function () {
  var dialog = document.getElementById('my-alert-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('alert-dialog.html', { append: true })
      .then(function (dialog) {
        dialog.show();
      });
  }

};
var OKAlertDialog = function () {

  var daysDiff;


  var startDate = document.getElementById('startDate').value;
  var endDate = document.getElementById('endDate').value;
  console.log(startDate);
  console.log(endDate);
  startDate = startDate.split("-");
  endDate = endDate.split("-");
  sDate = new Date(startDate[0], startDate[1] - 1, startDate[2]);
  eDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);
  daysDiff = Math.round((eDate - sDate) / 86400000);
  console.log(daysDiff);
  document.getElementById("incorrectDate").innerHTML = "*****กรุณากรอกวันที่ให้ถูกต้อง*****";
  if (daysDiff > 0) {

    document.getElementById('my-alert-dialog')
      .hide();
  }
  
};
var cancleAlertDialog = function () {


  document
    .getElementById('my-alert-dialog')
    .hide();
}



var notify = function () {
  ons.notification.alert('ชำระเงินเรียบร้อยแล้ว');
  $('#showShoppingCart').hide();
};


// ปุ่ม logout หน้า profile
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
  firebase.initializeApp(firebaseConfig);
  
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.

      displayName = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      console.log(displayName, email, photoUrl);

      $("#username").text(email);
      $("#displayname").text(displayName);
      $("#photo").attr("src", photoUrl);


    } else {
      // User is signed out.
      window.location.href = "index.html"
    }
  });
  document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id === 'profile') {
      $("#signOut").click(function () {
        console.log("Exit");
        firebase.auth().signOut().then(function () {
          window.location.href = "index.html"
        }).catch(function (error) {
          // An error happened.
        });
      });
    }
  });

})












