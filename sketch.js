/**
Diane Phan 
Final Project




**/

var greenLeft = []; 
var greenRight = []; 

var green = true; 
var blankVis = true; 


var song; 
var vis1, vis2, vis3, vis4R, vis4L, sunsplosion, blackL, blackR, 
    fill1L, fill1R, fill2, fill3, fill4,
    visRin, visLeft, visRight, visEndM, visEndP, rin0L, rin0R, 
    rin1L, rin1R, rin2L, rin2R, rin3L, rin3R, rin4L, rin4R, 
    rin5, rin5aL, rin5aR, rin6L, rin6R, rin7L, rin7R, rin8L, rin8R, 
    rin8aL, rin8aR, rin8bL, rin8BR, rin9L, rin9R, rin9aL, rin9aR, 
    rin10L, rin10R, rin11L, rin11R, rin11aL, rin11aR, rin12L, rin12R, 
    rin12aL, rin12aR, rin13L, rin13R, rin14L, rin14R, rin15L, rin15R, 
    rin16L, rin16R, rin17L, rin17R, shelter, 
    shelSymb, hugo, porter;

function preload(){
    soundFormats('mp3', 'ogg');
    song = loadSound('shelter.mp3');
    //dimensions for visual panels 278 x 282
    vis1 = loadImage("images/vis1.jpg");
    vis2 = loadImage("images/vis2.jpg");
    vis3 = loadImage("images/vis3.png");
    vis4L = loadImage("images/vis4L.png"); 
    vis4R = loadImage("images/vis4R.png"); 
    visRin = loadImage("images/rinbg.jpg");
    visLeft = loadImage("images/vis5L.png");
    visRight = loadImage("images/vis5R.png");
    visEndM = loadImage("images/madeon.png");
    visEndP = loadImage("images/porter.png"); 
    shelSymb = loadImage("images/shelter.png"); //73x73
    rin0L = loadImage ("images/rin0L.png");
    rin0R = loadImage ("images/rin0R.png");
    rin1L = loadImage("images/rin1L.png"); 
    rin1R = loadImage("images/rin1R.png"); 
    rin2L = loadImage("images/rin2L.png"); 
    rin2R = loadImage("images/rin2R.png"); 
    rin3L = loadImage("images/rin3L.png"); 
    rin3R = loadImage("images/rin3R.png"); 
    rin4L = loadImage("images/rin4L.png"); 
    rin4R = loadImage("images/rin4R.png"); 
    sunsplosion = loadImage("images/sunexplosion.png"); 
    blackL = loadImage("images/blackbgL.png");
    blackR = loadImage("images/blackbgR.png");
    fill1L = loadImage("images/filler1L.png");
    fill1R = loadImage("images/filler1R.png");
    fill2 = loadImage("images/fill2.png");
    fill3 = loadImage("images/fill3.png");
    fill4 = loadImage("images/fill4.png");
    hugo = loadImage("images/hugo.png");
    porter = loadImage("images/porterr.png");
    rin5 = loadImage("images/rin5.png");
    rin5aL = loadImage("images/rin5aL.png");
    rin5aR = loadImage("images/rin5aR.png");
    rin6L = loadImage("images/rin6L.png");
    rin6R = loadImage("images/rin6R.png");
    rin7L = loadImage("images/rin7L.png");
    rin7R = loadImage("images/rin7R.png");
    rin8L = loadImage("images/rin8L.png");
    rin8R = loadImage("images/rin8R.png");
    rin8aL = loadImage("images/rin8aL.png");
    rin8aR = loadImage("images/rin8aR.png");
    rin8bL = loadImage("images/rin8bL.png");
    rin8bR = loadImage("images/rin8bR.png");
    rin9L = loadImage("images/rin9L.png");
    rin9R = loadImage("images/rin9R.png");
    rin9aL = loadImage("images/rin9aL.png");
    rin9aR = loadImage("images/rin9aR.png");
    rin10L = loadImage("images/rin10L.png");
    rin10R = loadImage("images/rin10R.png");
    rin11L = loadImage("images/rin11L.png");
    rin11R = loadImage("images/rin11R.png");
    rin11aL = loadImage("images/rin11aL.png");
    rin11aR = loadImage("images/rin11aR.png");
    rin12L = loadImage("images/rin12L.png");
    rin12R = loadImage("images/rin12R.png");
    rin12aL = loadImage("images/rin12aL.png");
    rin12aR = loadImage("images/rin12aR.png");
    rin13L = loadImage("images/rin13L.png");
    rin13R = loadImage("images/rin13R.png");
    rin14L = loadImage("images/rin14L.png");
    rin14R = loadImage("images/rin14R.png");
    rin15L = loadImage("images/rin15L.png");
    rin15R = loadImage("images/rin15R.png");
    rin16L = loadImage("images/rin16L.png");
    rin16R = loadImage("images/rin16R.png");
    rin17L = loadImage("images/rin17L.png");
    rin17R = loadImage("images/rin17R.png");
    shelter = loadImage("images/sheltersymbol.png");
}



