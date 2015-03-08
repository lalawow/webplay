$(document).ready(function(){
	var x = Math.random()*1000;
	var y = Math.random()*800;

	var olddiv = document.getElementById('i');
	var newdiv = document.createElement('div');
	newdiv.setAttribute('id',"randomi1");
	newdiv.innerHTML = "random position i";
//	newdiv.style.left = "50px";
//	newdiv.style.top = "50px";
	newdiv.style.left = x + "px";
	newdiv.style.top = y + "px";
	console.log(newdiv.style.left);
	newdiv.style.position = "absolute";
	olddiv.appendChild(newdiv);
    
/*    var elementNewDiv = document.getElementById("randomi1");
    elementNewDiv.style.left = "500px";
    elementNewDiv.style.top = "300px";
    elementNewDiv.style.position = "absolute";*/
})