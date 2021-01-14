class Box {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0,
      density: 1,
      friction: 5,
    };
    this.visibility = 225;
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  score() {
    if (this.visibility > 0 && this.visibility <= 105) {
      score++;
    }
  }
  show() {
    //console.log(this.body.speed);
    if (this.body.speed < 10) {
      let pos = this.body.position;
      let angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(0.2);
      fill(236, 132, 219);
      rect(0, 0, this.w, this.h);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 20;
      console.log(this.visibility);
      pop();
    }
  }
}
