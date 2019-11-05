var xoff = 0;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw(){

  background(51)
  
  var x = noise(xoff) * width;
  //se mueve a traves del espacio Perlin
  xoff += 0.05;

  fill('magenta');
  ellipse(x, window.innerHeight / 2, 50, 50)
  
}


