function Particle(x, y, m){
    this.posicion = createVector(x, y)
    this.velocidad = createVector(0, 0)
    this.aceleracion = createVector(0, 0)
    this.masa = m;

    this.applyForce = function(force){
        var f = force.copy()
        f.div(this.masa)
        this.aceleracion.add(f)
    }
    
    this.update =  function(){
        this.velocidad.add(this.aceleracion)
        this.posicion.add(this.velocidad)
        this.aceleracion.set(0, 0)
    }
    this.display = function(){
        fill(255, 150);
        ellipse(this.posicion.x, this.posicion.y, this.masa*10, this.masa*10)
    }
    this.edges = function(){
        if(this.posicion.y > height){
            this.velocidad.y *= -1;
            this.posicion.y = height;
        }

        if(this.posicion.x > width){
            this.velocidad.x *= -1;
            this.posicion.x = width;
        }
    }
}