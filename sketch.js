var dog
var dog1
var database
var foodS
var foodStock


function preload()
{
	dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImage1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firbase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  foodStock.set(20); 
}


function draw() {
  background("green");
  if(foodS!== undefined){
    textSize(20);
    fill(255);
    Text("Note: Press UP ARROW to feed DRAGO milk", 50,50);
    Text("Food Remaining: "+foodS, 150,150);

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDogImg);
    }

    if(keyWentUp(UP_ARROW)){
      dog.addImage(dogImg);
    }

    if(foodS === 0){
      foodS = 20;
    }



  }  

  drawSprites();
  //add styles here
function writeStock(x){
  if(x<=0){
    x =0;
  }
  else{
     x = x-1;
  }
  database.ref("/").update({
    Food:x
  });
}


function readStock(data){
  foodS = data.val();
}
}



