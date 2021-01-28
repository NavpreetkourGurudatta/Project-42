class Drops{
  constructor(x,y){
     var options = {
         isStatic:false,
         restitution:0.3,
         friction : 0.1,
         density : 1.2
     } 
     this.body = Bodies.circle(x,y,2,options);
     this.r = 2
   World.add(world,this.body);
  }
display(){
  var pos = this.body.position;
  fill("blue") 
  ellipseMode(CENTER);
    ellipse(this.body,pos.x,pos.y,this.r,this.r);
}

}