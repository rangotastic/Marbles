//                  Bouncing Marbles(experiment for Pong-Game)
//                                                            by Max O'Dell


let marbleX;
let marbleY;
let marbleD;
let marbleC;
let lineStat;
let stepX;
let stepY;
let speed;
let x1;
let y1;
let d1;
let r1;
let g1;
let b1;
let x2;
let y2;
let d2;
let r2;
let g2;
let b2;
let x3;
let y3;
let d3;
let r3;
let g3;
let b3;
let x4;
let y4;
let d4;
let r4;
let g4;
let b4;
let d5;
let r5;
let g5;
let b5;

function setup() {
  createCanvas(windowWidth, windowHeight - 4);


  marbleX = width / 2;
  marbleY = 60;
  marbleD = 50;
  marbleC = color(random(0,256),random(0,256),random(0,256));
  lineStat = 1;
  stepX = 0;
  stepY = 0;
  speed = 7;
//declaration of the different parameters for bounce
  x1 = random(100, width - 100);
  y1 = random(100, height - 100);
  d1 = random(35, 100);
  r1 = random(0, 256);
  g1 = random(0, 256);
  b1 = random(0, 256);

  x2 = random(100, width - 100);
  y2 = random(100, height - 100);
  d2 = random(35, 100);
  r2 = random(0, 256);
  g2 = random(0, 256);
  b2 = random(0, 256);

  x3 = random(100, width - 100);
  y3 = random(100, height - 100);
  d3 = random(35, 100);
  r3 = random(0, 256);
  g3 = random(0, 256);
  b3 = random(0, 256);

  x4 = random(100, width - 100);
  y4 = random(100, height - 100);
  d4 = random(35, 100);
  r4 = random(0, 256);
  g4 = random(0, 256);
  b4 = random(0, 256);

  d5 = random(35, 100);
  r5 = random(0, 256);
  g5 = random(0, 256);
  b5 = random(0, 256);
}


function draw() {
  frameRate(60);
  background(255);


  //aim
  if (lineStat == 1) {
    fill(0);
    stroke(5);
    line(marbleX, marbleY, mouseX, mouseY);
  }
  //(shoot)marble
  if (lineStat == 1 && mouseIsPressed) {
    let d = dist(marbleX, marbleY, mouseX, mouseY);
    stepX = ((mouseX - marbleX) / d) * speed;
    stepY = ((mouseY - marbleY) / d) * speed;
    lineStat = 0;
  }

  marbleX = round(stepX + marbleX);
  marbleY = round(stepY + marbleY);
  noStroke();
  fill(marbleC);
  ellipse(marbleX, marbleY, marbleD);


  //frame
  //top bounce
  if (marbleY - marbleD / 2 < 0) {
    stepY = stepY * (-1);
  }
  //bottom bounce
  if (marbleY + marbleD / 2 > height) {
    stepY = stepY * (-1);
  }
  //right bounce
  if (marbleX + marbleD / 2 > width) {
    stepX = stepX * (-1);
  }
  bounce(x1, y1, d1, r1, g1, b1);
  bounce(x2, y2, d2, r2, g2, b2);
  bounce(x3, y3, d3, r3, g3, b3);
  bounce(x4, y4, d4, r4, g4, b4);
  if (lineStat == 0) {
    bounce(mouseX, mouseY, d5, r5, g5, b5);
  }
}

//bouncers
function bounce(x, y, d, r, g, b) {

  let msX = marbleX + stepX;
  let msY = marbleY + stepY;
  let distance = dist(x, y, msX, msY)
  if (distance <= d / 2 + marbleD / 2) {
    let stepXtemporary = stepY * (msX - x);
    let stepYtemporary = stepX * (y - msY);
    let lengh = dist(0, 0, stepXtemporary, stepYtemporary);
    stepX = (stepXtemporary / lengh) * speed;//"Einheitsvektor*speed"
    stepY = (stepYtemporary / lengh) * speed;

    d = d / 2


  }
  fill(r, g, b);
  noStroke();
  ellipse(x, y, d);




}
