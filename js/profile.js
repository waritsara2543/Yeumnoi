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
    })
}

