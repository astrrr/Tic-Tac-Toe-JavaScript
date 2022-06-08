let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function tictactoe(R, C, val) {
    board[R*3+C] = val == "X" ? 1:-1
    if (isWin(0,1,2) || isWin(3,4,5) || isWin(6,7,8) ||
        isWin(0,3,6) || isWin(1,4,7) || isWin(2,5,8) ||
        isWin(0,4,8) || isWin(2,4,6) ) {
            console.log("Winner is : ",winning); 
    }
    if (board.every(x=> x!=0)) {
        console.log("Draw !!");
    }
}

let winning = 0
function isWin(a, b, c) {
    let sum = board[a] + board[b] + board[c]
    if (sum == 3 || sum == -3){
        winning = sum == 3 ? "X" : "O"
        console.log(a, b, c, winning);
        return winning
    }
    return 0
}


tictactoe(0,1,"X")
tictactoe(0,0,"O")
tictactoe(0,2,"X")
tictactoe(1,0,"O")
tictactoe(1,1,"X")
tictactoe(1,2,"O")
tictactoe(2,0,"X")
tictactoe(2,1,"O")
tictactoe(2,2,"X")
    
