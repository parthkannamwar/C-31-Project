class Umbrella
{
    constructor(x,y,radius)
    {
        var boptions=
        {
            isStatic: true
        }

        this.body=Bodies.circle(x,y,radius,boptions)       
        this.radius=radius;
        

    World.add(engine.world,this.body);
    }



    
}