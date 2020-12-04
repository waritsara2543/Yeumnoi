$(function(){
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
 
  /*let storageRef = firebase.storage().ref('photos/myPictureName')
  let fileUpload = document.getElementById("cameraInput")

  fileUpload.addEventListener('change', function(evt) {
      let firstFile = evt.target.files[0] // upload the first file only
      let uploadTask = storageRef.put(firstFile)
  })*/
  function uploadImage(){
    const ref = firebase.storage().ref()

    const file = document.querySelector("#photo").files[0]
    const name = new Data() + '-' + file.name
    const metadata = {
        contentType:file.type
    }

    const task = ref.child(name).put(file,metadata)

    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url)
      alert("อัปโหลดสำเร็จ")
      const image = document.querySelector('#image')
      image.src = url
    })

  }
})