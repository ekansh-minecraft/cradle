class Bob
{
    constructor(x,y,radius,handleBody,world)
    {
        this.x = x
        this.y = y
        this.r = radius

        this.body = Bodies.rectangle(this.x,this.y,this.r,{isStactic:false})
        World.add(world,this.body)

        var offset = (x - handleBody.position.x)

        this.chain = new Chain(this.body,handleBody,offset, world)

    }
   display()
   {

    fill("purple")
    circle(this.x,this.y,this.r)
    this.chain.display()
    

   }
}
