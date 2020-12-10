class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    
    this.cx = x 
    this.cy = y
    this.cr = 50
  }
  
  display()
  {
    circle(this.cx,this.cy,this.cr)
  }
}
