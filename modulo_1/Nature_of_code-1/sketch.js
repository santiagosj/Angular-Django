var particula;

function setup() {
  var w = window.innerWidth
  var h = window.innerHeight
  
  createCanvas(w, h)
  
  particula = new Particula()

}

function draw() {

  background(51)
  
  particula.display()

  partucula.update()

}



