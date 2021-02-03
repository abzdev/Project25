class Paper {
    constructor(x,y) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.image = loadImage('paper.png');
        this.x = x;
        this.y = y;
        this.paper = Bodies.rectangle(x, y, 40, 30, options);
        World.add(world,this.paper);
    }
    display() {
        var pos = this.paper.position;

        push();
        rectMode(CENTER);
        //translate(pos.x,pos.y);
        imageMode(CENTER);
		noStroke();
        fill(255);
        image(this.image,pos.x,pos.y,this.paper.width,this.paper.height);
        this.image.resize(50,50);
        pop();
    }
}