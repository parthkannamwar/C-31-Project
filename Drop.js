class Drop
{
    constructor(x,y)
    {
        var boptions=
        {
            restitution:0.1,
            friction:0.1,
            density:10
        }

        this.body=Bodies.circle(x,y,10,boptions)
        this.x=x
        this.y=y
        this.image=loadImage("drop.png")

    World.add(engine.world,this.body);
    }

    display()
    {
        var pos=this.body.position
        
        image(this.image,pos.x,pos.y,10,10)
    }

    update()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,400)})
           // this.body.speed=this.body.speed-50
        }
    }
}