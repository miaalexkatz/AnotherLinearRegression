var data = [];

var m = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
}

function gradientDescent() {
  var slider = document.getElementById("myRange");
  var learning_rate = slider.value/1000;
  var output = document.getElementById("learnrate");
  output.innerHTML = slider.value/1000;
  for (var i = 0; i < data.length; i++) {
    var x = data[i].x;
    var y = data[i].y;
    var guess = m * x + b;
    var error = y - guess;
    m = m + error * x * learning_rate;
    b = b + error * learning_rate;
  }
}

function drawLine() {
  var x1 = 0;
  var y1 = m * x1 + b;
  var x2 = 1;
  var y2 = m * x2 + b;

  x1 = map(x1, 0, 1, 0, width);
  y1 = map(y1, 0, 1, height, 0);
  x2 = map(x2, 0, 1, 0, width);
  y2 = map(y2, 0, 1, height, 0);

  stroke(255, 188, 58);
  strokeWeight(2);
  line(x1, y1, x2, y2);
  document.getElementById("result").innerHTML = m;
}

function mousePressed() {
  var x = map(mouseX, 0, width, 0, 1);
  var y = map(mouseY, 0, height, 1, 0);
  var point = createVector(x, y);
  if (mouseY >= 0){
  data.push(point);
  }
}

function draw() {
  background(255);
  for (var i = 0; i < data.length; i++) {
    var x = map(data[i].x, 0, 1, 0, width);
    var y = map(data[i].y, 0, 1, height, 0);
    fill(34, 164, 243);
    stroke(34, 164, 243);
    noStroke();
    triangle(x+5, y, x, y+5, x-5, y-5);
    }
  if (data.length > 1) {
    gradientDescent();
    drawLine();
  }
}
