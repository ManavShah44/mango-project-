class SlingShot {
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.8,
            length:50
        }
        this.point2=point2
        this.slingshot=Matter.Constraint.create(options)
        World.add(world,this.slingshot)
    
    }
    display(){
        if(this.slingshot.bodyA){
            
        var point1= this.slingshot.bodyA.position
        var point2=this.point2
        line(point1.x,point1.y,point2.x,point2.y)
        }


    }
    fly(){
        this.slingshot.bodyA=null
    }
}