

var width = window.innerWidth*0.8;
var height = window.innerHeight*0.8;
var centreX = width/2;
var centreY = height/2;
// variable used for timing events
var frameCount = 1;
var pause = false;
// number of steps (i.e. frames) after which bureaucrat changes direction
var stepInter = 150;
// flag whether maximum active bureaucrats limit has been reached
var limitReached = false;
var avatarDiam = height/50;
var gameMode = 'Expansion';
// variable to control whether IDs are shown above dots
var printID = false;


// initializing first and second bureacrats
bCrat0 = {ID: 0, locX: centreX, locY: centreY, avatarDiam: avatarDiam, colour: #080808, direction: 'left', stepCount: 0, changeDir: stepInter }; 
bCrat1 = {ID: 1, locX: centreX-(75), locY: centreY, avatarDiam: avatarDiam, colour: #FFFFFF, direction: 'right', stepCount: 0, changeDir: stepInter }; 
bCrat2 = {ID: 2, locX: centreX-(150), locY: centreY, avatarDiam: avatarDiam, colour: #a9a9a9, direction: 'right', stepCount: 0, changeDir: stepInter };

// List of all active bureaucrats on board
bCratList = [bCrat0, bCrat1, bCrat2];

var bCratID = bCratList.length;

// variables to display in gameStats() functions
oldestbCrat = bCratList[0];
youngestbCrat = bCratList[bCratList.length-1];

void setup () {

	size(width, height); 
	background(200); 
	
}

// draw border around canvas
function border () {
	noFill();
	strokeWeight(2)
	stroke(153);
	rect (0,0,(width*0.999),(height*0.999));
}

// Create the character avatars
function drawAvatar (c) {
	fill(c.colour);
	stroke(c.colour);
	ellipse (c.locX, c.locY, c.avatarDiam, c.avatarDiam);
	if (printID == true) {
		fill(#000000);
		textSize(10);
		text (bCratList[i].ID, bCratList[i].locX-(bCratList[i].avatarDiam/2.75), bCratList[i].locY-(bCratList[i].avatarDiam/1.25));
	}
}

// Show ID when mouse is hovered nearby
function showID (c) {
	stroke(#000000);
	fill(#FFFFFF);
	rect (0, height-40, 40, 40);
	fill(#000000);
	text ('Show IDs', 1, height-35, 40, 40);
	if (mouseX < 40 && mouseY > (height-40)) {
		printID = true;
		}
	else {
		printID = false;
	}
}


// Moves the 'NPC' avatars
function movebCrat (c) {

	// check that character is within bounds of canvas
	if (c.locY > 0 && c.locY < height && c.locX > 0 && c.locX < width) {
	
		if (c.direction=='right') {
				c.locX += 1;
				c.stepCount+=1;
		}
				
		if (c.direction=='left') {
				c.locX -=1;
				c.stepCount+=1;
		}
		
		if (c.direction=='down') {
				c.locY += 1;
				c.stepCount+=1;
		}
				
		if (c.direction=='up') {
				c.locY -=1;
				c.stepCount+=1;
		}
	}
}

// Movement logic for NPCs
function changeDirection (c) {
	if (c.locY < c.avatarDiam || c.locY > height-c.avatarDiam || c.locX < c.avatarDiam || c.locX > width-c.avatarDiam) {
		if (c.locY < c.avatarDiam) {
			c.direction = 'down';
		}
		if (c.locY > height-c.avatarDiam) {
			c.direction ='up';
		}
		if (c.locX < c.avatarDiam) {
			c.direction = 'right'
		}
		if (c.locX > width-c.avatarDiam) {
			c.direction = 'left'
		}
	}
	if (c.stepCount%75==0){
	newDirection = Math.random();
		if (newDirection < 0.25) {
			c.direction = 'left';
			}
		if (newDirection > 0.25 && newDirection < 0.5) {
			c.direction = 'right';
		}
		if (newDirection > 0.5 && newDirection < 0.75) {
			c.direction = 'up';
		}
		if (newDirection > 0.75) {
			c.direction = 'down';
		}
		//console.log(c.ID, c.direction);	// Removed - clogs up console when multiple objects have been created
		}
	}

	
// Dynamically create new bureaucrats - called within spawnbCrat() function
function spawn (locX, locY, avatarDiam, colour, direction, changeDir) {
	this.ID = bCratID;
	bCratID ++;
	this.locX = locX;
	this.locY = locY;
	this.avatarDiam = avatarDiam;
	this.colour = colour;
	this.direction = direction;
	this.stepCount = 0;
	this.changeDir = changeDir;
	bCratList.push(this);
}

// Removes bureaucrat from board - called within proximityCheck() function
function retirebCrat (c) {
	console.log('Bureaucrat', bCratList[c].ID, 'retired');
	bCratList.splice(c,1);
	}

/*// calls spawn function every 300 frames	REMOVED - spawnBCrat() now conditionally executed by ProximityCheck()
function spawnbCrat () {
	{
		var bCrat2 = new spawn(centreX, centreY, height/40, #080808, 'left');
		console.log (bCratList[bCratList.length-1]);
	}
}*/


// Check for collisions
function proximityCheck () {
	for (a=0; a<bCratList.length; a++){
		collisionLogged = false;
		for (b=0; b<bCratList.length; b++) 
			// Location of every object in list compared with that of every other object in list
			if (a!=b && dist(bCratList[a].locX, bCratList[a].locY, bCratList[b].locX,bCratList[b].locY) > bCratList[a].avatarDiam-0.9&&dist(bCratList[a].locX, bCratList[a].locY, bCratList[b].locX,bCratList[b].locY) < bCratList[a].avatarDiam+0.9 && collisionLogged == false) {
				//bCratList[a].locX > bCratList[b].locX-5 && bCratList[a].locX < bCratList[b].locX+5 && bCratList[a].locY > bCratList[b].locY-5 && bCratList[a].locY < bCratList[b].locY+5 OLD CONDITIONS
				//console.log(bCratList[a].direction);		DEBUG
				
				
				// Redirect colliding objects to prevent multiple spawns
				if (bCratList[a].direction=='right') {
					bCratList[a].direction ='left';
					bCratList[a].locX -=3;
					bCratList[b].direction ='right';
					bCratList[b].locX +=3;
				}
				
						
				if (bCratList[a].direction=='left') {
					bCratList[a].direction ='right';
					bCratList[a].locX +=3;
					bCratList[b].direction ='left';
					bCratList[b].locX -=3;
				}
				
				if (bCratList[a].direction=='down') {
					bCratList[a].direction ='up';
					bCratList[a].locY -=3;
					bCratList[b].direction ='down';
					bCratList[b].locY +=3;
				}
						
				if (bCratList[a].direction=='up') {
					bCratList[a].direction ='down';
					bCratList[a].locY +=3;
					bCratList[b].direction ='up';
					bCratList[b].locY -=3;
				}
				
				collisionLogged = true;
			
			// Spawn new bureaucrat after collision
			
			
				console.log('Collision between ', bCratList[a].ID, ' and ', bCratList[b].ID);
				
				if (bCratList.length < 500 && gameMode =='Expansion') {
					// Random starting location
					newX = Math.round(Math.random()*(width*0.90));
					newY = Math.round(Math.random()*(height*0.90));
					// Random colour
					randR = Math.floor(Math.random()*255);
					randG = Math.floor(Math.random()*255);
					randB = Math.floor(Math.random()*255);
					randCol = color (randR, randG, randB);
					// Random change-of-direction (COD) interval
					intCOD = Math.floor((Math.random()*100)+50);
					var bCrat2 = new spawn(newX, newY, bCratList[a].avatarDiam, randCol, 'left',intCOD);
					//alert (bCratList[bCratList.length-1].changeDir);	DEBUG
					//console.log (bCratList[bCratList.length-1]);
					}
					
				// Switch game modes	
				if (bCratList.length >= 500 && gameMode == 'Expansion') {
					//console.log("Limit reached!");
					gameMode = 'Extinction';
					//alert (gameMode);			DEBUG
				}
				
				if (bCratList.length == 10 && gameMode =='Extinction') {
					gameMode = 'Expansion';
				}
				
				if (bCratList.length > 2 && gameMode == 'Extinction') {
				// Each bureaucrat rolls a number based on their ID - larger roll survives
				aRoll = a*Math.random();
				bRoll = b*Math.random();
					if (aRoll >= bRoll) {
					retirebCrat(b);
					}
					if (aRoll < bRoll) {
					retirebCrat(a);
					}
				}
			}
	}
}


//Animate every bureaucrat on board
function animateAll() {
	for (i=0; i < bCratList.length; i++) {
		movebCrat(bCratList[i])
		drawAvatar(bCratList[i]);
		changeDirection (bCratList[i]);
		showID (bCratList[i]);
		oldestbCrat = bCratList[0];
		youngestbCrat = bCratList[bCratList.length-1];
	}
}

// displays game stats in upper-left corner
function gameStats () {
	text ('Mode: '+gameMode, 5, 10);
	text ('Oldest: '+oldestbCrat.ID, 5, 20);
	text ('Youngest: '+youngestbCrat.ID, 5, 30);
	text ('Current population: '+bCratList.length, 5, 40);
}

void draw () {
	if (pause == false) {
	background(200); 
	border();
	fill(#000000);
	//movebCrat(bCrat);
	//drawAvatar(bCrat);
	//changeDirection (bCrat);
	proximityCheck();
	animateAll();
	//retirebCrat();
	//spawnbCrat();
	gameStats();
	frameCount++;
	}
}

void keyPressed(){
	pause = true;
}

void keyReleased(){
	pause = false;
}


