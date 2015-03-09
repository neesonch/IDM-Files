

/* ---------------------------- Board array ------------------------------- */
var c00 = { canGoUp: "no", canGoDown: "yes", canGoLeft: "no", canGoRight: "yes"};
var c01 = { canGoUp: "no", canGoDown: "no", canGoLeft: "yes", canGoRight: "yes"};
var c02 = { canGoUp: "no", canGoDown: "yes", canGoLeft: "yes", canGoRight: "no"};
var c03 = { canGoUp: "yes", canGoDown: "yes", canGoLeft: "yes", canGoRight: "yes"};

var row0 = [c00, c01, c02, c03]


var c10 = { canGoUp: "yes", canGoDown: "yes", canGoLeft: "no", canGoRight: "yes"};
var c11 = { canGoUp: "no", canGoDown: "no", canGoLeft: "yes", canGoRight: "no"};
var c12 = { canGoUp: "yes", canGoDown: "yes", canGoLeft: "no", canGoRight: "yes"};
var c13 = { canGoUp: "no", canGoDown: "no", canGoLeft: "yes", canGoRight: "yes"};

var row1 = [c10, c11, c12, c13]

var c20 = { canGoUp: "yes", canGoDown: "no", canGoLeft: "no", canGoRight: "yes"};
var c21 = { canGoUp: "no", canGoDown: "no", canGoLeft: "yes", canGoRight: "yes"};
var c22 = { canGoUp: "yes", canGoDown: "no", canGoLeft: "yes", canGoRight: "no"};
var c23 = { canGoUp: "yes", canGoDown: "yes", canGoLeft: "yes", canGoRight: "yes"};

var row2 = [c20, c21, c22, c23]

var board = [row0, row1, row2]
/* --------------------------- End of board array ------------------------ */

/* ------------------------- Pre-game variables --------------------------- */

// Theseus start position
var theseus = { row: 0, col: 1 };
// Minotaur start position
var minotaur = {row: 2, col: 0};
// Exit cell - reaching this cell wins the game
var exitCell = 'c13';
// Image location for Theseus
var theseusImage = "<img src = 'images/theseus.png' />";
// Image location for Minotaur
var minotaurImage = "<img src = 'images/minotaur.jpg' />";

/* --------------------- End of pre-game variables ----------------------- */


// Clicking the appropriate directional command in the HTML document runs the below code to move Theseus which checks if the intended move 
// is valid, executes it, and then updates the board display and the board array. There are four variations of the same code
// corresponding to up, down, left, and right.

function theseusMove (t) {
	var theseusCurrent = ('c' + theseus.row + theseus.col);
	if (t.id === 'left') {
		if (board [theseus.row][theseus.col].canGoLeft === 'no') {
			alert ("You can't go that way!") }
		else {
			document.getElementById(theseusCurrent).innerHTML = "";
			theseus.col -= 1;
			theseusCurrent = ('c' + theseus.row + theseus.col);
			document.getElementById(theseusCurrent).innerHTML = theseusImage;}
	}
	if (t.id === 'right') {
		if (board [theseus.row][theseus.col].canGoRight === 'no') {
			alert ("You can't go that way!") }
		else {
			document.getElementById(theseusCurrent).innerHTML = "";
			theseus.col += 1;
			theseusCurrent = ('c' + theseus.row + theseus.col);
			document.getElementById(theseusCurrent).innerHTML = theseusImage;}
	}
	if (t.id === 'up') {
		if (board [theseus.row][theseus.col].canGoUp === 'no') {
			alert ("You can't go that way!") }
		else {
			document.getElementById(theseusCurrent).innerHTML = "";
			theseus.row -= 1;
			theseusCurrent = ('c' + theseus.row + theseus.col);
			document.getElementById(theseusCurrent).innerHTML = theseusImage;}
	}
	if (t.id === 'down') {
		if (board [theseus.row][theseus.col].canGoDown === 'no') {
			alert ("You can't go that way!") }
		else {
			document.getElementById(theseusCurrent).innerHTML = "";
			theseus.row += 1;
			theseusCurrent = ('c' + theseus.row + theseus.col);
			document.getElementById(theseusCurrent).innerHTML = theseusImage;}
	}
	if (t.id === 'stay') {
		alert ("You stayed where you are!")
	}
}

/* ------------------------------- End of theseusMove function ------------------------------ */

/* ----------- checkWin function - called after each move by Theseus ------------------------ */

function checkWin () {
	var theseusCurrent = ('c' + theseus.row + theseus.col );
	if (theseusCurrent === exitCell) {
		alert ('Congratulations! You escaped the labyrinth!')
		//disables onclick functions to end game
		var buttons = document.getElementsByClassName("interface");
		for (i = 0; i < buttons.length ; i ++ ) {
		buttons[i].onclick = "";
		}
		// Greys out direction commands
		document.getElementById("directions").style.color="gray";
	}
}


/* ------------checkLose function - to be called later in the minotaurMove function ----------*/

function checkLose () {
	if (theseus.row === minotaur.row && theseus.col === minotaur.col) {
		alert ('The Minotaur tracked you down! Game over man, game over!');
		//disables onclick functions to end game
		var buttons = document.getElementsByClassName("interface");
		for (i = 0; i < buttons.length ; i ++ ) {
		buttons[i].onclick = "";
		}
		// Greys out direction commands
		document.getElementById("directions").style.color="gray";
}
}

/* ---------------------------- End of checkLose function ------------------------------------*/

function minotaurMove () {
	var minotaurCurrent = ('c' + minotaur.row + minotaur.col);
	/* Below code contains Minotaur movement logic. The 'for' loop executes this logic twice. Every time the Minotaur makes a move,
	the moveMade flag is set to true: this ensures that the Minotaur will move only once on each loop of the movement logic. */
	for (i = 0; i < 2; i ++) {
		var moveMade = false;
		if (minotaur.col != theseus.col && moveMade === false) {
			if (minotaur.col > theseus.col && board [minotaur.row] [minotaur.col].canGoLeft === 'yes') {
				document.getElementById(minotaurCurrent).innerHTML = "";
				minotaur.col -= 1;
				minotaurCurrent = ('c' + minotaur.row + minotaur.col);
				document.getElementById(minotaurCurrent).innerHTML = minotaurImage;
				moveMade = true;
			}
			if (minotaur.col < theseus.col && board [minotaur.row] [minotaur.col].canGoRight === 'yes') {
				document.getElementById(minotaurCurrent).innerHTML = "";
				minotaur.col += 1;
				minotaurCurrent = ('c' + minotaur.row + minotaur.col);
				document.getElementById(minotaurCurrent).innerHTML = minotaurImage;
				moveMade = true;
			}
		}
		if (moveMade === false) {
			if (minotaur.row > theseus.row && board [minotaur.row] [minotaur.col].canGoUp === 'yes') {
				document.getElementById(minotaurCurrent).innerHTML = "";
				minotaur.row -= 1;
				minotaurCurrent = ('c' + minotaur.row + minotaur.col);
				document.getElementById(minotaurCurrent).innerHTML = minotaurImage;
			}
			if (minotaur.row < theseus.row && board [minotaur.row] [minotaur.col].canGoDown === 'yes') {
				document.getElementById(minotaurCurrent).innerHTML = "";
				minotaur.row += 1;
				minotaurCurrent = ('c' + minotaur.row + minotaur.col);
				document.getElementById(minotaurCurrent).innerHTML = minotaurImage;
			}
		}
		/* After the Minotaur makes each move, the game checks to see if it has caught the player */
		checkLose()
	}
}


/* ----------------------------- End of minotaurMove function --------------------------------*/

// Plays one round of game each time a directional command is clicked:
function playRound (t) {
	theseusMove (t);
	checkWin ();
	minotaurMove ();
}

// Prints maze (by altering pre-existing grid in HTML document) and initializes starting positions on board:
function runGame () {

// First 'for' loop parses through rows and contains a second 'for' loop which parses through columns.
for (r=0; r < board.length; r ++) {
	for (c=0; c < row0.length; c++) {
		var currentCell = ('c'+r+c);
		if (board[r][c].canGoUp === 'yes') {
		document.getElementById(currentCell).style.borderTopColor = 'transparent';
		}
		if (board[r][c].canGoDown === 'yes') {
		document.getElementById(currentCell).style.borderBottomColor = 'transparent';
		}
		if (board[r][c].canGoLeft === 'yes') {
		document.getElementById(currentCell).style.borderLeftColor = 'transparent';
		}
		if (board[r][c].canGoRight === 'yes') {
		document.getElementById(currentCell).style.borderRightColor = 'transparent';
		}
	}
}

document.getElementById('c' + theseus.row + theseus.col).innerHTML =theseusImage;
document.getElementById('c' + minotaur.row + minotaur.col).innerHTML =minotaurImage;
document.getElementById(exitCell).style.backgroundColor = "lightGreen";

}