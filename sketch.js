const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine

var umbrella
var maxDrops
function preload(){
 
}

function setup(){
   createCanvas(300,600);
   engine = Engine.create();
   world = engine.world;
umbrella = new Umbrella(120,200);

}

function draw(){
    Engine.run(engine);
    background('black');
    for(var i=0;i<maxDrops;i++){
        drops.push(new createDrops(random(0,400),random(0,400)))
    }
    drawSprites();
umbrella.display();
}   

