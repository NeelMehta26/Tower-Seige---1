class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      push ();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rotate (this.body.angle);
  
      rectMode(CENTER);
      fill(255, 191, 202);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }