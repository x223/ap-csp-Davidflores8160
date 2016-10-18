var strokeColor ='red';
function setup() {
	createCanvas(windowWidth,windowHeight);
	background('pink');
}

function draw() {
	strokeWeight(10);
	if (mouseIsPressed) {
		stroke(strokeColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

function keyTyped() {
	if (key === 'r') {
		strokeColor = 'red';
	} else if (key === 'g') {
		strokeColor = '#0BD029';
		weight = 10;
	} else if (key === 'b') {
		strokeColor = '#0B71E6';
		weight = 10;
	} else if (key === 'g') {
		strokeColor = '#0BC486';
		weight = 10;
	} else if (key === 'l') {
		strokeColor = '#9109A6';
	  weight = 10;
} else if (key === 'p') {
	strokeColor = 'pink';
	weight = 10; 
}
}