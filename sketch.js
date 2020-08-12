
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,390,800,20)
	World.add = (world,ground);

	paper = new Paper(100,340,35);
	World.add = (world,paper);
	
	bb1 = new BinBox(650,370,150,20);
	World.add = (world,bb1);
	bb2 = new BinBox(735,332,20,100);
	World.add = (world,bb2);
	bb3 = new BinBox(565,332,20,100);
	World.add = (world,bb3);
	
	Engine.run(engine);
	//Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);	
  background(0);
  ground.display();

  paper.display();

  bb1.display();  
  bb2.display();
  bb3.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.Body,paper.body.position,{x:125,y:-125});
	}
}