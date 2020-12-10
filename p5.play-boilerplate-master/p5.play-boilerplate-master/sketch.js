function setup() {
 createCanvas(800,400);
 r1= createSprite(400, 200, 50, 50);
 r2 = createSprite(100,200,50,50);
  
}

function draw() {
  background(255,255,255);  
r1.x=mouseX
r1.y=mouseY
  if(r1.x-r2.x<r1.width/2+r2.width/2&&
  r1.x-r2.x<r1.width/2+r2.width/2&&
  r1.x-r2.x<r1.width/2+r2.width/2&&
  r1.x-r2.x<r1.width/2+r2.width/2) {

    r1.shapeColor ="blue";
    r2.shapecolor ="blue"
  }
  else{ r1.shapeColor ="black";
  r2.shapecolor ="black"

  }

  
  drawSprites();
}