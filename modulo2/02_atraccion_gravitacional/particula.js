
var Particula = function() {
  this.pos = createVector(400, 250);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.mass = 1;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  };

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.display = function() {
    fill(255, 127);
    ellipse(this.pos.x, this.pos.y, this.mass*16, this.mass*16);
  };
}

