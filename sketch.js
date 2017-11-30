/**
Diane Phan 
Final Project
**/


var topLights = [];
var xLights1 = 690; 

var bottomLights = [];
var xLights2 = 620; 

var song; 

function preload(){
    soundFormats('mp3', 'ogg');
    song = loadSound('shelter.mp3');
}


function setup() {
    createCanvas(1400, 700); 
    background(0); 
    
//    //gradient blue to pink
//    for(var i =0; i < height; i++){
//        stroke(i, 193, 255); 
//        line(0, i, width, i); 
//    }
//    
//    //gradient pink to purple
//    var r = 255; 
//    var g = 193; 
//    var b = 255; 
//    for(var i = 400; i < height; i++){
//        stroke(r, g, b, 100);  
//        line(0, i, width, i);
//        r -= 1;
//        g -= 0.9; 
//        b -= 0.2; 
//    }
    
    frameRate(20);    
    console.log("Setup"); 
    
    song = loadSound('shelter.mp3');
    
    //rectangle at the bottom for logo
    rect(0, height-80, width, height); 
    text("P O R T E R", width/2 - 100, height - 40); 
    text("R O B I N S O N", width/2 - 110, height - 30); 
    text("M A D E O N", width/2 + 100, height - 40); 
    ellipse(730, 630, 50); 
    
    
    //initialize array of top lights
    for (var i = 0; i < 4; i++){
        //gonna have 4 lights
        topLights[i] = new lights(xLights1, 20);
        topLights[i].drawLights(); 
        xLights1 = xLights1 + 30; 
    }
    
    //initialize array for bottom lights 
    for (var i =0; i < 7; i++){
        //gonna have 7 lights
        topLights[i] = new lights(xLights2, 600);
        topLights[i].drawLights(); 
        xLights2 = xLights2 + 40; 
        
        
        
    }
    
}


function mousePressed() {
//    if (song.isPlaying() ) { // .isPlaying() returns a boolean
//        song.stop();
//        background(255,0,0);
//    } 
//    else {
//        song.play();
//        background(0,255,0);
//    }
}

function draw() {
    //middle pillars 
    fill(80); 
    rect(width/2 - 60, height/2 -200, 60, 280); //left rect
    rect(width/2 + 60, height/2 -200, 60, 280); //right rect 
    
    //visual panels
    fill(200); 
    rect(width/4 - 60, height/2 -200, 280, 280); //left panel
    rect(width/4 + 540, height/2 -200, 280, 280); //right panel 

    
    var porter = new character(width/2 - 15, height/2 + 130, 50); 
    var hugo = new character(width/2 + 80, height/2 + 130, 50); 
    
    porter.drawMe(); 
    hugo.drawMe(); 
    
    
    
    
    
}


function character(xhead, yhead, radius){
    this.xhead = xhead;
    this.yhead = yhead;
    this.radius = radius; 
    
    this.drawMe = function(){
        noStroke();
        fill(250); 
        ellipse(this.xhead, this.yhead, this.radius);
        rect(this.xhead - this.radius +25 , this.yhead+25, this.radius, 60); 
    }    
}

function lights(x, y){
    this.x = x; 
    this.y = y; 
    
    this.drawLights = function(){
        fill(255, 254, 186); //pale yellow color 
        noStroke(); 
        ellipse(this.x, this.y, 10);     

        for (var i = 0; i < 50; i++){
            ellipse(this.x, this.y - (i*8), 10);
        }
    }
}