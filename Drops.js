class Drops{
    constructor(x,y){
        var options={
			isStatic:false,
            friction: 0.001
        }

        this.x=x;
        this.y=y;
        this.r=7.5;
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
    }
            
            updateY(){
                if(this.body.position.y>height){
                    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
                }
            }
        
            showDrop(){
                fill("blue");
                ellipseMode(CENTER)
                ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
        
            }
        
        }



