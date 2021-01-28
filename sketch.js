
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,boy,mango1,stoneObj,mango2,mango3,mango4,mango5,mango6,sling

function preload()
{
	tree=loadImage("tree.png")
	boy=loadImage("boy.png")
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	mango1= new Mango(700,200,50)
	mango2= new Mango(800,150,50)
	mango3= new Mango(650,300,50)
	mango4= new Mango(750,250,50)
	mango5= new Mango(650,200,50)
	mango6= new Mango(600,250,50)
	stone= new Stone(135,400,50)
	sling= new SlingShot(stone.body,{x:140,y:400})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
   
  background(600);
  image(tree,550,50,400,500)
  image(boy,100,340,250,300)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  stone.display()
  sling.display()
  detectcollision(stone,mango1)
   detectcollision(stone,mango2)
   detectcollision(stone,mango3)
   detectcollision(stone,mango4)
   detectcollision(stone,mango5)
   detectcollision(stone,mango6)
  drawSprites();
 
}
function detectcollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.body.setPosition(stoneObj.body)
	}
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly()
}



