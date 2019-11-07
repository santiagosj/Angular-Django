var particula;
var atractor;

function setup(){
   createCanvas(window.innerWidth, window.innerHeight);
   particula =  new Particula()
   atractor =  new Attractor(width/2, height/2);
}

function draw(){
   background(51);

   var fuerza = atractor.calculateAttraction(particula)
   particula.applyForce(fuerza)

   particula.update()
   particula.display()

   atractor.display()

}