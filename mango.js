class Mango{
    constructor(x,y,r){
        var option={
            isStatic:true,
            restitution:0,
            friction:1,

        }
        this.r=r
        this.x=x
        this.y=y
        this.image=loadImage("mango.png")
        this.body=Bodies.circle(this.x,this.y,this.r,option)
        World.add(world,this.body)
        

    }
    
    display(){
        
        //translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.x,this.y,this.r,this.r);
        
        }
    }
        
    
