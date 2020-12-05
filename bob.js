class Bob
{
    constructor(x,y,radius,world)
    {
        this.x = x
        this.y = y
        this.r = radius


        this.bob = Bodies.rectangle(this.x,this.y,this.r,{isStactic:true})
        World.add(world,this.bob)
    }
   display()
   {

    fill("purple")
    circle(this.x,this.y,this.r)

   }
}
