class Strand {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 260
      }
  
      this.chain = Constraint.create(options);
      World.add(myWorld, this.chain);
      console.log(this.chain);
      console.log(this.chain.pointB);
    }
   
    display() {
     
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        push();
  
        stroke("red");
        strokeWeight(5);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
        
    
    }
  }