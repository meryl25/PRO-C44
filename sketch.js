var ball, ground, player;


function preload() {
ball= loadImage("tennis ball.png")  
ground= loadImage("tennis court.png")
player= loadImage("tennis player.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  player1= createSprite(250,450)
  player1.addImage(player)
  player1.scale=0.5
  player2= createSprite(1300,450)
  player2.addImage(player)
  player2.rotate(180)
}

function draw() {
  background(ground)
  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
