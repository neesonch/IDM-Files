



void setup (){

	f = createFont("Arial",16,true); // STEP 3 Create Font
	score=0;
	lives=5;
	x=0;
	bonusLIFE=false;
	HIT=false;
	topHit=true;
	bottomHit=false;
  
  img = loadImage("gnop.jpg");
  
  COLOUR=200;

	size(401, 401); 
	background(200); 
	//frameRate (10);
	
	// Variables
	
	recWid = width/5;
	recHig = height/20;
	
	// Top rectangle's Y location is always 0; always at top of screen. Inverse for lower rectangle.
	topRecY = 0;
	lowRecY = (height-(recHig+1));
	
	// Centres starting X position of rectangles
	topRecX = (width/2)-(recWid/2);
	lowRecX = (width/2)-(recWid/2);

	
	// Starting directions of each rectangle's movement
	topVector = 'left';
	lowVector = 'right';
	
	// Separate variables needed for speed of upper and lower rectangles
	topSpeed = 1;
	lowSpeed = 1;
	
	// Starting position, vector, and speed of ball
	ballX = (width/2);
	ballY = (height/2);
	ballDiameter = (width/28);
	ballVector = 'up';
	ballSpeed = 1;
	}

	
function checkCollision () {
	// top paddle
	if (ballX > topRecX && ballX < (topRecX + recWid) && ballY < (topRecY + (ballDiameter*1.9))){
		//console.log ('Hit!')	DEBUG
		HIT = true;
		ballVector = 'down';
		ballSpeed += 0.1;		
		if (topHit==true){
			score=score+1;
			// control variables to stop multi-hits - toggle every time the ball hits top or bottom paddle
			topHit=false;
			bottomHit=true;
			}

	}
	// lower paddle
	if (ballX > lowRecX && ballX < (lowRecX + recWid) && ballY > (lowRecY-(ballDiameter/2))){
		//console.log ('Hit!')	DEBUG
		HIT = true;
		ballVector = 'up';
		ballSpeed += 0.1;
		if (bottomHit==true ){
			score=score+1;
			bottomHit=false;
			topHit=true;
			}
	}
	}
	
function checkMiss () {

		if (ballY < 2) {
	console.log ('Miss');
	ballVector = 'down';
	lives=lives-1;
	// screen briefly flashes red when player loses a life
	background(255,0,0);
	}
	
	if (ballY > (height)) {
	console.log ('Miss');
	ballVector = 'up';
	lives=lives-1;
	background(255,0,0);

	}
	
	}
	

function ballMovement () {
	ellipse (ballX, ballY, ballDiameter, ballDiameter);
	
	// Move ball up
	if (ballY > 0 && ballVector == 'up'){
	ballY -= ballSpeed;
	}
	
	
	// Move ball down
	if (ballY < height && ballVector == 'down'){
	ballY += ballSpeed;
	}
	
	// Move ball left
	if (mouseX < ballX) {
	ballX -=(ballSpeed*0.75);
	}
	
	// Move ball right
	if (mouseX > ballX) {
	ballX += (ballSpeed*0.75);
	}
	

	}
	
function rectMovement () {
	rect(topRecX, topRecY, recWid, recHig);
	rect(lowRecX, lowRecY, recWid, recHig);
	
	// Move top rectangle to left
	if ( topRecX > 0 && topVector == 'left') {
		topRecX -= topSpeed;
	}
	
	// Move lower rectangle to left
	if ( lowRecX > 0 && lowVector == 'left') {
		lowRecX -= lowSpeed;
	}
	
	// Flip direction and increase speed of top rectangle
	
	if ( topRecX < 1) {
	topVector = 'right';
	topSpeed += 0.1;
	//topRecY += (recHig/3);
	}
	
	// Flip direction and increase speed of lower rectangle
	
	if ( lowRecX < 1) {
	lowVector = 'right';
	lowSpeed += 0.1;
	}
	
	// Move top rectangle to right
	if (topRecX < (width-recWid) && topVector == 'right') {
	topRecX += topSpeed;
	}
	
	// Move lower rectangle to right
	if (lowRecX < (width-recWid) && lowVector == 'right') {
	lowRecX += lowSpeed;
	}
	
	// Flip direction and increase speed of top rectangle
	
	if ( topRecX > width-recWid) {
	topVector = 'left';
	topSpeed += 0.1;
	//topRecY += (recHig/3);
	}
	
	// Flip direction and increase speed of lower rectangle
	
	if ( lowRecX > width-recWid) {
	lowVector = 'left';
	lowSpeed += 0.1;
	}
	
	}
	
function bonusLife () {
	if (score!=0 && score%10==0&& HIT==true){  
		//alert ('Life added!');	DEBUG
		lives=lives+1;
		HIT=false;
	}
}


void draw () {
	background(255); 
	
	image(img, width/2, height/2);
	
	//Score-heading
  textFont(f,10);                 // STEP 4 Specify font to be used
  fill(255,0,0);                        // STEP 5 Specify font color 
  textAlign(LEFT);
  text("SCORE",2,height/2);  // STEP 6 Display Text NEEDS COUNTER
  
  //Numeric-score
  textFont(f,32);                 // STEP 4 Specify font to be used
  fill(255,0,0);                        // STEP 5 Specify font color 
  textAlign(LEFT);
  text(score,2,height/2+30);  // STEP 6 Display Text NEEDS COUNTER
  
  
  
   //Lives-heading
  textFont(f,10);                 // STEP 4 Specify font to be used
  fill(50,205,50);                        // STEP 5 Specify font color 
  textAlign(RIGHT);
  text("LIVES",width-2,height/2);  // STEP 6 Display Text
  
  //Numeric-lives
  textFont(f,32);                 // STEP 4 Specify font to be used
  fill(50,205,50);                        // STEP 5 Specify font color 
  textAlign(RIGHT);
  text(lives,width-2,height/2+30);  // STEP 6 Display Text
	
	
if (lives!=0){
	rectMovement();	
	ballMovement();
	checkCollision ();
	checkMiss ();
	bonusLife();
	if (score!=0 && score%10==0){
		textFont(f,32);                
		fill(255,0,0);                       
		textAlign(CENTER);
		text("BONUS LIFE!",width/2,height/2);
		setTimeout(function(){s.stop();},100);
		}	
	}
	
	if (lives == 0) {
	textFont(f,32);                
	fill(255,0,0);                       
	textAlign(CENTER);
	text("GAME OVER",width/2,height/2);
	setTimeout(function(){s.stop();},100);
	}
	
}