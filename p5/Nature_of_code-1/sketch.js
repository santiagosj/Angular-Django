function setup() {
  var w = window.innerWidth
  var h = window.innerHeight
  
  createCanvas(w, h)
  W = new Update()
}

function draw() {
  background(51)
  
  //W.walk()
  W.display()
}

function Update(){
  //propiedades
  this.pos = createVector(width/2, height/2); //vector.Un vector es la diferencia entre dos puntos en el espacio.
  this.velocidad = createVector(0, 0)
  this.aceleracion = createVector(0,0.1)
  
  this.display = function(){

    let w = 100;
    
    fill(255);//color del walker
    ellipse(this.pos.x, this.pos.y, w)// ellipse(posX, posY, ancho, alto)
  }
  //sumando vectores orbitar el mouse
  this.orbitar = function(){
    var mouse = createVector(mouseX, mouseY)
   
    this.aceleracion = p5.Vector.sub(mouse, this.pos)
    
    this.aceleracion.setMag(0.05)

    this.velocidad.add(this.aceleracion)
    this.pos.add(this.velocidad)
  }

}

