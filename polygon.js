class Polygon {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      density: 2,
    };
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    this.image = loadImage("polygon.png");
    this.r = r;
  }
  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}
