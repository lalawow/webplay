$(document).ready(function(){
    context = document.getElementById("a").getContext("2d");            
            setInterval("animate()", 100);

            textDirection ="right";
            textXpos = 5;
            text = "A";   
})

function animate() {            
            // Clear screen
            context.clearRect(0, 0, 780, 500);
            context.globalAlpha = 1;
            context.fillStyle = '#fff';
            context.fillRect(0, 0, 780, 500);    

            var metrics = context.measureText(text);
            var textWidth = metrics.width;

            if (textDirection == "right") {
                textXpos += 10;

                if (textXpos > 500 - textWidth) {
                    textDirection = "left";
                }
            }
            else {
                textXpos -= 10;

                if (textXpos < 10) {
                    textDirection = "right";
                }                    
            }

            context.font = '20px _sans';
            context.fillStyle = '#FF0000';
            context.textBaseline = 'top';
            context.fillText  ( text, textXpos, 180);    
}    