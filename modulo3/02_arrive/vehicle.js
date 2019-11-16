function Vehicle(x,y,m){
    this.posicion = createVector(x, y);
    this.velocidad = createVector(0, 0);
    this.aceleracion = createVector(0, 0);
    this.maxspeed = 5;
    this.maxforce = 0.2;
  
    this.r = 6;

    this.applyForce = function(force){
        this.aceleracion.add(force);
    }

    this.arrive = function(target){
        var desired = p5.Vector.sub(target, this.posicion);

        var d = desired.mag();

        if (d < 100) {
            var m = map(d, 0, 100, 0, this.maxspeed);
             desired.setMag(m);
        }else{
            desired.setMag(this.maxspeed)
        }

        var steering = p5.Vector.sub(desired,this.velocidad);
        steering.limit(this.maxforce);

        this.applyForce(steering);
    }

    this.update = function(){
        this.velocidad.add(this.aceleracion);
        this.velocidad.limit(this.maxspeed);
        this.posicion.add(this.velocidad);
        this.aceleracion.set(0, 0);
    }

    this.display = function(){

        var theta = this.velocidad.heading() + PI / 2; 
        fill(127);
        stroke(200);
        strokeWeight(1);
        push();
        translate(this.posicion.x, this.posicion.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();
    }
}