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
function printboard(b){
    document.write('<pre>');
    document.write('   |   |\n')
    document.write(' ' + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2]+'\n')
    document.write('   |   |\n')
    document.write('-----------\n')
    document.write('   |   |\n')
    document.write(' ' + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2]+'\n')
    document.write('   |   |\n')
    document.write('-----------\n')
    document.write('   |   |\n')
    document.write(' ' + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2]+'\n')
    document.write('   |   |\n')
}	

// Take a player type (X or O) and play a single move on the board
// for that player. 
// At the moment this just prompts the player for their move and 
// then makes the move if possible. The move is lost if they try
// an already occupied position. At the moment no attempt it made
// to validate the input
function playMove(player){
    document.write("Your turn player",player)
    row = parseInt(prompt("enter row:"))
    col = parseInt(prompt("enter column:"))
    if( board[row][col] === player1 || board[row][col] === player2 ){
        document.write("Already taken! Move skipped")
    }else{
        board[row][col] = player
    }
}



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


printboard(board)

while ( win === false){


    playMove(player1)
    printboard(board)
    win = checkWin(board,player1)

    if( !win ){
        playMove(player2)
        printboard(board)
        win = checkWin(board,player2)
    }
}


document.write("Game over")