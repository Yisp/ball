var balls = [];
var ball = [];

function Ball(img) {

	this.x = mouseX;
	this.y = mouseY;

	this.xspeed = 5;
	this.yspeed = 5;

	this.img = img;

	this.move = function() {

		this.x += this.xspeed;
		this.y += this.yspeed;

	}

	this.show = function() {

		this.offset = random(-1, 1);

		if (this.y <= 0) { this.y *= 0; this.yspeed *= -1 + this.offset; }
		if (this.y >= height) { this.y = height; this.yspeed *= -1 + this.offset; }

		if (this.x <= 0) { this.x = 0; this.xspeed *= -1 + this.offset; }
		if (this.x >= width) { this.x = width; this.xspeed *= -1 + this.offset; }

		imageMode(CENTER);
		image(img, this.x, this.y, 125, 125);

	}

}

function preload() {

	balls = [ loadImage("Images/brownBall.png"), loadImage("Images/greenBall.png"),
			  loadImage("Images/soccerBall.png"), loadImage("Images/spikeBall.png"),
			  loadImage("Images/beachBall.png"), loadImage("Images/redBall.png") ];

	brickWall = loadImage("Images/brickWall.jpg");

	song = loadSound("Sounds/song.mp3");

}

function setup() {

	createCanvas(windowWidth, windowHeight);
	
	imageMode(CENTER);
	image(brickWall, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);

}

function draw() {

	if (!song.isPlaying()) {

		song.play();

	}
	
	background(255, 0, 255);

	imageMode(CENTER);
	image(brickWall, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);

	for (var i = 0; i < ball.length; i++) {

		ball[i].move();
		ball[i].show();

	}

	if (ball.length > 35) {

		ball.splice(0, 1);

	}


}

function mouseClicked() {

	ball.push(new Ball(balls[floor(random(0, balls.length))]));

}