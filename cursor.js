var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.className = "cursorTrail";

var points = [];
var ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

    window.addEventListener("resize", resizeCanvas);


function drawTrail() {
    // clear canvas
    // begin path
    // moveTo first point
    // loop through points
    // stroke
    // draw the trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    if (points.length > 0) {
        for (var i = 1; i < points.length; i++) {
         var previousPoint = points[i - 1];
         var currentPoint = points[i];

         ctx.beginPath();
         ctx.moveTo(previousPoint.x, previousPoint.y);
         ctx.lineTo(currentPoint.x, currentPoint.y);

         ctx.globalAlpha = 1;
         ctx.stroke(); 
}
    ctx.globalAlpha = 1;

}
  requestAnimationFrame(drawTrail);
}


document.addEventListener("mousemove", function(event) {
    points.push({
        x: event.clientX,
        y: event.clientY
    });

    if (points.length > 100) {
        points.shift();
    }
});

drawTrail();


