var bg, backgroundImage
var ground, groundImage
var Bad_Ninja, BN_Proj, Good_Ninja
var Barrier_left, Barrier_right
var swipe = "no"
var BN_Group
var Projectile

function preload(){

  backgroundImage = loadImage("Background.jpg");
  groundImage = loadImage("ground_1.png");
  GN_Standing = loadAnimation("GN_Standing/GN_Standing 1.png",
  "GN_Standing/GN_Standing 2.png",
  "GN_Standing/GN_Standing 3.png",
  "GN_Standing/GN_Standing 4.png",
  "GN_Standing/GN_Standing 5.png")
  GN_Attacking = loadAnimation("GN_Attacking/Posture_1/GN_Attacking_P1 (1).png",
  "GN_Attacking/Posture_1/GN_Attacking_P1 (2).png",
  "GN_Attacking/Posture_1/GN_Attacking_P1 (3).png",
  "GN_Attacking/Posture_1/GN_Attacking_P1 (4).png",
  "GN_Attacking/Posture_1/GN_Attacking_P1 (5).png",
  "GN_Attacking/Posture_1/GN_Attacking_P1 (6).png")
  GN_Running = loadAnimation("Good Ninja Running/GN_Running1.png",
  "Good Ninja Running/GN_Running2.png",
  "Good Ninja Running/GN_Running3.png",
  "Good Ninja Running/GN_Running4.png",
  "Good Ninja Running/GN_Running5.png",
  "Good Ninja Running/GN_Running6.png",
  "Good Ninja Running/GN_Running7.png",
  "Good Ninja Running/GN_Running8.png",
  "Good Ninja Running/GN_Running9.png")
  GN_Back = loadAnimation("GN_Back/GN_Back 1.png",
   "GN_Back/GN_Back 2.png",
   "GN_Back/GN_Back 3.png")
  BN_Proj = loadAnimation("Bad_Ninja_Projectile/Bad_Ninja_Projectile 1.png",
   "Bad_Ninja_Projectile/Bad_Ninja_Projectile 2.png",
   "Bad_Ninja_Projectile/Bad_Ninja_Projectile 3.png")
   Projectile_Launch = loadAnimation("Bad_Ninja_Projectile/BN_Projectile_1.png",
    "Bad_Ninja_Projectile/BN_Projectile_2.png")
  BN_Standing = loadAnimation("Bad_Ninja_Attacking/Posture 1/BN_Attack_P1.png")
  BN_Attacking_P1 = loadAnimation("Bad_Ninja_Attacking/Posture 1/BN_Attack_P1.png", "Bad_Ninja_Attacking/Posture 1/BN_Attack_P2.png", "Bad_Ninja_Attacking/Posture 1/BN_Attack_P3.png", "Bad_Ninja_Attacking/Posture 1/BN_Attack_P4.png")

}

function setup() {
  createCanvas(1367, 600);




  Good_Ninja = createSprite(100, 500, 50, 140);
  Good_Ninja.addAnimation("GN_Standing", GN_Standing);
  Good_Ninja.addAnimation("GN_Running", GN_Running);
  Good_Ninja.addAnimation("GN_Back", GN_Back)
  Good_Ninja.addAnimation("GN_Attacking", GN_Attacking)
  Good_Ninja.scale = 0.7


  ground = createSprite(width / 2  - 50, height - 120);
  ground.addImage(groundImage)
  ground.scale = 6


  Barrier_right = createSprite(1365, 300, 5, 600);
  Barrier_right.visible = false

  Barrier_left = createSprite(1, 300, 5, 600);
  Barrier_left.visible = false

  BN_Group1 = createGroup();
  BN_Group2 = createGroup();
 
}

function draw() {
 background(backgroundImage)
  // background.velocityX = -5;

  // ground.velocityX = -5

  if(ground.x < 150){
    ground.x = ground.width / 2
  }

  console.log(swipe)

 

  if(keyDown(RIGHT_ARROW)){
    Good_Ninja.changeAnimation("GN_Running", GN_Running);
    Good_Ninja.x = Good_Ninja.x + 10
    Good_Ninja.scale = 0.7

  } 

  if(keyDown("A")){
    Good_Ninja.changeAnimation("GN_Attacking", GN_Attacking)
    Good_Ninja.scale = 1.5
  }

  if(keyWentUp("A")){
    Good_Ninja.changeAnimation("GN_Standing", GN_Standing)
    Good_Ninja.scale = 0.7
  }
  

  if(keyDown(LEFT_ARROW)){
    Good_Ninja.changeAnimation("GN_Back", GN_Back);
    Good_Ninja.x = Good_Ninja.x - 10
    Good_Ninja.scale = 0.7

  } 

  if(keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW)){
    Good_Ninja.changeAnimation("GN_Standing", GN_Standing)
    Good_Ninja.scale = 0.7

  }

  Good_Ninja.collide(Barrier_right);
  Good_Ninja.collide(Barrier_left);

  fill("black")
  text(mouseX + "," + mouseY, mouseX, mouseY);


  BN_Spawn();
  drawSprites();
}

function BN_Spawn(){
  if(frameCount%200 === 0){
    var rand = Math.round(random(200, 510))
    console.log(rand)
    Bad_Ninja = createSprite(1300, 510 , 50, 40); 
    Bad_Ninja.addAnimation("BN_Standing", BN_Standing);
    Bad_Ninja.addAnimation("BN_Posture_1", BN_Attacking_P1);
    // Bad_Ninja.y = Math.round(random(200, 510));
    // Bad_Ninja.collide(ground)
    Bad_Ninja.scale = 0.7
    Bad_Ninja.velocityX = -5
    Bad_Ninja.lifetime = 540
    
    if(Bad_Ninja.isTouching(Good_Ninja)){
      Bad_Ninja.changeAnimation("BN_Posture_1", BN_Attacking_P1);
      } else {
        Bad_Ninja.changeAnimation("BN_Standing", BN_Standing);
      }
    }
    // var num = Math.round(random(1,2))
    // if(num === 1){
    // BN_Group1.add(Bad_Ninja)
    // }
    // else {
    //   BN_Group2.add(Bad_Ninja);
    // }

    // if(BN_Group1.isTouching(Good_Ninja)){
    //   Bad_Ninja.changeAnimation("BN_Posture_1", BN_Attacking_P1);
    // } else {
    //   Bad_Ninja.changeAnimation("BN_Standing", BN_Standing);
    // }

    // if(BN_Group2.isTouching(Good_Ninja)){
    //   Bad_Ninja.changeAnimation("BN_Posture_1", BN_Attacking_P1);
    // } else {
    //   Bad_Ninja.changeAnimation("BN_Standing", BN_Standing);
    // }
  



  // if(frameCount%263 === 0){
  //   BN_Projectile = createSprite(1300, 510 , 50, 40); 
  //   BN_Projectile.addAnimation("BN_Proj", BN_Proj);
  //   BN_Projectile.scale = 0.7
  //   BN_Projectile.velocityX = -5

  //   Projectile = createSprite(1250, 510 , 50, 40); 
  //   Projectile.addAnimation("BN_Launch", Projectile_Launch);
  //   Projectile.scale = 0.7
  //   Projectile.velocityX = -7

  // }
}

