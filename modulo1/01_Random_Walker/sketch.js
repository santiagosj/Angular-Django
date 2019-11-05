
var w;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //instancia del objeto
  w = new Walker();
}

function draw() {
  background(51);
  // llamo los metodos de la instancia
  w.update();
  w.display();
}


//objecto Walker con posicion, movimiento y display para dibujarlo
function Walker() {

  // vector posiciona el objeto en medio del canvas
  this.posicion = createVector(width / 2, height / 2);

  this.update = function() {
    // el metodo
    var velocidad = createVector(random(-5, 5), random(-5, 5));

    this.posicion.add(velocidad);

  }
   

  //dibuja un cirulo blanco(the Walker)
  this.display = function() {
    fill(255);
    ellipse(this.posicion.x, this.posicion.y, 48, 48);
  }
}
