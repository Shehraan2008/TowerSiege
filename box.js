class Box {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0,
      density: 1,
      friction: 5,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.visbility = 255;
    this.w = w;
    this.h = h;
  }
  show() {
    if (this.body.speed < 4) {
      let pos = this.body.position;
      let angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(0.3);
      stroke("red");
      rect(0, 0, this.w, this.h);
      pop();
    } else {
      // World.remove(world, this.body);
      push();
      // this.visbility = this.visbility - 15;
      // tint(255, this.visbility);
      pop();
    }
  }
}
