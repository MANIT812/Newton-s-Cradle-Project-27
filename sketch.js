
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof1,bob1,string1,ground,bob2,bob3,bob4,bob5,string2,string3,string4,string5;
function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	 roof1=new Roof(400,100,500,30);
	 bob1=new Bob(400,300,50);
	 ground=new Roof(400,600,800,50);
	 string1=new String(bob1.body,{x:400,y:100});
	 bob2=new Bob(490,300,50);
	 bob3=new Bob(590,300,50);
	 bob4=new Bob(310,300,50);
	 bob5=new Bob(240,300,50);
	 string2=new String(bob2.body,{x:490,y:100});
	 string3=new String(bob3.body,{x:590,y:100});
	 string4=new String(bob4.body,{x:310,y:100});
	 string5=new String(bob5.body,{x:240,y:100});
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  roof1.display();
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 string1.display();
 string2.display();
 string3.display();
 string4.display();
string5.display();
if(keyDown("space")){
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:50,y:-55});
}
}



