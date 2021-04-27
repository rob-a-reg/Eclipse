var MPX = 500;
  // MoonPosition X

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#600000");
    // all
  strokeWeight(5);
    // sun
  stroke("orange");
  fill("#FCE205");
  ellipse(250,250,250,250);
    // moon
  stroke("#660000");
  fill("#240000");
  ellipse(MPX,250,220,220);
  if (MPX <= 0){
    MPX = 500
  }
}

function mousePressed(){
  MPX = MPX -25; 
}