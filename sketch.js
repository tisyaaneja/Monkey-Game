
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var ground;
var survivaltime=0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(400,400);
  
  monkey = createSprite(20,300,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,330,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  
  obstacleGroup = new Group();
  foodGroup= new Group();


  
}


function draw() {
  background("lightblue");

  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if (keyDown("space")&&(monkey.y>200)) {
    
    monkey.velocityY=-12;
  }
  

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  //console.log(monkey.y)
  
  food();
  obstacles();
  drawSprites();
  

 
   if(obstacleGroup.isTouching(monkey)){
      ground.velocityX = 0;
      monkey.velocityY = 0;
      obstacleGroup.setVelocityXEach(0); 
     foodGroup.setVelocityXEach(0); 
    foodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1); 
     
  } 

  stroke("black")
  textSize(20);
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time" +survivaltime,100,50);
   
}

 function food() {
   
    if (frameCount % 80 === 0) {
     banana=createSprite(200,100,10,10);
     banana.y =Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale=0.1;
     banana.velocityX=-4;
     banana.lifetime=300;
      monkey.depth=banana.depth+1;
      
      foodGroup.add(banana);
      
     
   }
   
   
   
 }


  function obstacles () {
    
    if (frameCount % 200 === 0) {
    obstacle=createSprite(100,290,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-4;
      obstacle.lifetime=300;
      
      obstacleGroup.add(obstacle);
    }
    
    
    
  }






