function counting()
	{
		var today = new Date();
		
		var hour = today.getHours();
		if (hour<10) hour = "0"+hour;
		
		var minute = today.getMinutes();
		if (minute<10) minute = "0"+minute;
		
		var secons = today.getSeconds();
		if (secons<10) secons = "0"+secons;
		
		document.getElementById("clock").innerHTML = hour+":"+minute+":"+secons;
		 
		 setTimeout("counting()",1000);
	}