var speed = 1;
var x = 50;
var pause = false;

function setup() {
  createCanvas(100, 400);
}

function draw() {


  //background
  background(255, 0, 0);

  //bouncing ellipse

  //if pause is true then speed is zero
  if (pause) {
    speed = 0;
  }
  //if pause if false, then ellipse is bouncing back and forth
  else {

    if (x > width - 25) {
      speed = -1;
    }
    if (x < 25) {
      speed = 1;
    }


  }

  //moving ellipse
  x = x + speed;
  ellipse(x, 200, 50, 50);


  if (!pause) {
    rect(50, 50, 50, 50);
  }
}

function mousePressed() {
  pause = !pause;
}




// write this function as mouse stops when you press. 
// write this function as mouse stops only duration of click down. 
// write this function with multiple bouncing ellipses

//why does function mousePressed not work when its inside draw loop
//