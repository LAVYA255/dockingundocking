var iss, sc1 , bg;
var scimg1, scimg2 ,scimg3, scimg4, issimg;
var hasDocked=false;



function preload(){
 bg= loadImage ("1/spacebg.jpg");
issimg = loadImage("1/iss.png");
scimg1 =loadImage("1/spacecraft1.png")
scimg2 =loadImage("1/spacecraft2.png")
scimg3 =loadImage("1/spacecraft3.png")
scimg4 =loadImage("1/spacecraft4.png")
}
function setup() {
  createCanvas(600,350);
  //createSprite(400, 200, 50, 50);
  sc1= createSprite(285,240);
  sc1.addImage(scimg1);
  sc1.scale=0.15;
  iss= createSprite(330,130);
  iss.addImage(issimg);
  iss.scale= 0.25
 }

function draw() {
  background(bg);
  
  if(!hasDocked){
  sc1.x=sc1.x+random(-1,1)
    if(keyDown("UP_ARROW")){
    sc1.y=sc1.y-2;
    }
    if(keyDown("DOWN_ARROW")){
      //sc1.y=sc1.y=2
      sc1.addImage(scimg1);  
    }
    if(keyDown("LEFT_ARROW")){
      sc1.addImage(scimg2);
      sc1.x=sc1.x-1; 

      }
    
      if(keyDown("RIGHT_ARROW")){
        sc1.addImage(scimg3);
        sc1.x=sc1.x+1; 
  
        }
    }

if(sc1.y<=(iss.y+70) && sc1.x<=(iss.x-10)){
hasDocked=true;
textSize(25);
fill("white");
text("Docking Successful",200,300);
}






  drawSprites();

}