var tom,tomAni,tomImg,tomIM,jerry,jerryAni,jerryImg,jerryIM,garden,gardenImg;
var bgImg;
function preload() {
    bgImg = loadImage("images/garden.png");
    tomAni = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg = loadImage("images/cat1.png");
    tomIM = loadImage("images/cat4.png");
    jerryAni = loadAnimation("images/mouse3.png","images/mouse2.png");
    jerryImg = loadImage("images/mouse1.png");
    jerryIM = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(600,600);
    garden = createSprite(300,300,600,600);
    garden.addImage("garden",bgImg);
    tom = createSprite(500,500,20,20);
    tom.addImage("cat1",tomImg);
    tom.scale = 0.1;
    jerry = createSprite(50,500,20,20);
    jerry.addImage("mouse1",jerryImg);
    jerry.scale = 0.1;

}

function draw() {
    background("yellow");
    if(keyDown("LEFT_Arrow")){
        tom.velocityX = -3;
        tom.addAnimation("running",tomAni);
        tom.changeAnimation("running");;
        jerry.addAnimation("moving",jerryAni);
        jerry.changeAnimation("moving");        
    }
     if(tom.x-jerry.x < (tom.width+jerry.width)/2){
         tom.addImage("tommy",tomIM);
         tom.changeImage("tommy");
         tom.velocityX = 0;
         jerry.addImage("jerry",jerryIM);
         jerry.changeImage("jerry");
     }

    drawSprites();
}
