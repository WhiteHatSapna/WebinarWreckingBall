const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

//const MouseConstraint = Matter.MouseConstraint;

var myEngine, myWorld;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,ball,ground,rope; 
//var mConstraint;

function preload()
{
  bkImage = loadImage("background.png");
}

function setup(){
    canvas = createCanvas(800,450);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600,height,1200,20)

    //Row1
    box1 = new Box(300,430,40,40);
    box2 = new Box(300,390,40,40);
    box3 = new Box(300,350,40,40);
    box4 = new Box(300,310,40,40);
    box5 = new Box(300,270,40,40);
    box6 = new Box(300,230,40,40);



    //Row2
    box7 = new Box(360,430,40,40);
    box8 = new Box(360,390,40,40);
    box9 = new Box(360,350,40,40);
    box10 = new Box(360,310,40,40);
    box11 = new Box(360,270,40,40); 

    //Row3
    box12 = new Box(420,430,40,40);
    box13 = new Box(420,410,40,40);
    box14 = new Box(420,390,40,40);
    
    ball = new Ball(0,0);

    strand = new Strand(ball.body, { x: 350, y: 30 });

}

function draw(){
    background(bkImage);
    Engine.update(myEngine);

    ground.display();

    strokeWeight(4);
    stroke("white");

    //display row1 boxes
    fill("lightgreen");
    box1.display();
    fill("lightblue");
    box2.display();
    fill("lightgreen");
    box3.display();
    fill("lightblue");
    box4.display();
    fill("lightgreen");
    box5.display();
    fill("lightblue");
    box6.display();

    //display row2 boxes
    fill("lightgreen");
    box7.display();
    fill("lightblue");
    box8.display();
    fill("lightgreen");
    box9.display();
    fill("lightblue");
    box10.display();
    fill("lightgreen");
    box11.display();

    //display row3 boxes
    fill("lightgreen");
    box12.display();
    fill("lightblue");
    box13.display();
    fill("lightgreen");
    box14.display();

    ball.display();
   
    strand.display();


}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
