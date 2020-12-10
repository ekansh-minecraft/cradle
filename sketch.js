const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;


    bird = new Bird(100,100);
    log6 = new Log(230,180,80, -PI/7)
    chain = new Chain(bird.body,log6.body)

}

function draw(){
    background(0)
    Engine.update(engine);

    bird.display();
    chain.display()
    log6.display()
    
}
