var jungle,stoneImg,bananaImg,monkeyImg;
var woobie,bg,ground;
var bananas,rocks,score;
var vikki;
function preload() {
  jungle = loadImage("jungle.jpg");
  
  stoneImg = loadImage("stone.png");
  
  bananaImg = loadImage("banana.png");
  
  monkeyImg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}
function setup() {
  createCanvas(600,400);
  
  bg = createSprite(300,200,400,400);
  bg.addImage("backgr",jungle);
  bg.velocityX = -3
  
  woobie = createSprite(60,340,1,1);
  woobie.addAnimation("huhu",monkeyImg);
  woobie.scale = 0.1;
  
  bananas = new Group();
  
  rocks = new Group();
}

function draw() {
  background(220);
  
  
  score = 0;
  
  var edge = createEdgeSprites();
  
  woobie.velocityY = woobie.velocityY+0.8;
  
  woobie.collide(edge[3]);
  if (bg.x<100){
    bg.x = 300;
  }
  if (keyWentDown("SPACE") && woobie.y >= 300){
    woobie.velocityY = -10 ;
  } 
  if (woobie.isTouching(bananas)){
    score = score+2;
    bananas.destroyEach();
  } 
  
   if (woobie.isTouching(rocks)){
    score = 0;
  } 
  
  switch (score){
    case 10 : woobie.scale = 1.2;
    break;
    case 20 : woobie.scale = 1.4;
    break;
    case 30 : woobie.scale = 1.6;
    break;
    case 40 : woobie.scale = 1.5;
    break;
    default : break;
  }
  
  bananaSpawn();
  stoneSpawn();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
}

function bananaSpawn(){
  if (frameCount % 100 === 0){
    var banana = createSprite(630,1,2,3)
    var rand = Math.round(random(200,300));
    banana.y = rand;
    banana.setVelocity(-3,0)
    banana.lifetime = 220;
    banana.addImage(bananaImg);
    banana.scale = 0.1;
    bananas.add(banana);
    
  }
}
function stoneSpawn() {
  if(frameCount % 200 === 0){
     var rock = createSprite(630,380,1,1);
     rock.addImage(stoneImg);
     rock.setVelocity(-3,0);
     rock.scale = 0.2;
     rock.lifetime = 210;
     rocks.add(rock);
     }
}