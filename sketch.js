const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var car ,fuel , acselator , brake,world,engine
var ground , bg1,bg2,bg3

function preload(){
bg1=loadImage ("images/1.png")
bg2=loadImage("images/2.png")
bg3=loadImage("images/3.png")

}

function setup (){
  createCanvas(windowWidth,windowHeight)
  engine=Engine.create()
  world=engine.world
  bg = new Bg (windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  invisibleGround = new Ground (width/2,height,width,10)
  ground=new Ground (width/2,height-20,width,10)
  car = new Car(400,height-75)
  accselater=new Buttons(1200,height-100,200,100)
  brake =new Buttons(150,height-100,200,100)
}
function draw (){
  background ("white")
  Engine.update(engine)
  bg.display()
  ground.display()
  car.display()
  accselater.display()
  brake.display()
  fill(0)
  invisibleGround.display()
}

function keyPressed (){
  if(keyCode===122){
    brakePressed()
  }
  else if (keyCode===32){
    console.log("spacepressed")
    speedPressed()

  }
}

function speedPressed (){
  //Matter.Body.setStatic(ground.body,false)
  Matter.Body.applyForce(car.body,{x:100,y:0})
}