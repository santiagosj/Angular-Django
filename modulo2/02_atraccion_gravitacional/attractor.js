var Attractor = function() {
    this.pos = createVector(width/2, height/2);
    this.mass = 50;
    this.G = 1;
  
    this.calculateAttraction = function(p) {
      // Calcular la direccion de la fuerza
      var fuerza = p5.Vector.sub(this.pos, p.pos);
      // Disctancia entre los objetos
      var distance = fuerza.mag();
      // restriccion artificial
      distance = constrain(distance, 3, 50);
      // Normalize el vector 
      fuerza.normalize();
      // calcular la magnitud de la fuerza gravitacional
      var impulso = (this.G * this.mass * p.mass) / (distance * distance);
      //la fuerza del vector --> magnitude * direction
      fuerza.mult(impulso);
      return fuerza;
    }
  
    // Method to display
    this.display = function() {
      ellipseMode(CENTER);
      ellipse(this.pos.x, this.pos.y, this.mass*2, this.mass*2);
    }
  }
  