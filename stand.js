class Stand {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true,
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
    push();
    translate(pos.x - 80, pos.y + 10);
    noStroke();
    fill(160, 105, 247);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
