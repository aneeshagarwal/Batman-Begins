class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        
        this.x=x;
        this.y=y;
        this.r=120;
        this.image = loadImage("walking_1.png");
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image, pos.x, pos.y+70,300,300);
    }
}