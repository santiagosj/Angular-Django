var flock;
var cohesionSlider
var separacionSlider
var alinearSlider

function setup(){
    var canvas = createCanvas(800, 400)
    canvas.parent('canvas')

    cohesionSlider = createSlider(0, 5, 1, 0.1).parent('cohesion');
    separacionSlider = createSlider(0, 5, 1, 0.1).parent('separar')
    alinearSlider = createSlider(0, 5, 1, 0.1).parent('alinear')

    flock = new Flock();

    for(var i = 0; i < 80; i++){
        var d = new Boid(width / 2, height / 2);
        flock.addBoid(d)
    }
}

function draw() {
    background(51);
    flock.run();
  }