
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


//หน้า แต่ละประเภท
document.addEventListener('init', function (event) {
  var page = event.target;

  if (page.id === 'category' || page.id === 'home') {
    $('.category-item').off('click').on('click', function () {
      var id = $(this).attr('id');
      console.log(id);
      $("#show").empty();
      db.collection("Products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().Category === id) {
            var card = `<div id="${doc.data().Name}" class="detail" onclick="openPlaylist(id)">
                        <div class="card " >
                        <img class="card-img-top" src="${doc.data().Photo}" alt="" >
                        <div class="card-body">
                        <h4 class="card-title"> ${doc.data().Name}</h4>
                        <p class="card-text">${doc.data().Lender} - ${doc.data().Location}</p>
                        </div>
                        </div>
                        </div>`;
            $("#show").append(card);

          }
        });
      });
    })

  }
})


//หน้า detail แต่ละสินค้า
function openPlaylist(id) {
  navcategory.pushPage('views/detail.html')
  console.log(id);
  db.collection("Products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().Name === id) {
        var card = `<div class="card " >
                        <img class="card-img-top" src="${doc.data().Photo}" alt="">
                        <div class="card-body">
                        <h4 class="card-title"> ${doc.data().Name}</h4>
                        <p class="card-text">${doc.data().Lender} - ${doc.data().Location}</p>
                        <p class="card-text">${doc.data().Detail}</p>
                        </div>
                        </div>`;
        $("#showDetailList").append(card);

      }
    });
  });
}
