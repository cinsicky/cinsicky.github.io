//quie button start

$(".img_quiz").click(function() {
	$(".myQuiz").slideToggle(3000);
});
//quie button close

//canvas game start
$(document).ready(function() {
	//get the canvas element
	var canvas = document.getElementById("canvas");
	//get the 2d context 
	var ctx = canvas.getContext("2d");
	// put the circle in the central of canvas
	var x = canvas.width / 2;
	var y = canvas.height / 2;
	// difference of x and y in each position update
	var dx = 2;
	var dy = -2;
	// default color
	var color = "#fff";
	// radius
	var radius = 10;
	// paddle size
	var paddleHeight = 4;
	var paddleWidth = 70;
	var paddleX = (canvas.width - paddleWidth) / 2;
	// key pressed boolean
	var rightPressed = false;
	var leftPressed = false;

	//To draw a ball
	function drawBall() {
		//Start a path, or reset the current path
		ctx.beginPath();
		//create a circle ,context.arc(x,y,r,sAngle,eAngle,counterclockwise);
		ctx.arc(x, y, radius, 0, Math.PI * 2);
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
	}
	// To draw the paddle
	function drawPaddle() {
		ctx.beginPath();
		ctx.fillStyle = "#33333";
		//		context.rect(x,y,width,height);
		ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
		ctx.closePath();
	}
	// Return a randomly selected color
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		//Math.floor(Math.random()) Get an integer in the range
		for(var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	// Main loop for drawing the ball and paddle
	function draw() {
		// Clean everything in context
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// Test boundary 
		if(x <= radius || x + radius >= canvas.width) {
			dx = -dx;
			color = getRandomColor();
		}
		// Update x
		x += dx;
		// Test upper boundary 
		if(y <= radius) {
			dy = -dy;
			color = getRandomColor();
		} else if(y + radius >= canvas.height) {
			if(x > paddleX && x < paddleX + paddleWidth) {
				dy = -dy;
				
			} else {
				
				return;
			}
		}
		y += dy;
		drawBall();
		// make the paddle move 
		if(rightPressed && paddleX < canvas.width - paddleWidth) {
			paddleX += 7;
		} else if(leftPressed && paddleX > 0) {
			paddleX -= 7;
		}
		// draw the paddle after updated
		drawPaddle();
	}

	function drawPaddle() {
		ctx.beginPath();
		ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
		ctx.fillStyle = "#33333";
		ctx.fill();
		ctx.closePath();
	}
	// add the key pressed event 
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(e) {
		if(e.keyCode == 39) {
			rightPressed = true;
		} else if(e.keyCode == 37) {
			leftPressed = true;
		}
	}

	function keyUpHandler(e) {
		if(e.keyCode == 39) {
			rightPressed = false;
		} else if(e.keyCode == 37) {
			leftPressed = false;
		}
	}
	//start the game, draw the ball and paddle in 30 ms
	setInterval(draw, 30);
});
//canvas game close

//instruction button
$('#instruction').hover(function(){
	$('#show').show();
}, function() {
	$('#show').hide();
});