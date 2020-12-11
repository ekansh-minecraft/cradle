
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var handle
var ball1,ball2,ball3,ball4,ball5




function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;


	handle = new Roof(400,200,250,40,world)
	ball1 = new Bob(300,450,50,handle.body,world)
    ball2 = new Bob(350,450,50,handle.body,world)
    ball3 = new Bob(400,450,50,handle.body,world)
    ball4 = new Bob(450,450,50,handle.body,world)
    ball5 = new Bob(500,450,50,handle.body,world)
	
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

   handle.display()
   ball1.display()
   ball2.display()
   ball3.display()
   ball4.display()
   ball5.display()
  

  
  drawSprites()
 
}
