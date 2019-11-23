var debug =  true;

var flowfield;

var vehiculos=[];

function setup(){
    createCanvas(640, 360)

    flowfield = new FlowField(20);

    for(var i = 0; i < 120; i++){
        vehiculos.push(new Vehicle(random(width),random(height),random(2, 5),random(0.1, 0.5)));
    }
}

function draw(){
    background(51);

    if(debug) flowfield.display()

    for(var i = 0; i < vehiculos.length; i++){
        vehiculos[i].follow(flowfield);
        vehiculos[i].run();
    }
}

function keyPressed() {
    if (key == ' ') {
        debug = !debug;
    }
  }

  function mousePressed() {
    flowfield.init();
  }