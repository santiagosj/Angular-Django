function FlowField(r){
    this.resolucion = r;

    this.cols = width / this.resolucion;
    this.rows = height / this.resolucion;

    this.make2Darray = function(n){
        var array = [];
        for(var i = 0; i < n; i++){
            array[i] = []
        }
        return array;
    };

    this.field = this.make2Darray(this.cols);
    
    this.init =  function(){
        noiseSeed(Math.floor(random(10000)));

        var xoff = 0;

        for(var i = 0; i < this.cols; i++){
            var yoff = 0;
            for(var j = 0; j < this.rows; j++){
                var theta = map(noise(xoff,yoff),0,1,0,TWO_PI)
                this.field[i][j] = createVector(cos(theta), sin(theta));
                yoff += 0.1;
            }
            xoff += 0.1;
        }
    }; 
  
    this.init()

    this.display = function(){
        for(var i = 0; i < this.cols;i++){
            for(var j = 0;j < this.rows; j++){
                drawVector(this.field[i][j], i * this.resolucion, j * this.resolucion, this.resolucion - 2)
            }
        }
    };

    this.lookup = function(lookup){
        var columna = Math.floor(constrain(lookup.x / this.resolucion, 0, this.cols -1 ));
        var fila = Math.floor(constrain(lookup.y / this.resolucion, 0, this.rows -1));

        return this.field[columna][fila].copy();
    };
     
     //funcion privada
     var drawVector = function(v, x, y, scayl) {
        push();
        var arrowsize = 4;
        
        translate(x, y);
        stroke(200, 100);
        
        rotate(v.heading());
     
        var len = v.mag() * scayl;
  
        line(0, 0, len, 0);
 
        pop();
      };
}