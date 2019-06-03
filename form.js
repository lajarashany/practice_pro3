
function SendContact(){
  var thyName = document.getElementById("infname");
  var thyEmail = document.getElementById("inemail");
  var thyPassword = document.getElementById("inpassword");
	
	var msg = "";
  var numbers = "12345";
  
  if (thyName.value.length < 0){
    var msg = "Did you forget to input your name?";
  }

    else if (thyEmail.value.length < 5){
    	var msg = "That email is no good!";
    }


    else if (thyPassword.value != numbers) {
      var msg = "Incorrect password";
    }  

    else{
    	var msg = "Thank you";
    }
  
  return alert(msg);


}

  
  