class Chain
{
   constructor(bob,handle,world)
   {
       var options
       {
         bodyB:bob
         bodyA:handle
         stiffness:0.06
         length:15
       }

       this.chain = Constraint.create(options)
       World.add(world,this.chain)
   }
   display()
    {
        var bA = this.chain.bodyA.position
        var bB = this.chain.bodyB.position
       line(bA.x,bA.y,bB.x,bB.y)
    }
   
} 