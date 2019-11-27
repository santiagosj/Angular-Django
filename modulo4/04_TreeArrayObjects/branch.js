function Branch(start, vel, n){
   this.start = start.copy()
   this.end = start.copy()
   this.vel = vel.copy()
   this.timerstart = n;
   this.timer = n;

   this.growing = true;

   this.update=function(){
       if(this.growing){
           this.end.add(this.vel)
       }
   }

   this.render = function(){
       stroke(0);
       line(this.start.x,this.start.y,this.end.x,this.end.y);
   }

   this.timeToBranch = function(){
       this.timer--;
       if(this.timer < 0 && this.growing){
           this.growing = false;
           return true;
       }else{
           return false;
       }
   }

   this.branch = function(angulo){

       var theta = vel.heading();

       var m = vel.mag()

       theta += radians(angulo)

       var newvel = createVector(m * cos(theta), m * sin(theta));

       return new Branch(this.end, newvel, this.timerstart * 0.66);
   }
}