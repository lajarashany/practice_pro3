/* functions for my quiz form */

function SendContact(){
var thyName = document.getElementById("infname");
var thyEmail = document.getElementById("inemail");
var thyPassword = document.getElementById("inpassword");
	
	var msg = "";
  if(thyName.value.length < 0){
    var msg = "Did you forget to input your name?";
  }

  else if(thyEmail.value.length < 5){
  	var msg = "That email is no good!";
  }

  var numbers = 12345;
  else if(thyPassword.value.match(numbers)) {
  var msg = "Incorrect password";
  }  

  else{
  	var msg = "Thank you"
  }
  
  return alert(msg);


}

  
  