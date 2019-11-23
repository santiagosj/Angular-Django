function Vehicle(x,y,ms,my){
    this.posicion = createVector(x, y);
    this.aceleracion = createVector(0, 0)
    this.velocidad = createVector(0, 0)
    this.r = 4;
    this.maxspeed = ms || 4;
    this.maxforce = my || 0.1;

    this.run = function(){
        this.update()
        this.borders()
        this.display()
    }

    this.follow = function(flow){
        var desired = flow.lookup(this.posicion)

        desired.mult(this.maxspeed);

        var steer = p5.Vector.sub(desired, this.velocidad);
        steer.limit(this.maxforce);
        this.applyForce(steer)
    }

    this.applyForce = function(force){
        this.aceleracion.add(force);
    }

    this.update = function(){
        this.velocidad.add(this.aceleracion)
        this.velocidad.limit(this.maxspeed)
        this.posicion.add(this.velocidad)

        this.aceleracion.mult(0);
    }

    this.borders = function(){
        if(this.posicion.x < -this.r) this.posicion.x = width+this.r;
        if(this.posicion.y < -this.r) this.posicion.y = height+this.r;
        if(this.posicion.x > width+this.r) this.posicion.x = -this.r
        if(this.posicion.y > height+this.r) this.posicion.y = -this.r
    }
   
    this.display = function() {
        // Draw a triangle rotated in the direction of velocity
        var theta = this.velocidad.heading() + PI/2;
        fill(127);
        stroke(200);
        strokeWeight(1);
        push();
        translate(this.posicion.x,this.posicion.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.r*2);
        vertex(-this.r, this.r*2);
        vertex(this.r, this.r*2);
        endShape(CLOSE);
        pop();
      }
}