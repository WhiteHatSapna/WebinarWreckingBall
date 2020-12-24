class Ball {
    constructor(x, y) {
      var options = {
        restitution: 0.5,
        friction: 0.5,
        frictionAir: 0.0
      
    };
    this.body = Bodies.rectangle(x, y, 40, 40, options);
    this.x = x;
    this.y = y;
    this.color = color;
    World.add(myWorld, this.body);
  }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(2);
      stroke("red");
      fill("lightpink");
      ellipseMode(RADIUS);
      ellipse(0, 0, 30,30);
      pop();
    };
  };
