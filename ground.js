class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  show() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("green");
    push();
    translate(pos.x, pos.y);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
