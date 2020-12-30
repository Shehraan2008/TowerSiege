// Module ALiases
const { Engine, World, Bodies, Body, Constraint } = Matter;
// Engien and world
let engine, world;
// images
let polyImg;
// Bodies
let polygon, ground, stand1, stand2, block, slingShot;
let blocks = (blocks2 = []);
// GameState;
PLAY = 1;
START = 2;
gameState = START;

// Loading images
function preload() {
  polyImg = loadImage("polygon.png");
}
function setup() {
  const canvas = createCanvas(900, 400);

  // Engine and World
  engine = Engine.create();
  world = engine.world;

  // Ground
  ground = new Ground(200, height - 20, width + 500, 10);

  /*Blocks*/
  // Level 1
  for (let index = 320; index < 480; index = index + 30) {
    let block = new Box(index, 235, 30, 40);
    blocks.push(block);
  }
  // Level 2
  for (let index = 360; index < 450; index = index + 30) {
    let block = new Box(index, 195, 30, 40);
    blocks.push(block);
  }
  // Level 3
  block = new Box(390, 155, 30, 40);

  /*Blocks 2 */
  // Level 1
  for (let index = 620; index < 780; index = index + 30) {
    let block = new Box(index, 235, 30, 40);
    blocks2.push(block);
  }
  // Level 2
  for (let index = 660; index < 750; index = index + 30) {
    fill("blue");
    let block = new Box(index, 195, 30, 40);
    blocks2.push(block);
  }
  // Level 3
  fill(255, 105, 97);
  block2 = new Box(690, 155, 30, 40);

  // Stands
  stand1 = new Stand(375, 335, 250, 20);
  stand2 = new Stand(670, 300, 250, 20);

  // The Polygon
  polygon = new Polygon(100, 200, 50, 50);

  // Sling Shot
  slingShot = new SlingShot(polygon.body, { x: 200, y: 250 });

  Engine.run(engine);
}

function draw() {
  // Background
  background("beige");
  // Stands
  stand1.show();
  stand2.show();

  // Blocks
  for (let index = 0; index < blocks.length; index++) {
    blocks[index].show();
  }
  // Blocks2
  for (let index = 0; index < blocks.length; index++) {
    blocks2[index].show();
  }
  // Blocks 3
  block.show();
  block2.show();

  //Polygon
  polygon.show();

  //Slingshot
  slingShot.show();

  // Instructions
  if (gameState === START) {
    textSize(18);
    textFont("Comic Sans ms");
    text("Drag your Mouse to Launch the Polygon", 50, 50);
    text("Press SPACE to reset the Polygon", 50, 80);
  }

  // Some Annotations
  textSize(55);
  textFont("Comic Sans ms");
  text("Tower Seige", 350, 100);
}

// launch Mechanism
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
  gameState = PLAY;
}

function mouseReleased() {
  slingShot.fly();
}

// reseting Mechanism
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, { x: 200, y: 250 });
    slingShot.attach(polygon.body);
  }
}

function isTouching(spriteOne, spriteTwo) {
  if (
    spriteOne.x - spriteTwo.x < spriteTwo.width / 2 + spriteOne.width / 2 &&
    spriteTwo.x - spriteOne.x < spriteTwo.width / 2 + spriteOne.width / 2 &&
    spriteOne.y - spriteTwo.y < spriteTwo.height / 2 + spriteOne.height / 2 &&
    spriteTwo.y - spriteOne.y < spriteTwo.height / 2 + spriteOne.height / 2
  ) {
    return true;
  } else {
    return false;
  }
}
