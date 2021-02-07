var car;
var speed,weight;
var wall;

function setup() {
  createCanvas(1600,400);
  
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  car = createSprite(50,200,100,50);
  car.velocityX = speed;
  car.shapeColor = "pink";

  wall = createSprite(1400,200,60,height/2);
  wall.shapeColor = "Orange";

}

function draw() {
  background(0);

  if(wall.x - car.x < (car.width+wall.width)/2){

    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22500;


    if(deformation > 180){
      car.shapeColor = "red";
    }

    if(deformation < 180  && deformation > 100){
      car.shapeColor = "yellow";
    }

    if(deformation < 100){
      car.shapeColor = "green";
    }
  }
 
  drawSprites();
}