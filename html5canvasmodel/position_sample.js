$(document).ready(function(){
	var x = Math.random()*1000;
	var y = Math.random()*800;
    var y2 = y + 50;
	var olddiv = document.getElementById('i');
	var newdiv = document.createElement('div');
	newdiv.setAttribute('id',"randomi1");
	newdiv.innerHTML = "random position i";

	newdiv.style.left = x + "px";
	newdiv.style.top = y + "px";
	console.log(newdiv.style.left);
	newdiv.style.position = "absolute";
	olddiv.appendChild(newdiv);

	var newdiv2 = document.createElement('div');
	newdiv2.setAttribute('id',"randomi2");
	newdiv2.innerHTML = "random position i2";

	newdiv2.style.left = x + "px";
	newdiv2.style.top = y2 + "px";
	console.log(newdiv2.style.left);
	newdiv2.style.position = "absolute";
	olddiv.appendChild(newdiv2);
    
    console.log(z);
    $(document).click(function(){
    	console.log("clicked");
    	clickmotion();
    })

})

function clickmotion(){
	console.log("function called");
	$( "#randomi1" ).animate({
    left: "+=250",

  }, 500, function() {
    // Animation complete.
  });
	$( "#randomi2" ).animate({
    top: "500px",
    left: "750px",

  }, 500, function() {
    // Animation complete.
  });
}