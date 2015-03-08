var olddiv = document.getElementById('i');
var font_color = ["orangered","blue","yellow","green","cornsilk","aqua","blueviolet","cadetblue","chartreuse","cornflowerblue","purple","pink"];
var color_number = 12;
var character_pixel_width = 30;
var character_pixel_height = 40;
var character_width = character_pixel_width* 17 + 50;
var character_height = character_pixel_height * 10;
var list_start_x = 150;
var list_start_y = 200;
var motion_time = 1000;


$(document).ready(function(){
//	var olddiv = document.getElementById('i');
//    var font_color = ["red","blue","yellow","green","black"];
    var characters = ["I","H","U"];
    var HEART =["H","E","A","R","T"];
	console.log(characters.length);
    var olddiv = document.getElementById('i');
    for (var char_n = 0; char_n < characters.length; char_n++){
    	var current_char = characters[char_n];
    	for (var i = 0; i < n[char_n]; i++) {
    		var dot_x = Math.random()*1600;
			var dot_y = Math.random()*800;
        
        	var newid = current_char+i;
			var newdiv = document.createElement('div');
			newdiv.setAttribute('id',newid);
			newdiv.innerHTML = current_char;

			newdiv.style.left = dot_x + "px";
			newdiv.style.top = dot_y + "px";
			console.log(newdiv.style.left);
			newdiv.style.position = "absolute";
			if (current_char === "H") {
				newdiv.style.color = "orangered";
				newdiv.innerHTML = HEART[parseInt(Math.random()*5)];
			} else {
				newdiv.style.color = font_color[parseInt(Math.random()*color_number)];
				newdiv.innerHTML = current_char;
			}
			olddiv.appendChild(newdiv);
    	}        
    }
     
    
    $(document).click(function(){
    	console.log("clicked");
    	clickmotion();
    })
})

function clickmotion(){
	var characters = ["I","H","U"];
	console.log("function called");
	var character_center_x = list_start_x;
	var character_center_y = list_start_y;
	var char_width = [0,12,16];
	
	for (var char_n = 0; char_n < characters.length; char_n++){
		var current_char = characters[char_n];
		character_center_x += (character_pixel_width* char_width[char_n]+50);
		for (i = 0; i < n[char_n]; i++) {
			var goal_x = character_center_x+x[char_n][i]*character_pixel_width;
			var goal_y = character_center_y+y[char_n][i]*character_pixel_height;
			var id_number = "#"+current_char+i;
			$( id_number ).animate({
    			left: goal_x+"px",
    			top: goal_y+"px",

  				}, motion_time, function() {
    			// Animation complete.
 		 	});
		}
	}

}

