class Bob {
    constructor(x,y,radius){
      var options={
          density:0.8,
          frictionAir:0.005,
          restitution:0.5
      }
      this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;
      World.add(world,this.body);
    }
    display(){
       var pos =this.body.position;
       var angle=this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          fill("yellow");
          ellipseMode(CENTER);
          ellipse(0,0,this.radius,this.radius);
          pop();
    }
}