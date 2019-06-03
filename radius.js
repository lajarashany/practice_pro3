function letscalc(){
  var thySphere = document.getElementById("infoSphere").value;
  console.log(thySphere);
	
	var msg = "";
  var a = 0.75;
  var b = 3.1416;
  var c = Math.pow(thySphere, 3);
  var result = a * b * c;

  console.log(a, b, c ,result);

  
  if (thySphere < 0){
    var msg = "Did you forget to input the value?";
  } 

    else{

      document.getElementById("RadiusHeader").innerHTML = "RESULT: " + result.toFixed(2);
      var msg = result;



    	// var msg = "Thank you";
      // document.getElementById("ContactUS").innerHTML = "THANK YOU";
      

    }
  
  return alert(msg);


}

  
  