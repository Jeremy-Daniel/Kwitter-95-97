//YOUR FIREBASE LINKS
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

var nameOfUser = localStorage.getItem("username");
var RoomName = localStorage.getItem("roomName");

function SendButton(){
var Message = document.getElementById("messageSending").value;
firebase.database().ref(RoomName).push({
      name: nameOfUser, 
      message: Message,
      like: 0
});
document.getElementById("messageSending").value = "";


}


function getData() { firebase.database().ref("/"+RoomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
var message_sender = message_data["name"];
var data_message = message_data["message"];
var no_like = message_data["like"];
var NameTag = '<h4>'+ message_sender+ '<img src = "tick.png" class = "user_tick"></h4>';
var MessageTag = '<h4 class = "message_h4">'+ data_message+ '</h4>';
var likeButton = '<button class = " btn btn-warning" id = "'+ firebase_message_id+ '" value = "'+ no_like + '" onclick = "updateLike(this.id)">';
var SpanTag = '<span class = "glyphicon glyphicon-thumbs-up">Like: '+ no_like+ '</span></button><hr>';
var row = NameTag+ MessageTag+ likeButton+ SpanTag;
document.getElementById("output").innerHTML += row; 
//End code
      } });  }); }
getData();

function updateLike(messageID){
var CurrentLikes = document.getElementById(messageID).value;
var UpdateLikes = Number(CurrentLikes)+1;
firebase.database().ref(RoomName).child(messageID).update({
      like: UpdateLikes

})
}
function Logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}