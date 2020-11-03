class Dustbin {
    constructor(x, y, width, height){
        var dustbin_options ={
            friction:2,
            density:1,
            isStatic:true
        }
        this.image = loadImage("Images/dustbin.png");
        this.body = Bodies.rectangle(x,y,width,height, dustbin_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        push();
        rectMode(CENTER);
        fill("white");
        rect(0,0, this.width, this.height);
        imageMode(CENTER);
        this.image(this.image,1100,390,this.width,this.height);
        pop();
    }
}
