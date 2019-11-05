var w;

function setup(){
   createCanvas(window.innerWidth, window.innerHeight)
   w = new Walker()
}

function draw(){
    background(51);
    
    w.display()
    w.update()
}

//constructor Walker
function Walker(){
   
    this.posicion = createVector(width / 2, height /2);
   
    this.velocidad = createVector(0 ,0);
    
    //metodo que toma la posición del mouse y 
    this.update = function(){

       var mouse = createVector(mouseX, mouseY);

       this.aceleracion =  p5.Vector.sub(mouse, this.posicion);  
       
       this.aceleracion.setMag(0.5);

       //algoritmo para el motor de leyes Físicas básicas
        this.velocidad.add(this.aceleracion);
        this.posicion.add(this.velocidad);
       
    }

    this.display = function(){
        fill('cyan')
        ellipse(this.posicion.x, this.posicion.y , 50, 50)
    }

}