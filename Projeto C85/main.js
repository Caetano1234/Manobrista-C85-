
var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

var backgroundImage = "parkingLot.jpg";
var greencarImage = "car2.png";
var carImage = new Image()
var fundoImage = new Image()

var carWidth = 65
var carHeight = 100

var carX = 5
var carY = 225

function add() {
	fundoImage.onload = uploadBackground
	carImage.onload = uploadGreenCar

	fundoImage.src = backgroundImage
	carImage.src = greencarImage
}

function uploadBackground() {
	ctx.drawImage(fundoImage, 0, 0, canvas.width, canvas.height)
}

function uploadGreenCar() {
	ctx.drawImage(carImage, carX, carY, carWidth, carHeight)
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(carY > 0){
		carY = carY - 5
		uploadBackground()
		uploadGreenCar()
	}
}

function down()
{
	if(carY <= 300){
		carY = carY + 5
		uploadBackground()
		uploadGreenCar()
	}
}

function left()
{
	if(carX > 0){
		carX = carX - 10
		uploadBackground()
		uploadGreenCar()
	}
}

function right()
{
	if(carX <= 750){
		carX = carX + 10
		uploadBackground()
		uploadGreenCar()
	}
}
