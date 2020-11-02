class Paper {
    constructor(x, y, radius){
        var paper_options = {
            friction : 0.5,
            density : 2.1,
            restitution: 0.58
        }
        this.image = loadImage("Images/paper.png");
        this.radius = radius;
        this.body = Matter.Bodies.circle(x,y,this.radius/2, paper_options);
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(position.x, position.y, this.radius, this.radius);
       /* imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);*/
    }
}
