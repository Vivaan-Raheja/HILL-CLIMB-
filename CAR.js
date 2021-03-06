class Car {
    constructor(x,y){
        //var options={isStatic:true}
        this.width=225;
        this.height=150;
        this.body=Bodies.rectangle(x,y,this.width,this.height,)

        this.image=loadImage("images/4.png")
        World.add(world,this.body)
    }
display(){
    var pos= this.body.position 
    var angle = this.body.angle
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();

}
}