class Umbrella{
    constuctor(x,y){
        var options={
isStatic:true,
        }
this.body = Bodies.circle(x,y,10,options);
this.r = 10
this.image = loadImage('Walking Frame/walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking7.png,walking_8.png');
World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("purple") 
        imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.r,this.r);
      }
      
    }