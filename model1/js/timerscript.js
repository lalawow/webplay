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
var speechTimer;
var speechCount = new Array(0,0);

function startSpeechTimer(qulifiedTime, mediumTime, warningTime, unqualifiedTime, displayID) {
	speechTimer = new timer();
	var backgroundColor = "";
	console.log("timer start");
	var secondsCounter = 0;

	if (displayID==="tableTopicsTimerDisplay") {
		speechCount[0]++;
	} else {
		speechCount[1]++;
	}

	beginSpeechTimer = setInterval(function() {
		speechTimer.addSecond();
		secondsCounter +=1;
		var minutes = speechTimer.getMinutes();
		var seconds = speechTimer.getSeconds();
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
	console.log("time stop");
}

function stopSpeechTimer(displayID) {
	clearInterval(beginSpeechTimer);
	//add time report	
	var minutes = speechTimer.getMinutes();
	var seconds = speechTimer.getSeconds();
    var speechNumber = speechCount[0];
    if (displayID==="psReport") speechNumber = speechCount[1];
    var result = speakerName(speechNumber) + " speaker used "+ display5DigitsTime(minutes,seconds) + " ^_^";
	//add element to the report part
	var yy = document.getElementById(displayID);
	var addnode = document.createElement("tr");
	var node = document.createTextNode(result);
	addnode.appendChild(node);
	document.getElementById(displayID).appendChild(addnode);
}

function clearColor() {
	document.body.style.background = "";
}

function speakerName(number) {
	switch (number) {
		case 1: return ("1st");
		break;
		case 2: return ("2nd");
		break;
		case 3: return ("3rd");
		break;
		default: return (number + "th");
	}

}