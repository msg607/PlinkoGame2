var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos1 = [];
var plinkos2 = [];
var plinkos3= [];
var plinkos4= [];
var divisions=[];
var divisionHeight=300;
var score =0;
var particle;
var count=0;
var gameState= "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k+ 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));}


    for (var j = 75; j <=width; j=j+50) 
    { plinkos1.push(new Plinko(j,75));}

    for (var j = 50; j <=width-10; j=j+50) 
    { plinkos2.push(new Plinko(j,175));}

     for (var j = 75; j <=width; j=j+50) 
    {plinkos3.push(new Plinko(j,275));}

     for (var j = 50; j <=width-10; j=j+50) 
    {plinkos4.push(new Plinko(j,375));}

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  ground.display();

  text("500",20,600);
  text("500",100,600);
  text("500",180,600);
  text("500",260,600);
  text("100",340,600);
  text("100",420,600);
  text("100",500,600);
  text("200",580,600);
  text("200",660,600);
  text("200",740,600);

  
   for (var i = 0; i < plinkos1.length; i++) {
     
     plinkos1[i].display();}

  for (var i = 0; i < plinkos2.length; i++) {
     
    plinkos2[i].display();
  }

  for (var i = 0; i < plinkos3.length; i++) {
     
    plinkos3[i].display();}

  for (var i = 0; i < plinkos4.length; i++) {
     
      plinkos4[i].display();}

 // if(frameCount%60===0){
  //   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  if(particle!=null){
    particle.display();

      if(particle.body.position.y>760){

        if(particle.body.position.x<300){

          score=score+500;
          particle=null;
          if(count>=5) gameState="end";
      }}}

   if(particle!=null){
      particle.display();
          if(particle.body.position.y>760){
  
          if(301<particle.body.position.x<600){
  
            score=score+100;
            particle=null;
            if(count>=5) gameState="end";
        }}}

    if(particle!=null){
          particle.display();
      
         if(particle.body.position.y>760){
             if(601<particle.body.position.x<900){
               score=score+200;
               particle=null;
               if(count>=5) gameState="end";
          }}}

    if(count===5){
      textSize(48);
      fill("pink");
      text("Game Over", 200,450)
    }}
    


function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10,10);
  }
}