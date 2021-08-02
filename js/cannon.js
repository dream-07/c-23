class Cannon {
    constructor(x,y,width,height,angle){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.angle=angle
    }
display(){
    fill("gray");
    
    push();
    translate(this.x,this.y)
    rotate (this.angle) ;
    rect(-30,-100,this.width,this.height)
    pop ();
    arc(this.x-180,this.y-290,180,230,PI,TWO_PI)
}



}