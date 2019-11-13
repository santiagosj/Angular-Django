
var particulas = []

function setup(){
  createCanvas(window.innerWidth, window.innerHeight)
}

//creador de particulas
function mousePressed(){
    var p = new Particle(mouseX, mouseY, random(2, 4));
    particulas.push(p)
}

//elimina particulas
function keyPressed(){

    if(key == ' '){
        particulas.splice(0,1)
    }
}


function draw(){
    background(51);

    var wind = createVector(0.1, 0);
    
    for(var i = 0; i < particulas.length; i++){
          var gravedad = createVector(0, 0.2 * particulas[i].masa);
          particulas[i].applyForce(gravedad)

          if(mouseIsPressed){
              particulas[i].applyForce(wind)
          }

         particulas[i].update();
         particulas[i].edges();
         particulas[i].display();
    }
} 