function setup() {
    createCanvas(1400, 700); 
    background(0); 
    
    frameRate(15);    
    console.log("Setup"); 
    
    song = loadSound('shelter.mp3');
    
    //green lights in the background
    for (var i = 0; i < 90; i++){
        greenLeft[i] = new rain(random(i*3 + 10), random(620, height/2), 4, 10, 2, 255);
        greenRight[i] = new rain(random(1200, 1400), random(620, height/2), 4, 10, 2, 255);
    }
}


function draw() {
    background(0); 
        
    fill(255); 
    //rectangle at the bottom for logo
    {
    rect(0, height-80, width, height); 
    stroke(0); 
    fill(0); 
    text("P O R T E R", width/2 - 100, height - 40); 
    text("R O B I N S O N", width/2 - 110, height - 30); 
    text("M A D E O N", width/2 + 100, height - 30); 
    image(shelSymb, 702, 630);
    }
    //middle pillars 
    {
    fill(80); 
    rect(width/2 - 60, height/2 -200, 60, 280); //left rect
    rect(width/2 + 60, height/2 -200, 60, 280); //right rect 
    }
    

    if (blankVis){
        fill(200); 
        
        //visual panels
//        rect(width/4 - 60, height/2 - 200, 280, 280); //left panel
//        rect(width/4 + 540, height/2 - 200, 280, 280); //right panel 

//        if((frameCount > 2 && frameCount < 288)){
//            text("its da beginning", 291, 150);    
//        }
       if((frameCount > 0 && frameCount < 288)
          ){    //sheltersymbol 
            image(shelter, 291, 150); 
            image(shelter, 891, 150);
        }
        if((frameCount > 289 && frameCount < 320)
           || (frameCount > 411 && frameCount < 440)
           || (frameCount > 1300 && frameCount < 1330)
           || (frameCount > 1421 && frameCount < 1450)
          ){    //ball holder
            image(vis1, 291, 150);
            image(vis1, 891, 150);
        }
        if((frameCount > 321 && frameCount < 350)
            || (frameCount > 441 && frameCount < 470)
           || (frameCount > 1331 && frameCount < 1360)
           || (frameCount > 1451 && frameCount < 1480)   
          ){    //crystal
            image(vis2, 291, 150);         
            image(vis2, 891, 150);
        }           
        if((frameCount > 351 && frameCount < 380)
            || (frameCount > 471 && frameCount < 500)
            || (frameCount > 1361 && frameCount < 1390)
            || (frameCount > 1481 && frameCount < 1510)
          ){    //baymax looking thing 
            image(vis3, 291, 150); 
            image(vis3, 891, 150);
        }
        if((frameCount > 381 && frameCount < 410)
           || (frameCount > 501 && frameCount < 530)
           || (frameCount > 1541 && frameCount < 1570)
           || (frameCount > 1391 && frameCount < 1420)
          ){    //water
            image(vis4L, 291, 150); 
            image(vis4R, 891, 150);
        }
        if((frameCount > 531 && frameCount < 560)
          ){    //character 
            image(visLeft, 291, 150); 
            image(visRight, 891, 150);
        }
        if((frameCount > 561 && frameCount < 590)
           || (frameCount > 1571 && frameCount < 1600)

          ){
            image(sunsplosion, 291, 150); 
            image(sunsplosion, 891, 150);
        }
        if((frameCount > 591 && frameCount < 630)
           || (frameCount > 1511 && frameCount < 1540)
           || (frameCount > 1601 && frameCount < 1630)
          ){
            image(blackL, 291, 150); 
            image(blackR, 891, 150);
        }

        //////////////////////////////
        //      RIN VISUALS         //
        //////////////////////////////
        
        //600 have u notice ive been gone 
        if((frameCount > 631 && frameCount < 670)){
            image(rin0L, 291, 150); 
            image(rin0R, 891, 150);
        }
        if((frameCount > 671 && frameCount < 710)
           || (frameCount > 1631 && frameCount < 1660)
          ){ //with the swing 
            image(fill4, 291, 150); 
            image(fill4, 891, 150);
        }      
        if((frameCount > 711 && frameCount < 750)
           || (frameCount > 1661 && frameCount < 1690)
          ){ //standing on crystals             
            image(fill2, 291, 150); 
            image(fill2, 891, 150);
        }
        if((frameCount > 751 && frameCount < 780)
           || (frameCount > 1511 && frameCount < 1540)

//add this maybe????????????????
//           || (frameCount > 1691 && frameCount < 1720)
          ){ //crystals hanging   
            image(fill3, 291, 150); 
            image(fill3, 891, 150);
        }
        if((frameCount > 781 && frameCount < 819)
          ){  //sitting on crystal dark sky 
            image(fill1L, 291, 150); 
            image(fill1R, 891, 150);
        }
            //830 oh its a long way forward... 
        if((frameCount > 820 && frameCount < 900)){
            image(visRin, 291, 150); 
            image(visRin, 891, 150);
        }
        if((frameCount > 901 && frameCount < 930)){ //rins hair 
            image(rin1L, 291, 150); 
            image(rin1R, 891, 150);            
        }
        //give them shelter like u done for me
        if((frameCount > 931 && frameCount < 960)){
            image(rin2L, 291, 150); 
            image(rin2R, 891, 150);            
        }
        if((frameCount > 961 && frameCount < 990)){
            image(rin3L, 291, 150); 
            image(rin3R, 891, 150);            
        }
        //1010 i know im not alone 
        if((frameCount > 991 && frameCount < 1020)){ //rin looking at screen 
            image(rin4L, 291, 150); 
            image(rin4R, 891, 150);            
        }
        if((frameCount > 1021 && frameCount < 1050)){ //rin flashback 
            image(rin5, 291, 150); 
            image(rin5, 891, 150);            
        }
        if((frameCount > 1051 && frameCount < 1080)){ //rin and young rin encounter 
            image(rin5aL, 291, 150); 
            image(rin5aR, 891, 150);            
        }
        if((frameCount > 1081 && frameCount < 1110)){ //rin in a ring 
            image(rin6L, 291, 150); 
            image(rin6R, 891, 150);            
        }
        if((frameCount > 1111 && frameCount < 1140)){ //rin falling 
            image(rin7L, 291, 150); 
            image(rin7R, 891, 150);            
        }
        if((frameCount > 1141 && frameCount < 1170)){ //rin memories 
            image(rin8L, 291, 150); 
            image(rin8R, 891, 150);            
        }
        if((frameCount > 1171 && frameCount < 1200)){ //young rin drawing
            image(rin8aL, 291, 150); 
            image(rin8aR, 891, 150);            
        }
       if((frameCount > 1201 && frameCount < 1230)){ //rin memories
            image(rin8L, 291, 150); 
            image(rin8R, 891, 150);
        }
        if((frameCount > 1231 && frameCount < 1260)){ //christmas gift
            image(rin8bL, 291, 150); 
            image(rin8bR, 891, 150);            
        }
        if((frameCount > 1261 && frameCount < 1299)){ //rin memories
            image(rin8L, 291, 150); 
            image(rin8R, 891, 150);
        }     
        
        //should change the lighting so theres no lighting 
           //1700 when im older ill be silent beside u
        if((frameCount > 1700 && frameCount < 1800)
          ){
            image(rin10L, 291, 150); 
            image(rin10R, 891, 150);        
        }
        if((frameCount > 1801 && frameCount < 1900)
          ){    //rin peeping 
            image(rin9L, 291, 150); 
            image(rin9R, 891, 150);        
        }        
        //1990 its a long way forward so trust  in me 
        if((frameCount > 1901 && frameCount < 2000)
          ){    //rins dad
            image(rin9aL, 291, 150); 
            image(rin9aR, 891, 150);        
        }
        if((frameCount > 2001 && frameCount < 2100)
          ){    //rin running to her dad 
            image(rin11L, 291, 150); 
            image(rin11R, 891, 150);        
        }
        if((frameCount > 2101 && frameCount < 2200)
          ){    //rin crying 
            image(rin11aL, 291, 150); 
            image(rin11aR, 891, 150);        
        }
        if((frameCount > 2201 && frameCount < 2300) //ill give them shelter 
          ){    //putting her in the spaceship 
            image(rin12L, 291, 150); 
            image(rin12R, 891, 150);        
        }
        //2300 ay i will ay chorus 
       if((frameCount > 2301 && frameCount < 2400)  
          ){    //rin in a ring
            image(rin6L, 291, 150); 
            image(rin6R, 891, 150);     
       }
        if((frameCount > 2401 && frameCount < 2500)  
          ){     //rin memories 
            image(rin8L, 291, 150); 
            image(rin8R, 891, 150);         
        }
        //2550 chimes leading up so just more visuals i guess 
        if((frameCount > 2501 && frameCount < 2600)  
          ){    //rin reaching out to dad 
            image(rin12aL, 291, 150); 
            image(rin12aR, 891, 150);        
        }         
        //2900 - 3099 ending sad visuals of her crying ?
        if((frameCount > 2601 && frameCount < 2700)  
          ){    //dad looking up 
            image(rin13L, 291, 150); 
            image(rin13R, 891, 150);        
        }
        if((frameCount > 2701 && frameCount < 2800) 
          ){    //young rin inside ship
            image(rin14L, 291, 150); 
            image(rin14R, 891, 150);        
        }
        if((frameCount > 2801 && frameCount < 2900)  
          ){    //older rin looking at screens  
            image(rin15L, 291, 150); 
            image(rin15R, 891, 150);        
        }
        if((frameCount > 2901 && frameCount < 3000)  
          ){    //crying in grass  
            image(rin16L, 291, 150); 
            image(rin16R, 891, 150);        
        }
       if((frameCount > 3001 && frameCount < 3100)  
          ){    //rin  inside ship  
            image(rin17L, 291, 150); 
            image(rin17R, 891, 150);        
        }
           //3100 the goodbye to a world text         
        if((frameCount > 3101)){
            image(visEndM, 291, 150); 
            image(visEndP, 891, 150);
        }
    }

    image(hugo, 661, 500); 
    image(porter, 754, 500);   
           
    //audience 
//    {
//    var porter = new character(width/2 - 15, height/2 + 130, 50); 
//    var hugo = new character(width/2 + 80, height/2 + 130, 50); 
//    porter.drawMe(); 
//    hugo.drawMe(); 
//    }
    
    //spotlight effect 
    if(frameCount > 0 && frameCount < 1700){
    //lights go away at the emotional part 
        
        for(var i =0; i < height/2 - 20; i++){
        if(frameCount < 289){
            stroke(0, 255, i); //green
            line(580, height-80, 750, 150 - i); 
            line(885, height-80, 750, 150 - i);  
            line(400, height-80, 750, 150 - i); 
            line(1050, height-80, 750, 150 - i); 
        }
        if(frameCount > 1150){
            //light pink color has a cool effect 
            stroke(i, random(255), random(255)); 
            line(580, height-80, 750, 150 - i); 
            line(885, height-80, 750, 150 - i);  
            line(400, height-80, 750, 150 - i); 
            line(1050, height-80, 750, 150 - i); 
        }
        if((frameCount > 290 && frameCount < 1149) 
          ){
            stroke(i, 193, 255); //bluepurple
            line(580, height-80, 750, 150 - i); 
            line(885, height-80, 750, 150 - i);  
            line(400, height-80, 750, 150 - i); 
            line(1050, height-80, 750, 150 - i); 
            }
        }
    }
    
    if(frameCount > 3100){
        for(var i =0; i < height/2 - 20; i++){
            stroke(i, 193, 255); //bluepurple
            line(580, height-80, 750, 150 - i); 
            line(885, height-80, 750, 150 - i);  
            line(400, height-80, 750, 150 - i); 
            line(1050, height-80, 750, 150 - i); 
        }
    }
    
    //to count frames 
//    text(frameCount, width/2+25, height/2); 
    
    //white flash on screen should i add one at 1200 and 1400 too? 
    if ((frameCount > 286 && frameCount < 288)
       || (frameCount > 1170 && frameCount < 1172)){
       //|| (frameCount > 1500 && framecount < 1502)){  
        background(255); 
    }
    
    if(green){    //green circles floating up in the background   
        for (var i = 0; i < greenLeft.length; i++){
                greenLeft[i].drawRain(); 
                greenLeft[i].pourRain(); 
                greenLeft[i].resetPourLeft();             
            }
        for (var i = 0; i < greenRight.length; i++){
                greenRight[i].drawRain(); 
                greenRight[i].pourRain(); 
                greenRight[i].resetPourRight();               
            }
    }



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

function rain(x, y, rw, rl, speed, opacity){
    this.x = x; 
    this.y = y; 
    this.rw = rw; //radius width
    this.rl = rl; //radius length
    //direction of rain 
    this.speed = speed; 
    this.opacity = opacity; 
    this.lowerOpacity = opacity -1.2;
    
    this.drawRain = function(){
        strokeWeight(0.1); 
        
        //do rainbow for the flashbacks part
        
        if(frameCount < 282){
            fill(0, 255, 102, 175); //green 
        }
        if (frameCount > 283 && frameCount < 1050){ 
            fill(255, 141, 248, 175);  //pink
        }
        if (frameCount > 1051 && frameCount < 1700){ 
            fill(247, 255, 0, 255);  //yellow
        }
        if(frameCount > 1701 && frameCount < 3099){
            //emotional part
            fill(0, 255, 247, 255); //cyan  
        }
        if (frameCount > 3100){
            fill(random(255), random(255), random(255)); //idk this the ending tho 
        }
        ellipse(this.x, this.y, this.rw, this.rl);    
    }
    
    this.pourRain = function(){
        this.y -= this.speed;   
    }
    
    this.resetPourLeft = function(){
        if(this.y < 0 - this.rw * 0.01){
            this.x = random(1, 260); 
            this.y = random(620, height/2); 
        }      
    }
    this.resetPourRight = function(){
        if(this.y < 0 - this.rw * 0.01){
            this.x = random(1200, 1400); 
            this.y = random(620, height/2); 
        }      
    }
}