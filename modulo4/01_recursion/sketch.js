function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
}

function draw(){
    background(51);
    stroke(255);
    noFill();

    drawCircle(width / 2, height / 2, 300);
    noLoop();
}

function drawCircle(x,y,d){
    ellipse(x,y,d,d);
    if(d > 10) {
        drawCircle(x + d / 2, y , d / 2);
        drawCircle(x - d / 2, y , d / 2);
    }
}