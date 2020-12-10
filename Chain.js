class Chain
{
    constructor(myBodyA,myBodyB){
      var options = {
         bodyA:myBodyA,
         bodyB:myBodyB,
         stiffness:0.05,
         length:15
      }
      this.chain = Constraint.create(options)
      World.add(world,this.chain)
    }
    display()
    {
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}
