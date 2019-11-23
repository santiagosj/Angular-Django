function Boid(x, y){
    this.aceleracion = createVector(0, 0);
    this.velocidad = createVector(random(-1, 1),random(-1, 1))
    this.posicion = createVector(x, y)
    this.r = 3.0;
    this.maxspeed = 3;
    this.maxforce = 0.05

    this.run = function(boids){
        this.flock(boids)
        this.update()
        this.borders()
        this.render()
    }

    this.applayForce = function(force){
        this.aceleracion.add(force)
    }
    
    this.flock = function(boids){
        var sep = this.separar(boids);
        var ali = this.alinear(boids);
        var coh = this.cohesion(boids)

        sep.mult(separacionSlider.value());
        ali.mult(alinearSlider.value());
        coh.mult( cohesionSlider.value());

        this.applayForce(sep)
        this.applayForce(ali)
        this.applayForce(coh)
    };

    this.update = function(){
        this.velocidad.add(this.aceleracion)
        this.velocidad.limit(this.maxspeed)
        this.posicion.add(this.velocidad)
        this.aceleracion.mult(0)
    };

    this.seguir = function(target){
        var desired = p5.Vector.sub(target, this.position)

        desired.normalize()
        desired.mult(this.maxspeed)

        var steer = p5.Vector.sub(desired, this.velocidad)
        steer.limit(this.maxforce)
        return steer
    };
    
    this.render = function() {
        
        var theta = this.velocidad.heading() + radians(90);
        fill(127);
        stroke(200);
        push();
        translate(this.posicion.x, this.posicion.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();
      };

      this.borders = function() {
        if (this.posicion.x < -this.r) this.posicion.x = width + this.r;
        if (this.posicion.y < -this.r) this.posicion.y = height + this.r;
        if (this.posicion.x > width + this.r) this.posicion.x = -this.r;
        if (this.posicion.y > height + this.r) this.posicion.y = -this.r;
      }
    
      this.separar = function(boids){
         var aversion = 25.0;
         var steer = createVector(0, 0)
         var count = 0;

         for(var i = 0; i < boids.length; i++){
             var d = p5.Vector.dist(this.posicion, boids[i].posicion)

             if((d > 0) && (d < aversion)){
                 var diff = p5.Vector.sub(this.posicion, boids[i].posicion)
                 diff.normalize();
                 diff.div(d)
                 steer.add(diff)
                 count++
             }
         }
         if(count > 0){
             steer.div(count);
         }
         if(steer.mag() > 0){
             steer.normalize();
             steer.mult(this.maxspeed)
             steer.sub(this.velocidad)
             steer.limit(this.maxforce)
         }
         return steer;
      }

      this.alinear = function(boids){
         var distVecino = 50;
         var sum = createVector(0, 0)
         var count = 0;

         for(var i = 0;i < boids.length; i++){
             var d = p5.Vector.dist(this.posicion, boids[i].posicion);
             if( (d > 0) && (d < distVecino) ){
                 sum.add(boids[i].velocidad);
                 count++;
             }
         }
         if(count > 0){
             sum.div(count);
             sum.normalize()
             sum.mult(this.maxspeed)
             var steer = p5.Vector.sub(sum,this.velocidad)
             steer.limit(this.maxforce);
             return steer;
         }else{
             return createVector(0, 0)
         }
      }

      this.cohesion = function(boids){
         var distVecino = 50;
         var sum = createVector(0, 0)
         var count = 0;
         for(var i = 0; i < boids.length; i++){
               var d = p5.Vector.dist(this.posicion,boids[i].posicion);
               if((d > 0) && (d < distVecino) ){
                   sum.add(boids[i].posicion);
                   count++;
               }
         }
         if(count > 0){
             sum.div(count);
             return this.seguir(sum)
         }else{
             return createVector(0, 0)
         }
      }
}