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
  ons.notification.alert('This dialog was created with ons.notification');
};





// $(function(){

// 	var startDateTextBox = $('#dateStart');
// 	var endDateTextBox = $('#dateEnd');

// 	startDateTextBox.datepicker({ 
// 		dateFormat: 'dd-M-yy',
// 		onClose: function(dateText, inst) {
// 			if (endDateTextBox.val() != '') {
// 				var testStartDate = startDateTextBox.datetimepicker('getDate');
// 				var testEndDate = endDateTextBox.datetimepicker('getDate');
// 				if (testStartDate > testEndDate)
// 					endDateTextBox.datetimepicker('setDate', testStartDate);
// 			}
// 			else {
// 				endDateTextBox.val(dateText);
// 			}
// 		},
// 		onSelect: function (selectedDateTime){
// 			endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate') );
// 		}
// 	});
// 	endDateTextBox.datepicker({ 
// 		dateFormat: 'dd-M-yy',
// 		onClose: function(dateText, inst) {
// 			if (startDateTextBox.val() != '') {
// 				var testStartDate = startDateTextBox.datetimepicker('getDate');
// 				var testEndDate = endDateTextBox.datetimepicker('getDate');
// 				if (testStartDate > testEndDate)
// 					startDateTextBox.datetimepicker('setDate', testEndDate);
// 			}
// 			else {
// 				startDateTextBox.val(dateText);
// 			}
// 		},
// 		onSelect: function (selectedDateTime){
// 			startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate') );
// 		}
// 	});

// });
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
      window.location.href = "login.html"
    }
  });
  document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id === 'profile') {
      $("#signOut").click(function () {
        console.log("Exit");
        firebase.auth().signOut().then(function () {
          window.location.href = "login.html"
        }).catch(function (error) {
          // An error happened.
        });
      });
    }
  });

})













