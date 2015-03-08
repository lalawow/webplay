var olddiv = document.getElementById('i');
var font_color = ["red","blue","yellow","green","white"];
var color_number = 5;
var character_pixel_width = 30;
var character_pixel_height = 40;
var character_width = character_pixel_width* 16 + 50px;
var character_height = character_pixel_height * 16;
var character_center_x = 500;
var character_center_y = 200;
var motion_time = 1000;

$(document).ready(function(){
//	var olddiv = document.getElementById('i');
//    var font_color = ["red","blue","yellow","green","black"];
    var olddiv = document.getElementById('i');
    for (var i = 0; i < n; i++) {
    	var dot_x = Math.random()*1000;
		var dot_y = Math.random()*800;
        
        var newid = "i"+i;
		var newdiv = document.createElement('div');
		newdiv.setAttribute('id',newid);
		newdiv.innerHTML = "i";

		newdiv.style.left = dot_x + "px";
		newdiv.style.top = dot_y + "px";
		console.log(newdiv.style.left);
		newdiv.style.position = "absolute";
		newdiv.style.color = font_color[parseInt(Math.random()*color_number)];
		olddiv.appendChild(newdiv);
    }        
    
    $(document).click(function(){
    	console.log("clicked");
    	clickmotion();
    })
})

function clickmotion(){
	console.log("function called");
	for (i = 0; i < n; i++) {
		var goal_x = character_center_x+x[i]*character_pixel_width;
		var goal_y = character_center_y+y[i]*character_pixel_height;
		var id_number = "#i"+i;
		$( id_number ).animate({
    		left: goal_x+"px",
    		top: goal_y+"px",

  			}, motion_time, function() {
    // Animation complete.
 		 });
	}
}

