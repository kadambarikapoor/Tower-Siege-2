const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var chain, polygon;

function preload(){	
}

function setup() {
	createCanvas(520, 400);

	engine = Engine.create();
	world = engine.world;

	 polygon = new Polygon(200, 450, 40);
	 
	 chain = new Chain(polygon.body,{x:200, y:100});

	 base = new Base(390, 255, 240, 20);
	 
	 //Level1
	 block1 = new Block(330, 235, 30, 40);
	 block2 = new Block(360, 235, 30, 40);
	 block3 = new Block(390, 235, 30, 40);
	 block4 = new Block(420, 235, 30, 40);
	 block5 = new Block(450, 235, 30, 40);
	 //Level2
	 block6 = new Block(360, 195, 30, 40);
	 block7 = new Block(390, 195, 30, 40);
	 block8 = new Block(420, 195, 30, 40);
	 //Top
	 block9 = new Block(390, 155, 30, 40);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(255);
	//engine.update();
  polygon.display();
  chain.display();
  base.display();

  //Level1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  //Level2
  block6.display();
  block7.display();
  block8.display();
  //Top
  block9.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased() {
  chain.fly();  
}
function keyPressed(){
	chain.attach(this.polygon.body);
    }