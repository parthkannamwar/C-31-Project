const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var drop1,drop2,maxDrops=100,drops=[],alldrops,dropimg,ground,man,manimg,thunders

function preload()
{
    manimg=loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png",
    "walking_4.png","walking_3.png","walking_2.png","walking_1.png")
    thunder1=loadImage("1.png")
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thunder4=loadImage("4.png")


}

function setup()
{
   createCanvas(600,800)
   engine = Engine.create();
   world = engine.world;

   man= createSprite(width/2,600)
   man.addAnimation("walking man",manimg); 
   man.scale=0.5
   
   
  

   drop5=new Umbrella(310,540,90)



if(frameCount<2)
{
    for(var i=0;i<100;i++)
    {
        drops.push(new Drop(random(0,600),random(0,400)))
    }
}

    Engine.run(engine);

    var render = Render.create({ 
        element: document.body, 
        engine: engine, 
        options: { 
            width: width, 
            height: height, 
            wireframes: false } 
                    }
                    )
     Render.run(render);
}



function draw()
{
    background(0)


    rand = Math.round(random(1,4))

    if(frameCount%80===0)
    {
        thunderCreatedFrame=frameCount;

        thunder=createSprite(random(10,370),random(10,30),10,10)

        switch(rand)
        {
            case 1:thunder.addImage("thunder",thunder1)
                   thunder.lifetime=50
                   break;
            case 2:thunder.addImage("thunder",thunder2)
                   thunder.lifetime=50
                   break;
            case 3:thunder.addImage("thunder",thunder3)
                   thunder.lifetime=50
                   break;
            case 4:thunder.addImage("thunder",thunder4)
                   thunder.lifetime=50
                   break;
        }

        thunder.scale = random(0.3,1.0)    }





for(i=0;i<100;i++)
{
    drops[i].display();
    drops[i].update();
}



drawSprites();

}
