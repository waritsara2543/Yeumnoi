
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
  
    var db = firebase.firestore();

    
    //เรียกแล้วข้อมูลไม่ขึ้น
   
    db.collection("Products").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var card = `<div class="card ">
           <img class="card-img-top" src="${doc.data().Photo}" alt="">
           <div class="card-body">
    <h4 class="card-title">${doc.data().Lender} - ${doc.data().Location} </h4>
    <p class="card-text">${doc.data().Name}</p>
    
  </div>
       </div>`;
        $("#show").append(card);
  
      });
    });
