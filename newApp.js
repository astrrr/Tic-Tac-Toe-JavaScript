let flag = 0;
let game_over = 0;
let round_count =0;
let result_list = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function check_winner(){
    for (let i=0; i<result_list.length; i++) {
        if (result_list[4]!=0){
            for(let j =1; j<=4; j++){
                if((result_list[4]==="X") && (result_list[4-j]==="X") && (result_list[4+j]==="X") || (result_list[4]==="O") && (result_list[4-j]==="O") && (result_list[4+j]==="O") ){
                    document.getElementById("winner").innerHTML = "Winner is "+ result_list[4] +" !!!"
                    game_over = 1
                }
            }
        }
        
        // case 1
        if ((result_list[0]==="X") && (result_list[1]==="X") && (result_list[2]==="X") || (result_list[0]==="O") && (result_list[1]==="O") && (result_list[2]==="O") ){
            document.getElementById("winner").innerHTML = "Winner is "+ result_list[0] +" !!!"
            game_over = 1
        }

        // case 2
        if ((result_list[0]==="X") && (result_list[3]==="X") && (result_list[6]==="X") || (result_list[0]==="O") && (result_list[3]==="O") && (result_list[6]==="O") ){
            document.getElementById("winner").innerHTML = "Winner is "+ result_list[0] +" !!!"
            game_over = 1
        }

        // case 3
        if ((result_list[8]==="X") && (result_list[5]==="X") && (result_list[2]==="X") || (result_list[8]==="O") && (result_list[5]==="O") && (result_list[2]==="O") ){
            document.getElementById("winner").innerHTML = "Winner is "+ result_list[8] +" !!!"
            game_over = 1
        }

        // case 4
        if ((result_list[8]==="X") && (result_list[7]==="X") && (result_list[6]==="X") || (result_list[8]==="O") && (result_list[7]==="O") && (result_list[6]==="O") ){
            document.getElementById("winner").innerHTML = "Winner is "+ result_list[8] +" !!!"
            game_over = 1
        }
        //case 9 draw
        if(round_count == 9 && game_over==0){
            document.getElementById("winner").innerHTML = "Draw !!!"
            game_over = 1
        }
    }
}

function clicked(id) {
    round_count++
    if (game_over ==0){
        if (flag == 0){
            document.getElementById(id).innerHTML = "X"
            document.getElementById(id).onclick = ""
            result_list[id] = "X"
            flag = 1
        }       
        else{
            document.getElementById(id).innerHTML = "O"
            document.getElementById(id).onclick = ""
            result_list[id] = "O"
            flag = 0
        }
    }
    else{
        document.getElementById(id).onclick = ""
    }
    check_winner();
}


