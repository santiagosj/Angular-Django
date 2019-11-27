var angulo;

function setup(){
    createCanvas(window.innerWidth, innerHeight)
}

function draw(){
    background(51);

    angulo = map(mouseX, 0, width, 0, PI / 2);

    translate(width / 2, height);
    stroke(255);
    branch(120, 1);
}

function branch(len, generacion){
    strokeWeight(map(generacion, 1, 10, 4, 1));
    line(0, 0, 0, -len)

    translate(0, -len)
    len *= 0.66;

    generacion++

    if(len > 2){
        push()
        rotate(angulo)
        branch(len, generacion)
        pop()

        push()
        rotate(-angulo)
        branch(len,generacion);
        pop();
    }
}