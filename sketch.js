const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var thunder,thunder1,thunder2,thunder3,thunder4;
var engine, world;
var drops = [];
var maxDrops = 100;
var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(400,700);
   umbrella = new Umbrella(200,500);
   if(frameCount%150 === 0){
   for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0,400), random(0,400)));
}
   }
    
}

function draw(){
    Engine.update(engine);
    background(0);
    
    if(frameCount%70 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(40,340),random(50,70),10,10);

        var randomNumber = random(1,4); 
        var imageSelect = Math.round(randomNumber);

        switch(imageSelect){
            case 1: thunder.addImage(thunder1)
                break;
            case 2: thunder.addImage(thunder2)
                break;
            case 3: thunder.addImage(thunder3)
                break;
            case 4: thunder.addImage(thunder4)
                break;
                default: break;
        }
        
        
        /*if(imageSelect === 1){
            console.log(randomNumber,imageSelect);
            thunder.addImage(thunder1);
        }else if(imageSelect === 2){
            //console.log(randomNumber,imageSelect);
            thunder.addImage(thunder2);
        }else if(imageSelect === 3){
            thunder.addImage(thunder3);
        }else if(imageSelect === 4){
            thunder.addImage(thunder4);
        }*/
    
        thunder.scale = random(0.2,0.5)
    }
    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }
   
    umbrella.display();
    for(var i = 0; i<maxDrops ; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }  
    
    drawSprites();
}   

