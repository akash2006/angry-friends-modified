class Star{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,86,86);
        this.image = loadImage("pics/star.png");
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y);
    }
}