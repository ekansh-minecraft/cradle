class Ground
{
    constructor(x,y,width,height,world)
    {
        this.x = x
        this.y = y
        this.w = width
        this.h = height

        this.ground = Bodies.rectangle(width/2 - 150,height/2 - 100,this.w,30,{isStactic:true})
        World.add(world,this.ground)

    }
  display()
  {
    
     rect(this.x,this.y,this.w,this.h)
  }
}