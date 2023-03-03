let stars = [];
let speed;
let px;
let py;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}


