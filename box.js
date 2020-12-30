class Box {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0,
      density: 1,
      friction: 5,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(0.3);
    stroke("red");
    rect(0, 0, this.w, this.h);
    pop();
  }
}
