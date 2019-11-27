function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
    background(51);

    cantor(350, 250, 730);
}

function draw() {
    // No need to loop
    noLoop();
  }

  function cantor(x,y,len){
      var h = 30;

      if(len >= 1){
        noStroke();
        fill(255);
        rect(x, y, len, h/3);

        y += h;

        cantor(x, y, len/3);
        cantor(x+len*2/3, y, len/3);

      }
  }