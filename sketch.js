
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  fruitImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  
   monkey = createSprite(80,315,20,50);
   monkey.addAnimation("running", monkey_running);
   monkey.scale=0.1;
  
   ground = createSprite(400,350,1200,20);
   ground.velocityX=-3;
  fruitGroup=new Group();
}


function draw() {
  background("white");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -10;
        
    }
  console.log(monkey.y);
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  fruits();
  spawnObstacles();
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  if(monkey.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
  }
  
  
  
  drawSprites();
}
function fruits() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var fruit = createSprite(600,120,40,10);
    fruit.y = Math.round(random(200,250));
    fruit.addImage(fruitImage);
    fruit.scale = 0.1;
    fruit.velocityX = -3;
    
     //assign lifetime to the variable
    fruit.lifetime = 200;
    
    
    
    
    
    //add each cloud to the group
    fruitGroup.add(fruit);
  }
}
function spawnObstacles(){
  if (frameCount % 300 === 0) {
   var obstacle = createSprite(600,330,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale=0.1;
  }
} 




