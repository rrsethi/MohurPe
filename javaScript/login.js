
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "username" && password == "password"){
  window.location = "paymentPage.html";
  alert ("Login Successful");
}
else{
alert("Wrong Credentials...");
}
}