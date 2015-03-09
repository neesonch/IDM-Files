var turn = 0       // A counter for the number of turns that have passed
var win = false    // Tracking whether the main game loop should continue

var space = ' '    // The symbol we will use for an empty space on the board
var player1 = 'O'  // The symbol we will use for player 1
var player2 = 'X'  // The symbol we will use for player 2



// The board will be represented by a 2D list
// (a list of rows, with each row being itself a list)
board    = [  ]
board[0] = [  space, space, space ]
board[1] = [  space, space, space ]
board[2] = [  space, space, space ]

// Take a board variable called b and print out a nice text
// representation of the board.
// The board variable should be a 2D list with each element containing space, 'X' or 'O'

/*
function printboard(b){
    var newBoard = ('<pre>'
	+'&nbsp;&nbsp;' + '|   |<br>'
    + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2]+'<br>'
    +'  |   |<br>'
    +'-----------<br>'
	+'  |   |<br>'
    + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2]+'<br>'
    +'  |   |<br>'
    +'-----------<br>'
    +'  |   |<br>'
    + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2]+'<br>'
    +'  |   |<br>');
	
	document.getElementById('boardspace').innerHTML	= newBoard;
	
}*/	






// Take a player type (X or O) and play a single move on the board
// for that player. 
// At the moment this just prompts the player for their move and 
// then makes the move if possible. The move is lost if they try
// an already occupied position. At the moment no attempt it made
// to validate the input

/* 
	CORMAC: Incorporated board update funtionality into 'playMove()' Little change needed to existing structure - converted
			row and column inputs into cell co-ordinates and added simple if/else statement to update cell to appropriate image.
*/

function playMove(player){
    //document.write("Your turn player",player)
    row = parseInt(prompt("enter row:"))
    col = parseInt(prompt("enter column:"))
	var rowString = row.toString();
	var colString = col.toString();
	var coOrd = rowString.concat(colString);
	var cellID = 'c'.concat(coOrd);
    if( board[row][col] === player1 || board[row][col] === player2 ){
        alert ("Already taken! Move skipped");
    }else{
		if (player === 'O') {
		document.getElementById(cellID).src = "images/nought.png";}
		if (player === 'X') {
		document.getElementById(cellID).src = "images/cross.png";}
        board[row][col] = player
    }
}


/*
		CORMAC: Created the below function to replace 'printboard()' - abandoned when I realized the functionality
		        could be incorporated into 'playMove()'.

function updateBoard (b) {

var rowColumn = board[row,col]
alert (rowColumn);
document.getElementById('p').src = "images/nought.png";
alert ("Working");
}

*/


// Take a board (2D list of space, 'X' or 'O') and a player marker
// Returns True if that player has won on the board, and False if they
// have not
function checkWin(b,player){

    // Check each row
    for (var r=0; r < b.length; r = r+1){
        row = b[r];
        if( row[0] === player && row[1] === player && row[2] === player ){
            return true
        }
    }

    // Check diagonals
    if( b[0][0] === player && b[1][1] === player && b[2][2] === player ){
        return true
    }
    // Todo: second diagonal


    // Check columns
    for (var col=0; col < 3; col = col+1){
        if( b[0][col] === player && b[1][col] === player && b[2][col] === player){
            return true
        }
    }

    // If we have not already returned by now then there was no win position.
    return false
}

function clickMove () {
		alert ("Working")
}

function play_game(){
	//printboard(board)

	while (!win){
		playMove(player1)
		//printboard(board)
		//updateBoard (board)
		win = checkWin(board,player1)

		if( !win ){
			playMove(player2)
			//printboard(board)
			win = checkWin(board,player2)
		}
	}


	document.write("Game over")
}

//document.body.onload = function(){ play_game(); }
// theBody.onload(); -- later on, by browser

//document.body.onload = play_game;

//document.body.onload = function(){ play_game; }