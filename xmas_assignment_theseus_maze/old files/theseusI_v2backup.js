


/* ---------------------------- Board array ------------------------------- */
var c00 = { canGoUp: "no", canGoDown: "yes", canGoLeft: "no", canGoRight: "yes"};
var c01 = { canGoUp: "no", canGoDown: "no", canGoLeft: "yes", canGoRight: "yes"};
var c02 = { canGoUp: "no", canGoDown: "yes", canGoLeft: "yes", canGoRight: "no"};
var c03 = { canGoUp: "no", canGoDown: "no", canGoLeft: "no", canGoRight: "no"};

var row0 = [c00, c01, c02, c03]


var c10 = { canGoUp: "yes", canGoDown: "yes", canGoLeft: "no", canGoRight: "yes"};
var c11 = { canGoUp: "no", canGoDown: "no", canGoLeft: "yes", canGoRight: "no"};
var c12 = { canGoUp: "yes", canGoDown: "yes", canGoLeft: "no", canGoRight: "yes"};
var c13 = { canGoUp: "no", canGoDown: "no", canGoLeft: "no", canGoRight: "no"};

var row1 = [c10, c11, c12, c13]

var c20 = { canGoUp: "yes", canGoDown: "no", canGoLeft: "no", canGoRight: "yes"};
var c21 = { canGoUp: "no", canGoDown: "no", canGoLeft: "yes", canGoRight: "yes"};
var c22 = { canGoUp: "yes", canGoDown: "no", canGoLeft: "yes", canGoRight: "no"};
var c23 = { canGoUp: "no", canGoDown: "no", canGoLeft: "no", canGoRight: "no"};

var row2 = [c20, c21, c22, c23]

var board = [row0, row1, row2]
/* --------------------------- End of board array ------------------------ */

// Theseus start position
var theseus = { row: 0, col: 1 };
// Minotaur start position
var minotaur = {row: 2, col: 1};





// Clicking the appropriate directional command in the HTML document runs the below code to move Theseus which checks if the intended move 
// is valid, executes it, and then updates the board display and the board array. There are four variations of the same code
// corresponding to up, down, left, and right.

function theseusMove (t) {
	var theseusCurrent = ('c' + theseus.row + theseus.col);
	//alert (theseusCurrent);																DEBUG
	//alert (board [theseus.row][theseus.col].canGoUp) 										DEBUG
	if (t.id === 'left') {
		if (board [theseus.row][theseus.col].canGoLeft === 'no') {
			alert ("You can't go that way!") }
		else {
			alert ("You went left!");
			document.getElementById(theseusCurrent).innerHTML = "";
			theseus.col -= 1;
			var theseusCurrent = ('c' + theseus.row + theseus.col);
			document.getElementById(theseusCurrent).innerHTML = "T";}
	}
	if (t.id === 'right') {
		if (board [theseus.row][theseus.col].canGoRight === 'no') {
			alert ("You can't go that way!") }
		else {
			alert ("You went right!");
			document.getElementById(theseusCurrent).innerHTML = ""
			theseus.col += 1;
			var theseusCurrent = ('c' + theseus.row + theseus.col);
			document.getElementById(theseusCurrent).innerHTML = "T";}
	}
	if (t.id === 'up') {
		if (board [theseus.row][theseus.col].canGoUp === 'no') {
			alert ("You can't go that way!") }
		else {
			alert ("You went up!");
			document.getElementById(theseusCurrent).innerHTML = ""
			theseus.row -= 1;
			var theseusCurrent = ('c' + theseus.row + theseus.col);
			document.getElementById(theseusCurrent).innerHTML = "T";}
	}
	if (t.id === 'down') {
		if (board [theseus.row][theseus.col].canGoDown === 'no') {
			alert ("You can't go that way!") }
		else {
			alert ("You went down!");
			document.getElementById(theseusCurrent).innerHTML = ""
			theseus.row += 1;
			var theseusCurrent = ('c' + theseus.row + theseus.col);
			document.getElementById(theseusCurrent).innerHTML = "T";}
	}
//alert (theseusCurrent)																	DEBUG
}

/* ------------------------------- End of theseusMove function ------------------------------ */

function minotaurMove () {
	alert ('The minotaur, being a lazy sod, stayed right where it is.');
}

/* ----------------------------- End of minotaurMove function --------------------------------*/

function checkLose () {
	//alert (theseus.row + ',' + theseus.col + '////' + minotaur.row + ',' + minotaaur.col);
	if (theseus.row === minotaur.row && theseus.col === minotaur.col) {
		alert ('The Minotaur tracked you down! Game over man, game over!');
}
}

function playRound (t) {
	theseusMove (t);
	minotaurMove ();
	checkLose ();
}

// Initializes starting positions on board:
function runGame () {

document.getElementById('c' + theseus.row + theseus.col).innerHTML ="T";
document.getElementById('c' + minotaur.row + minotaur.col).innerHTML ="M";
//alert (board [0][0].canGoUp);																DEBUG
//alert ("c"+minotaur.row+minotaur.col);													DEBUG

}