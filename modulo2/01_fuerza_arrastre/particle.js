
function Particula(m, x, y){
    this.masa = m
    this.posicion = createVector(x, y);
    this.velocidad = createVector(0, 0);
    this.aceleracion = createVector(0, 0);

    this.applyForce = function(force){

        var f = p5.Vector.div(force, this.masa);

        this.aceleracion.add(f);

    }

    this.update = function(){
        this.velocidad.add(this.aceleracion);
        this.posicion.add(this.velocidad)
        this.aceleracion.mult(0)
    }


    this.display = function() {
        fill(255, 127);
        ellipse(this.posicion.x, this.posicion.y, this.masa * 16, this.masa * 16);
      };

     this.edges = function(){
         if(this.posicion.y > height){
             this.velocidad.y *= -0.9;
             this.posicion.y = height;
         }
     }

}