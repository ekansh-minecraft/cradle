class Roof
{
    constructor(x,y,width,height,world)
    {
        this.x = x
        this.y = y
        this.w = width
        this.h = height

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,{isStactic:true})
        World.add(world,this.body)

    }
  display()
  {
    
     rect(this.x,this.y,this.w,this.h)
  } 
}