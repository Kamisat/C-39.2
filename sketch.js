var principal, carImage, car1, car2, car3, linha;

var obstaculos, obstaculos2, obstaculos3, grupoObstaculos;

var gameState, playerState, bg, back;

function preload() {
  carImage = loadImage("car.png");
  bg = loadImage("track.jpg");
  car1 = loadImage("car1.png");
  car2 = loadImage("car2.png");
  car3 = loadImage("car3.png");
}

function setup() {
  createCanvas(400, 400);

  back = createSprite(200, 200, 50, 50);

  back.addImage(bg);

  linha = createSprite(20100, 200, 20, 400)
linha.shapeColor = "purple"
  principal = createSprite(100, 200, 20, 20);
  principal.addImage(carImage);
  principal.scale = 0.4;
  principal.shapeColor = "purple";

  gameState = 0;

  playerState = null;

  grupoObstaculos = new Group();
}
function draw() {
  background(255, 100, 100);

  fill("blue");

  principal.velocityX = 0;

 // text(principal.x - 100, camera.x + 100, 30)
  
  

  if (gameState === 0) {

    back.x = -9000;

    text(
      "Aperte X para iniciar a dificuldade NORMAL",
      camera.x - 120,
      100
    )
    text(
      "Aperte Z para iniciar a dificuldade DIFÍCIL",
      camera.x - 120,
      120
    )
    text("Chegue na liha de chegade para vencer", camera.x - 120, 140)

    if (playerState !== null) {
      textSize(23);
      text(playerState, camera.x - 50, 50);
    }

    if (keyCode === 88) {
      principal.x = 0;
      back.x = principal.x;

      gameState = 1;
      keyCode = null;
      playerState = null;
    } else if (keyCode === 90) {
      principal.x = 0;
      back.x = principal.x;

      gameState = 2;
      keyCode = null;
      playerState = null;
    }
  }

  if (gameState === 1) {
    principal.velocityX = 7;
    if (camera.x >= back.x + 2980 || camera.x <= 201) {
      console.log();
      back.x = camera.x;
    
    }
    camera.x = principal.x + 100;

    if (frameCount % 10 === 0) {
      obstaculos = createSprite(camera.x + 300, random(0, 400), 30, 30);
      obstaculos.shapeColor = "green";
      grupoObstaculos.add(obstaculos);
      obstaculos.lifetime = 100;
      obstaculos.addImage(car1);
      obstaculos.scale = 0.4;
    }
    principal.y = mouseY;

    if (principal.isTouching(grupoObstaculos)) {
      console.log("Derrota");
      obstaculos.lifetime = 100;
      gameState = 0;
      playerState = "Derrota: Normal";
    }
    if (principal.x > 20100) {
      playerState = "Vitória: Normal";
      gameState = 0;
    }
  }

  if (gameState === 2) {
    principal.velocityX = 15;
    if (camera.x >= back.x + 2980 || camera.x <= 201) {
      console.log();
      back.x = camera.x;
    }

    camera.x = principal.x + 100;

    if (frameCount % 10 === 0) {
      obstaculos = createSprite(camera.x + 300, random(0, 400), 30, 30);
      obstaculos2 = createSprite(camera.x + 300, random(0, 400), 30, 30);
      obstaculos3 = createSprite(camera.x + 300, random(0, 400), 30, 30);
      grupoObstaculos.add(obstaculos);
      grupoObstaculos.add(obstaculos2);
      grupoObstaculos.add(obstaculos3);
      obstaculos.addImage(car1);
      obstaculos.scale = 0.4;
      obstaculos2.addImage(car2);
      obstaculos2.scale = 0.4;
      obstaculos3.addImage(car3);
      obstaculos3.scale = 0.4;
      // obstaculos.shapeColor = "green";
      // obstaculos2.shapeColor = "green";
      // obstaculos3.shapeColor = "green";

      obstaculos.lifetime = 100;
      obstaculos2.lifetime = 100;
      obstaculos3.lifetime = 100;
    }
    principal.y = mouseY;

    if (principal.isTouching(grupoObstaculos)) {
      console.log("Derrota");
      obstaculos.lifetime = 100;
      gameState = 0;
      playerState = "Derrota: Difícil";
    }
    if (principal.x > 20100) {
      playerState = "Vitória: Difícil";
      gameState = 0;
    }
  }

  console.log(gameState);

 


  drawSprites();

}