// Module ALiases
const { Engine, World, Bodies, Body, Constraint } = Matter;
// Engien, World and the API link
let url = "http://worldclockapi.com/api/json/est/now";
let engine, world;
// images
let polyImg;
// Bodies
let polygon, ground, stand1, stand2, block, slingShot, n;
let blocks = (blocks2 = []);
// GameState and Score
let score = 0;

// Loading images
function preload() {
  getTime();
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
  background(102, 191, 248);

  // Stands
  stand1.show();
  stand2.show();

  // Blocks
  for (let index = 0; index < blocks.length; index++) {
    blocks[index].show();
    blocks[index].score();
  }
  // Blocks2
  for (let index = 0; index < blocks.length; index++) {
    blocks2[index].show();
    blocks2[index].score();
  }
  // Blocks 3
  block.show();
  block.score();
  block2.show();
  block2.score();

  //Polygon
  polygon.show();

  //Slingshot
  slingShot.show();

  // Some Annotations
  fill(255);
  textFont("VT323");
  textSize(24);
  text(
    "Drag the Hexagonal Stone and Relese it , to launch it towards the blocks",
    10,
    30
  );
  text("Press space bar to reset", 10, 70);
  fill("yellow");
  text(score, 10, 110);
}

// launch Mechanism
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
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

// API
async function getTime() {
  var response = await fetch(url);
  var responseJSON = await response.json();
  var dateTime = responseJSON.currentDateTime;
  var hour = dateTime.slice(11, 13);
  if (hour >= 6 && hour < 18) {
    background(102, 191, 248);
  } else {
    background(160, 105, 247);
  }
}
