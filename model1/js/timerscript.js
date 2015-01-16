$(document).ready(function() {
	var startCurrentTime = new Date();
   	document.getElementById('timeDisplay').innerHTML = startCurrentTime.toTimeString().substr(0,5);

	var startClock = setInterval(function() {
    		var currentTime = new Date();
   		document.getElementById('timeDisplay').innerHTML = currentTime.toTimeString().substr(0,5);
   		console.log("gg");
    	},10000);

})