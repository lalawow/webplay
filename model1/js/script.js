$(document).ready(function() {
/*	isFade = false;
    $('button').click(function() {
    	if (isFade === false) {
        	$(".vanish").fadeOut("slow");
        	isFade = true;
        } else {
        	$(".vanish").fadeIn("slow");
        	isFade = false;
        }
    });*/
$('button').click(function() {
	$(".vanish").toggleClass(.fadeOut("slow"));
});


$("#text").click(function() {
        $("#text").addClass('highlighted');

    });
});