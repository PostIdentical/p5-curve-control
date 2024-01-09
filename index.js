// Mouse utils from https://p5js.org/examples/input-mouse-functions.html

function mousePressed(event, ) {
  // console.log('event', event)
  // if (overPoint) {
  //   locked = true;
  //   fill(255, 255, 255);
  // } else {
  //   locked = false;
  // }
  // xOffset = mouseX - bx;
  // yOffset = mouseY - by;
}

// function mouseDragged() {
//   if (locked) {
//     bx = mouseX - xOffset;
//     by = mouseY - yOffset;
//   }
// }

// function mouseReleased() {
//   locked = false;
// }

// function mouseOver(obj) {
//   obj.isHover();
// }

// Bezier class creation

class Courbe {

  constructor(firstControlX, firstControlY, secondControlX, secondControlY, anchorX, anchorY) {
      this.firstControlX = firstControlX;
      this.firstControlY = firstControlY;
      this.secondControlX = secondControlX;
      this.secondControlY = secondControlY;
      this.anchorX = anchorX;
      this.anchorY = anchorY;
  }

  isHover(controlX, controlY) { // add params : to check if first or second control point is hovered
    if (
      mouseX > startPoint + controlX - ( pointSize / 2) &&
      mouseX < startPoint + controlX + ( pointSize / 2) &&
      mouseY > startPoint + controlY - ( pointSize / 2) &&
      mouseY < startPoint + controlY + ( pointSize / 2)
    ) {
      overPoint = true; // >>> overpoint should be position of the point, and be passed to the other events ???
      if (!locked) {
        fill("red");
        // console.log(startPoint + controlX - pointSize, startPoint + controlX + pointSize)
      }
    } else {
      fill("green");
      overPoint = false;
    }
  }

}


const blossomParent = document.getElementById('container');
const canvasSize = 600;
const startPoint = canvasSize / 2;
// let bx;
// let by;
let overPoint = false;
let pointSize = 30;
let locked = false;
// let xOffset = 0.0;
// let yOffset = 0.0;

const courbe = new Courbe(0, 0, 0, 0, 30, 30);
const courbe2 = new Courbe(20, 80, 60, 190, 160, 160);

function setup() {
  // setup canvas
  let canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent(blossomParent);

  // bx = 0;
  // by = 0;

  // stroke('#canvasSize / 200');
  // strokeWeight(.5);
  // noFill();

  
}

function draw() {
  // clear();
  background('#bff');
  translate(canvasSize / 2, canvasSize / 2);
  strokeWeight(.5);

  courbe.isHover(courbe.firstControlX, courbe.firstControlY);
  circle(courbe.firstControlX, courbe.firstControlY, pointSize);

  courbe2.isHover(courbe2.firstControlX, courbe2.firstControlY);
  circle(courbe2.firstControlX, courbe2.firstControlY, pointSize);
  courbe2.isHover(courbe2.secondControlX, courbe2.secondControlY);
  circle(courbe2.secondControlX, courbe2.secondControlY, pointSize);

  line(courbe2.firstControlX, courbe2.firstControlY, courbe.anchorX, courbe.anchorY ); // 
  line(courbe2.secondControlX, courbe2.secondControlY, courbe2.anchorX, courbe2.anchorY );


  strokeWeight(2);
  // bezier curves
  noFill();
  beginShape();
  vertex(0, 0);
  bezierVertex(courbe.firstControlX, courbe.firstControlY, courbe.secondControlX, courbe.secondControlY, courbe.anchorX, courbe.anchorY);
  bezierVertex(courbe2.firstControlX, courbe2.firstControlY, courbe2.secondControlX, courbe2.secondControlY, courbe2.anchorX, courbe2.anchorY);
  endShape();
}

