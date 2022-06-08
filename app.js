
let winning = 0 //is not 0 when game over 
let turn = 1; // 1 = x , -1 = o 


function clicked(cell) {
    if(cell.innerHTML == ""){
        cell.innerHTML = turn == 1? "X" : "O" 
        tictactoe(cell.id, turn)
        if (winning != 0) {
            document.getElementById("winner").innerHTML = winning == "D" ?
            "Draw !!" : `${winning} wins !!!`
        }
        turn = -turn
    }
      
}



let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function tictactoe(i, val) {
    board[i] = val
    if (isWin(0,1,2) || isWin(3,4,5) || isWin(6,7,8) ||
        isWin(0,3,6) || isWin(1,4,7) || isWin(2,5,8) ||
        isWin(0,4,8) || isWin(2,4,6) ) {
            console.log("Winner is : ",winning);
    }
    if (board.every(x=> x!=0)) {
        winning = "D"
        console.log("Draw !!");
    }
}

function isWin(a, b, c) {
    let sum = board[a] + board[b] + board[c]
    if (sum == 3 || sum == -3){
        winning = (sum == 3) ? "X" : "O"
        console.log(a, b, c, winning);
        return winning
    }
    return 0
}

