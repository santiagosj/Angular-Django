var vehicles = [];

function setup() {
    createCanvas(window.innerWidth,window.innerHeight)

    for(var i = 0; i < 75; i++){
        vehicles.push(new Vehicle(random(width),random(height)))
    }
}

function draw(){
    background(51)

    for(var i = 0; i < vehicles.length;i++){
        vehicles[i].setaracion(vehicles);
        vehicles[i].update()
        vehicles[i].borders()
        vehicles[i].display();
    }
}

function mouseDragged(){
    vehicles.push(new Vehicle(mouseX, mouseY));
}