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
