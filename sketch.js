
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var paper;
var ground;
var dustbin2, dustbin3, dustbinImage, dustbin;

function preload(){
paper = loadImage("Images/paper.png");
dustbinImage = loadImage("Images/dustbin.png")
}

	


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 390, 40);
	ground = new Ground(600, height, 1200, 20);
	
	dustbin2 = new Dustbin(1050,380, 10, 100);
	dustbin3 = new Dustbin(1150, 380, 10, 100);
	dustbin = createSprite(1100,390,100,10);
	dustbin.addImage(dustbinImage);

	
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  Engine.update(engine);

  paper1.display();
  ground.display();
  
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85,y:-85});
	}
}

