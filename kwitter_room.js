
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC-FHR5FPuVX9tksdH7lMHD3daRQaMHl80",
      authDomain: "kwitter-a421d.firebaseapp.com",
      databaseURL: "https://kwitter-a421d-default-rtdb.firebaseio.com",
      projectId: "kwitter-a421d",
      storageBucket: "kwitter-a421d.appspot.com",
      messagingSenderId: "340438561317",
      appId: "1:340438561317:web:0ef3a37dff3c0c1392c5cc"
    };
    
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
var NameUser = localStorage.getItem("username");
document.getElementById("showUser").innerHTML = "Welcome"+ NameUser+ "!";
function addRoom(){
var room_name = document.getElementById("addRoom").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("roomName",room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      //Start code
row = "<div class = 'room_name' id = '"+ Room_names + "' onclick = 'redirectToRoom(this.id)'>#"+ Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoom(name){
localStorage.setItem("roomName",name);
window.location = "kwitter_page.html";
}
function Logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}