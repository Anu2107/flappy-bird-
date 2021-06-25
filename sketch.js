const Engine = Matter.Engine; 
const Bodies = Matter.Bodies; 
const World = Matter.World; 

var bg, bgSprite;  
var engine, world; 
var bird; 
var pipe1; 
var pipe2; 

function preload(){
  bg = loadImage("background.jpg"); 
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create(); 
  world = engine.world; 

  bgSprite = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight); 
  bgSprite.velocityX = -2; 
  bgSprite.addImage(bg); 

  bird = new flappy(100, 120); 
 

}

function draw() {
  background(0); 
  Engine.update(engine); 

  if(bgSprite.x < 400){
     bgSprite.x = bgSprite.width/2; 
  }

  drawSprites();

  bird.display();
  

  if(frameCount%80 === 0){
    pipe1 = new pipes(displayWidth, 80)
    pipe2 = new pipes(displayWidth, 350)
    Matter.Body.setVelocity(pipe1.body, {x: -2, y: 0}) 
    Matter.Body.setVelocity(pipe2.body, {x: -2, y: 0}) 
    pipe1.display(); 
    pipe2.display(); 
  }
  
  
    
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.setPosition(bird.body,{x: bird.body.position.x + 5, y: bird.body.position.y})
  //  Matter.Body.setStatic(bird.body, true); 
  }
  if(keyCode === UP_ARROW){
    Matter.Body.setPosition(bird.body,{x: bird.body.position.x, y: bird.body.position.y - 5})
   // Matter.Body.setStatic(bird.body, true); 
  }
  if(keyCode === DOWN_ARROW){
    Matter.Body.setPosition(bird.body,{x: bird.body.position.x, y: bird.body.position.y + 5})
    //Matter.Body.setStatic(bird.body, true); 
  }
}
