//constructor liquido

function Liquido(x, y, w, h, c){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;

    this.contiene =  function(m){
        var l = m.posicion;
        return l.x > this.x && l.x < this.x + this.w && l.y > this.y && l.y < this.y + this.h
    }

    this.calcEmpuje = function(m){
        //la magnitud es el coeficiente por speed al cuadrado.
        var speed = m.velocidad.mag()
        var magnitudEmpuje = this.c * speed * speed;
        
        var fuerzaEmpuje = m.velocidad.copy()
        fuerzaEmpuje.mult(-1)

        fuerzaEmpuje.setMag(magnitudEmpuje);
        return fuerzaEmpuje;

    }

    this.display = function(){
        noStroke();
        fill(50)
        rect(this.x, this.y, this.w, this.h)
    }
}