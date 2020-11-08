class Dustbin {
    constructor(x, y, width, height){
        var dustbin_options ={
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
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.width,this.height);
    }
}
