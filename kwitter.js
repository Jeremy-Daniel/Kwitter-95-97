function addUser() {
var User_name = document.getElementById("Username").value;
localStorage.setItem("username",User_name);
window.location = "kwitter_room.html";
}