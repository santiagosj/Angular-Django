//constructor
function Particula(){

    this.pos = createVector(width/2, height/2);

    this.velocidad = createVector(0, 0);

    this.aceleracion = createVector(0, 0)


    this.update = function(){

        this.velocidad.add(this.aceleracion)

        this.pos.add(this.velocidad)

    }

    this.display = function(){
    
        fill(255);

        ellipse(this.pos.x, this.pos.y, 50, 50)
    }

}