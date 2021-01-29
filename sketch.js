const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
// var object, ball;
var ground;
var box1,box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    
    ground = new Ground(600,height,1200,20);
    box1 = new Box (700, 320, 70, 70);
    pig1 = new Pig (810, 320)
    box2 = new Box (920, 320, 70, 70);
    log1 = new Log (810,260, 300, Pi/2 );


    
    box3 = new Box (700, 240, 70, 70);
    pig2 = new Pig (810, 240);
    box4 = new Box (920, 240, 70, 70);
    log2 = new Log (810,180, 300, Pi/2 );

 log3 = new Log (760,120, 150, Pi/7 );
    box5 = new Box (810, 160, 70, 70);
    log4 = new Log (860,120, 150, Pi/7 );

    bird1 = new Bird (200, 50);

    // var ball_object ={
    //     restitution: 1
    // }


   

    // ball= Bodies.circle(200,100,20,ball_object);
    // World.add(world,ball);


    // console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    pig1.display();
    box2.display();
    log1.display();

    box3.display();
    pig2.display();
    box4.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird1.display();

   
    // ellipseMode(RADIUS);
    // ellipse(ball.position.x,ball.position.y,10,10);
}
