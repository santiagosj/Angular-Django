/*
La idea principal del modulo2 es aplicar la segunda ley de Newton F = M * A || o A = F/M || A = F (para simplificar en código la función)

*/
var particula1;
var particula2;

//liquido
var liquido;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
    liquido = new Liquido(0, height / 2, width, height / 2, 0.1)
    particula1 = new Particula(1, 500, 0 )
    particula2 = new Particula(3, 800, 0 ) 
}

function draw(){

    background(127)

    //dibujar el liquido
    liquido.display();

    if(liquido.contiene(particula1)){
        var fuerzaEmpuje = liquido.calcEmpuje(particula1)
        particula1.applyForce(fuerzaEmpuje)
    }

    //particula 1
    //gravedad
    var gravedad = createVector(0, 0.1 * particula1.masa);
    //aplicar gravedad
    particula1.applyForce(gravedad)

    particula1.update()
    particula1.display()
    particula1.edges()
    
    if(liquido.contiene(particula2)){
        var fuerzaEmpuje = liquido.calcEmpuje(particula2)
        particula2.applyForce(fuerzaEmpuje)
    }
    
    var gravedad = createVector(0, 0.1 * particula2.masa)

    particula2.applyForce(gravedad)
    
    particula2.update()
    particula2.display()
    particula2.edges()
    
    
}