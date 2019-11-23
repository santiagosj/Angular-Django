function Vehicle(x,y){
    this.position = createVector(x, y)
    this.r = 12;
    this.maxspeed = 3 
    this.maxforce = 0.2
    this.aceleracion = createVector(0, 0)
    this.velocidad = createVector(0, 0)

    this.applyForce = function(force){
        this.aceleracion.add(force)
    }

    this.setaracion = function(vehicles){
        var aversion = this.r * 2;
        var sum = createVector();
        var count = 0;

        for(var i = 0; i < vehicles.length; i++){
            var d = p5.Vector.dist(this.position, vehicles[i].position);

            if((d > 0) &&(d < aversion)){
                var diff = p5.Vector.sub(this.position,vehicles[i].position);
                diff.normalize();
                diff.div(d);
                sum.add(diff)
                count++
            }
        }

        if(count > 0){
            sum.div(count);

            sum.normalize()
            sum.mult(this.maxspeed)

            var steer = p5.Vector.sub(sum, this.velocidad);
            steer.limit(this.maxforce);
            this.applyForce(steer)
        }
    }

    this.update = function(){
        this.velocidad.add(this.aceleracion);

        this.velocidad.limit(this.maxspeed)
        this.position.add(this.velocidad)

        this.aceleracion.mult(0)

    }

    this.display = function(){
        fill(127)
        push()
        translate(this.position.x, this.position.y)
        ellipse(0,0,this.r, this.r)
        pop()
    }

    this.borders = function(){
        if (this.position.x < -this.r) this.position.x =  width+this.r;
        if (this.position.y < -this.r) this.position.y = height+this.r;
        if (this.position.x >  width+this.r) this.position.x = -this.r;
        if (this.position.y > height+this.r) this.position.y = -this.r;
    }

}