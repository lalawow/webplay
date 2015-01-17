$(document).ready(function() {
	var startCurrentTime = new Date();
   	document.getElementById('timeDisplay').innerHTML = startCurrentTime.toTimeString().substr(0,5);

	var startClock = setInterval(function() {
    		var currentTime = new Date();
   		document.getElementById('timeDisplay').innerHTML = currentTime.toTimeString().substr(0,5);
    	},10000);

})

function timer() {
	this.minute = 0;
	this.second = 0;
	this.milsecond = 0;


	this.addSecond = function() {
		this.second+=1;
//		console.log("gg"+this.second);
		if  (this.second === 60) {
			this.second = 0;
			this.minute +=1;
		};
	};

	this.getMinutes = function() {
		return this.minute;
	};

	this.getSeconds = function() {
		return this.second;
	};


}

var beginCommonTimer;

function startCommonTimer() {
	var commonTimer = new timer();
	console.log("timer start");
	beginCommonTimer = setInterval(function() {
		commonTimer.addSecond();
		var minutes = commonTimer.getMinutes();
		var seconds = commonTimer.getSeconds();
//		console.log(seconds);
		document.getElementById('commonTimerDisplay').innerHTML = display5DigitsTime(minutes,seconds);
	},1000);
}

function stopCommonTimer() {
	clearInterval(beginCommonTimer);
}

function display5DigitsTime(minutes, seconds) {
	var displayResult = minutes + ":";
	if (minutes < 10) {
		displayResult = "0" + displayResult; 
	}
	if (seconds < 10) {
		displayResult = displayResult + "0";
	}
	displayResult = displayResult + seconds;
	return displayResult;
}

var beginSpeechTimer;

function startSpeechTimer(qulifiedTime, mediumTime, warningTime, unqualifiedTime, displayID) {
	var commonTimer = new timer();
	var backgroundColor = "";
	console.log("timer start");
	var secondsCounter = 0;
	beginSpeechTimer = setInterval(function() {
		commonTimer.addSecond();
		secondsCounter +=1;
		var minutes = commonTimer.getMinutes();
		var seconds = commonTimer.getSeconds();
		document.getElementById(displayID).innerHTML = display5DigitsTime(minutes,seconds);
		if (secondsCounter > unqualifiedTime) {
			backgroundColor = "darkred";
		} else if (secondsCounter >= warningTime) {
			backgroundColor = "indianred";
		} else if (secondsCounter >= mediumTime) {
			backgroundColor = "yellow";
		} else if (secondsCounter >= qulifiedTime) {
			backgroundColor ="yellowgreen";
		}
		document.body.style.background = backgroundColor;
	},1000);
}

function stopSpeechTimer() {
	clearInterval(beginSpeechTimer);
}

function clearColor() {
	document.body.style.background = "";
}