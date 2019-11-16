var vehiculo;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);

    vehiculo = new Vehicle(320, 180)
}

function draw(){
    background(51);

    //buscar el objetivo
    var target = createVector(mouseX, mouseY)
    vehiculo.seek(target)

    //Update and display
    vehiculo.update();
    vehiculo.display();
}