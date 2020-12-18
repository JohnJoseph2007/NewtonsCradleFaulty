
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Bobs
	ball1 = new Ball(120+100);
	ball2 = new Ball(260+100);
	ball3 = new Ball(400+100);
	ball4 = new Ball(540+100);
	ball5 = new Ball(680+100);

	//Ground
	ground1 = new Ground();

	//Strings
	rope1 = new BobString(ball1.body, ground1.body, -280, 0);
	rope2 = new BobString(ball2.body, ground1.body, -140, 0);
	rope3 = new BobString(ball3.body, ground1.body, 0, 0);
	rope4 = new BobString(ball4.body, ground1.body, 140, 0);
	rope5 = new BobString(ball5.body, ground1.body, 280, 0);

	keyPressed();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(128);

  ground1.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball1.body, ball1.body.position, {x:-180*5, y:0});
	}
}

