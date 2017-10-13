void setup() {
  size(401,401);
  f = createFont("Arial",16,true); // STEP 3 Create Font
  score=0;
  lives=5;
  x=0;
  counter = 0;
	EllipseX=width/2;
	EllipseY=height/2;
  
  }



void draw() {

  background(200);
 

 
 //Score-heading
  textFont(f,10);                 // STEP 4 Specify font to be used
  fill(255,0,0);                        // STEP 5 Specify font color 
  text("SCORE",0,height/2);  // STEP 6 Display Text NEEDS COUNTER
  
  //Numeric-score
  textFont(f,32);                 // STEP 4 Specify font to be used
  fill(255,0,0);                        // STEP 5 Specify font color 
  text(score,0,height/2+30);  // STEP 6 Display Text NEEDS COUNTER
  
  
  
   //Lives-heading
  textFont(f,10);                 // STEP 4 Specify font to be used
  fill(50,205,50);                        // STEP 5 Specify font color 
  text("LIVES",width-30,height/2);  // STEP 6 Display Text
  
  //Numeric-lives
  textFont(f,32);                 // STEP 4 Specify font to be used
  fill(50,205,50);                        // STEP 5 Specify font color 
  text(lives,width-30,height/2+30);  // STEP 6 Display Text

 
 ellipse(EllipseX, EllipseY, 20, 20);


}

void mouseReleased (){
	score=score+1;
}


void keyPressed() {
	if(key == CODED) {
		if (keyCode == RIGHT) {
		alert("right key!");
		  EllipseX= EllipseX+3;
		} 
		if (keyCode == LEFT) {
		  EllipseX= EllipseX-3;
		} 
}	
 
}






 
  
  
 

