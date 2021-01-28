class String{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.9,
            length:400,
        }
        this.pointB=pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}