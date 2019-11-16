var vehiculo;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);

    vehiculo = new Vehicle();

}

function draw(){
    background(51);

    var target = createVector(mouseX, mouseY);
    vehiculo.arrive(target)

    vehiculo.update()
    vehiculo.display()
}