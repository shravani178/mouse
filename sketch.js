
function preload() {
    //load the images here
    catImage=loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
     gardenImage=loadAnimation("garden.png");
    mouseImage=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden =createSprite(500,400,200,200);
    garden.addAnimation("abc",gardenImage)
    cat= createSprite(400,300,20,20);
    cat.addAnimation("123",catImage) 
    mouse =createSprite(200,700,10,10);
    mouse.addAnimation("pqr",mouseImage)


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   


}
