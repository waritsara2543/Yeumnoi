
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
            var card = `
                        <div id="${doc.data().Name}" class="detail" onclick="showDetail(id)">
                        <div class="card " >
                        <img class="card-img-top" src="${doc.data().Photo}" alt="" >
                     
                        <div class="container">
                        <div class="col-9">
                        <h5 class="card-title"> ${doc.data().Name}</h5>
                        <p class="card-text">${doc.data().Lender} - ${doc.data().Location}</p>
                         </div>
                       
                        <div class="col-3">
                        <h5 class="card-text">   <font color="red">${doc.data().Price}</font></h5>
                        <h6 class="card-text" > <font color="red">บาท </font> </h6>
                        </div>
                                             
                       </div>

                        </div>
                        </div>`

              ;



            $("#show").append(card);

          }
        });

      });


    })





    //carusel index
    db.collection("Products").get().then((querySnapshot) => {
      $('#carousel').empty();
      querySnapshot.forEach((doc) => {
        if (doc.data().Location === 'กระทู้') {
          var card = `<ons-carousel-item modifier="nodivider" class="recomended-item" id="${doc.data().Name}"  onclick="showDetailCarousel(id)">
          <div class="thumbnail" style="background-color: rgb(161, 114, 140);"></div>
          <ons-list>
              <ons-list-item>
              <img  style="width: 80%;height: 170px;" src="${doc.data().Photo}" alt="" >
              <div class="container">
                        <div class="">
                        <h5 class="card-title"> ${doc.data().Name} <font color="green"> - ${doc.data().Location}</font></h5>
                     
                        <h6 class="card-text">   <font color="red">ราคา ${doc.data().Price} บาท</font></h6>

                         </div>            

              </ons-list-item>
          </ons-list>
      </ons-carousel-item>`;
          $("#carousel").append(card);

        }

      });
    });

  }


})

function search(input) {
  console.log(input);
  $("#showsearch").empty();
  db.collection("Products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().Name === input) {
        $("#showsearch").empty();
        var card = `
            <div id="${doc.data().Name}" class="detail" onclick="showDetail(id)">
            <div class="card " >
            <img class="card-img-top" src="${doc.data().Photo}" alt="" >
         
            <div class="container">
            <div class="col-9">
            <h5 class="card-title"> ${doc.data().Name}</h5>
            <p class="card-text">${doc.data().Lender} - ${doc.data().Location}</p>
             </div>
           
            <div class="col-3">
            <h5 class="card-text">   <font color="red">${doc.data().Price}</font></h5>
            <h6 class="card-text" > <font color="red">บาท </font> </h6>
            </div>
                                 
           </div>

            </div>
            </div>`

          ;



        $("#showsearch").append(card);
      } else if (doc.data().Name.substring(0, 1) === input.substring(0, 1)) {
        var card = `
                        <div id="${doc.data().Name}" class="detail" onclick="showDetail(id)">
                        <div class="card " >
                        <img class="card-img-top" src="${doc.data().Photo}" alt="" >
                     
                        <div class="container">
                        <div class="col-9">
                        <h5 class="card-title"> ${doc.data().Name}</h5>
                        <p class="card-text">${doc.data().Lender} - ${doc.data().Location}</p>
                         </div>
                       
                        <div class="col-3">
                        <h5 class="card-text">   <font color="red">${doc.data().Price}</font></h5>
                        <h6 class="card-text" > <font color="red">บาท </font> </h6>
                        </div>
                                             
                       </div>

                        </div>
                        </div>`

          ;



        $("#showsearch").append(card);

      }
    });

  });
}

//หน้า detail แต่ละสินค้า
function showDetail(id) {
  navcategory.pushPage('views/detail.html')
  console.log(id);
  db.collection("Products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().Name === id) {
        var card = `<div class="card " >
                        <img class="card-img-top" src="${doc.data().Photo}" alt="">
                        <div class="container">
                        <div class="">
                        <h5 class="card-title"> ${doc.data().Name}</h5>
                        <p class="card-text">${doc.data().Lender} - ${doc.data().Location}</p>
                        <p></p>
                         </div>
                       
                        <div class="col-3">
                        <h5 class="card-text">   <font color="red">${doc.data().Price}</font></h5>
                        <h6 class="card-text" > <font color="red">บาท </font> </h6>
                        </div>
                                             
                       </div>


                        <div class="col-12">
                        <p class="card-text">${doc.data().Detail}</p>
                        </div>
                        </div>
                        </div>`;
        $("#showDetailList").append(card);

      }
    });
  });
}
//showdetail carousel
function showDetailCarousel(id) {
  navhome.pushPage('views/detail.html')
  console.log(id);
  db.collection("Products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().Name === id) {
        var card = `<div class="card " >
                        <img class="card-img-top" src="${doc.data().Photo}" alt="">
                        <div class="container">
                        <div class="">
                        <h5 class="card-title"> ${doc.data().Name}</h5>
                        <p class="card-text">${doc.data().Lender} - ${doc.data().Location}</p>
                        <p></p>
                         </div>
                       
                        <div class="col-3">
                        <h5 class="card-text">   <font color="red">${doc.data().Price}</font></h5>
                        <h6 class="card-text" > <font color="red">บาท </font> </h6>
                        </div>
                                             
                       </div>


                        <div class="col-12">
                        <p class="card-text">${doc.data().Detail}</p>
                        </div>
                        </div>
                        </div>`;
        $("#showDetailList").append(card);

      }
    });
  });
}
var storage = firebase.storage();


function addImage() {
  // console.log("opopopopo");

  const ref = storage.ref()

  const file = document.querySelector("#photo").files[0]
  const name = (`profile img/${Date.now()}-${file.name}`);
  const metadata = { contentType: file.type }
  const task = ref.child(name).put(file, metadata)

  task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url)
      alert("อัปโหลดสำเร็จ")
      const image = document.querySelector('#image')
      image.src = url

    }

    )
}












