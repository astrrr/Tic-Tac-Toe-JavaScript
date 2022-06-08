let board =[[0, 0, 0],[0, 0, 0],[0, 0, 0]]
let daigonal0, daigonal1, row, col0, col1, col2
daigonal0 = daigonal1 = row = col0 = col1 = col2 = []
let round_count = 0
let game_over = 0

const isX = (currentValue) => currentValue === "X";
const isO = (currentValue) => currentValue === "O";

function tictactoe(posR, posC, val) {
    round_count++
    board[posR][posC] = val
    if (game_over == 0){
        col0 = [], col1 = [], col2 = [], daigonal0 =[], daigonal1 =[]
        
        for(let r=0; r<board.length; r++){
            row = []
            
            for (let c = 0; c < board.length; c++) {
                //row
                row.push(board[r][c])

                //col
                if (board[r][c] !=0 && c ==0){
                    col0.push(board[r][c])
                }
                if (board[r][c] !=0 && c ==1){
                    col1.push(board[r][c])
                }
                if (board[r][c] !=0 && c ==2){
                    col2.push(board[r][c])
                }
                
                //diagonal 0 "\"
                if ((board[r][c] != 0) &&(r==c)) {
                    daigonal0.push(board[r][c])
                }
                
                //diagonal 1 "/"
                if ((board[r][c] != 0) && ((Math.abs(r-c)==2) || (r==1 && c==1))) {
                    daigonal1.push(board[r][c])
                }
            }
            
            // check row
            if((row.length == 3) && (row.every(isX) || row.every(isO))){
                console.log("same value in a row, Winner : ", row[0]);
                game_over = 1
            }
            
             // check col
            let cols = [col0, col1, col2];
            for (let col  = 0; col < cols.length; col++) {
                if ((cols[col].length==3) && (cols[col].every(isX) || cols[col].every(isO))) {
                    console.log("same value in a Column, Winner : ", cols[col][0]);
                    game_over = 1    
                    
                }
                
            }

            //check daigonal0
            let diagonals = [daigonal0, daigonal1]
            for (let dai  = 0; dai < diagonals.length; dai++) {
                if ((diagonals[dai].length==3) && (diagonals[dai].every(isX) || diagonals[dai].every(isO))) {
                    console.log("same value in a Daigonal, Winner : ", diagonals[dai][0]);
                    game_over = 1    
                    
                }
            }
        }
    }
}

function main() {
    console.log(" ");
    // row column val(X or O)
    tictactoe(0,2,"O");
    tictactoe(2,0,"O");

    tictactoe(0,0,"X");
    tictactoe(0,1,"X");
    //tictactoe(0,2,"X");

    tictactoe(1,1,"O");
    tictactoe(2,2,"X");
    tictactoe(1,0,"O");
    tictactoe(1,2,"O");
    tictactoe(2,2,"X");

    

    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log(" ");
    //console.log(row);
    // console.log("col0 : ",col0);
    
    // console.log(col1);
    // console.log(col2);
}

main()