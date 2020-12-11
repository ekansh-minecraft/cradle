class Chain
{
   constructor(firstBody, endBody, offsetX, world)
   {
     
       var options = {
         bodyA:firstBody,
         bodyB:endBody,
         stiffness:0.06,
         length:15,
         pointB: {x:offsetX}
       }

       this.startBody = firstBody
       this.endBody = endBody
       this.offsetX = offsetX
       this.chain = Constraint.create(options)
       World.add(world,this.chain)

   }
   display()
    {
      
        var bA = this.startBody.position
        var bB = this.endBody.position

        fill("black")
       line(bA.x,bA.y,bB.x + this.offsetX,bB.y)

    }
  }
 