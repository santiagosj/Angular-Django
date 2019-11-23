function Vehicle(x,y){
    this.posicion = createVector(x, y)
    this.r = 12;
    this.maxspeed=3;
    this.maxforce= 0.2;
    this.aceleracion = createVector(0, 0)
    this.velocidad = createVector(0, 0)

    this.applyComportamiento = function(vehicles){

        var fuerzaSeparacion = this.separacion(vehicles)
        var fuerzaSeguir = this.seguir(createVector(mouseX,mouseY));

        fuerzaSeparacion.mult(2);
        fuerzaSeguir.mult(1)

        this.applyForce(fuerzaSeparacion)
        this.applyForce(fuerzaSeguir)
    }

    this.applyForce = function(force){
        this.aceleracion.add(force)
    }

    this.separacion = function(vehicles){
         var aversion = 20
         var sum = createVector()
         var count = 0;

         for(var i = 0;i<vehicles.length;i++){

             var d = p5.Vector.dist(this.posicion,vehicles[i].posicion)
            if((d > 0) && (d < aversion)){
                var diff = p5.Vector.sub(this.posicion, vehicles[i].posicion)
                diff.normalize()
                diff.div(d)
                sum.add(diff)
                count++
            }
         }
         if(count > 0){
            sum.div(count);
    
            sum.normalize()
            sum.mult(this.maxspeed)
            
            sum.sub(this.velocidad)
            sum.limit(this.maxforce)
        }
        return sum;
    }
      
        this.seguir = function(target){
             var desired = p5.Vector.sub(target,this.posicion)

             desired.normalize();
             desired.mult(this.maxspeed)

             var steer = p5.Vector.sub(desired,this.velocidad)
             steer.limit(this.maxforce);
             return steer;
        }

        this.update = function(){
            this.velocidad.add(this.aceleracion);

            this.velocidad.limit(this.maxspeed)
            this.posicion.add(this.velocidad)

            this.aceleracion.mult(0)
        }

        this.display = function(){
            fill(127)
           
            push()
            translate(this.posicion.x, this.posicion.y)
            ellipse(0, 0, this.r, this.r)
            pop()
        }

        this.borders = function() {
            if (this.posicion.x < -this.r) this.posicion.x =  width+this.r;
            if (this.posicion.y < -this.r) this.posicion.y = height+this.r;
            if (this.posicion.x >  width+this.r) this.posicion.x = -this.r;
            if (this.posicion.y > height+this.r) this.position.y = -this.r;
        }
    
}