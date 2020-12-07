

  document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id === 'profile') {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
  
        displayName = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        uid = user.uid;
        console.log(displayName, email, photoUrl);
        console.log(uid);
  
        $("#username").text(email);
        $("#displayname").text(displayName);
        $("#image").attr("src", photoUrl);
        
  
      } else {
        // User is signed out.
        window.location.href = "home.html";
      }
    });
    
        $("#signOut").click(function () {
          console.log("Exit");
          firebase.auth().signOut().then(function () {
            window.location.href = "home.html"
          }).catch(function (error) {
              // An error happened.
          });
        });
      }
    });
  
  

  var OKAlertDialog = function () {

    var daysDiff;
  
  
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    console.log(startDate);
    console.log(endDate);
    startDate1 = startDate.split("-");
    endDate1 = endDate.split("-");
    sDate = new Date(startDate1[0], startDate1[1] - 1, startDate1[2]);
    eDate = new Date(endDate1[0], endDate1[1] - 1, endDate1[2]);
    daysDiff = Math.round((eDate - sDate) / 86400000);
    console.log(daysDiff);
    document.getElementById("incorrectDate").innerHTML = "*****กรุณากรอกวันที่ให้ถูกต้อง*****";
    if (daysDiff > 0) {
  
      document.getElementById('my-alert-dialog')
        .hide();
      addtocart(startDate,endDate,daysDiff);
    }
    
  };
  var cancleAlertDialog = function () {
  
  
    document
      .getElementById('my-alert-dialog')
      .hide();
  }
  
  
  
  

  
  
  