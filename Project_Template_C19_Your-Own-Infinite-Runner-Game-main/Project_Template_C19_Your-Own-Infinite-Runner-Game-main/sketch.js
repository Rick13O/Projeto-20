var star,starsGroup,starImg;
var rocket,rocketImg;
var meteor,meteorsGroup,meteorImg;
var bckg,bckgImg
var Space,SpaceSound

function preload(){
  starImg = loadImage("star.png")
  rocketImg = loadImage("rocket.png")
  meteorImg = loadImage("meteor.png")
  bckgImg = loadImage("stars_background.jpg")
  SpaceSound = loadSound("Space Ambience.wav");
}

function setup() {
 createCanvas(600,600);

 bckg = createSprite(300,300);
 bckg.addImage(bckgImg,"stars_background");
 bckg.velocityY = 1;
}

function spawnMeteors(){
  if (frameCount%200 === 0){
  meteor = createSprite(250,-50);
  meteor.addImage(meteorImg)

  meteor.lifetime = 800;
  }
}

function draw() {
    background(200)
    if(tower.y > 400){
      tower.y = 300
    }

  spawnMeteors();
  drawSprites();  
}