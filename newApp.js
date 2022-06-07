
let flag = 0;
let game_over = 0;

let r0c0 = document.getElementById("row0col0")
let r0c1 = document.getElementById("row0col1")
let r0c2 = document.getElementById("row0col2")
let r1c0 = document.getElementById("row1col0")
let r1c1 = document.getElementById("row1col1")
let r1c2 = document.getElementById("row1col2")
let r2c0 = document.getElementById("row2col0")
let r2c1 = document.getElementById("row2col1")
let r2c2 = document.getElementById("row2col2")

let table = [[r0c0, r0c1, r0c2], [r1c0, r1c1, r1c2], [r2c0, r2c1, r2c2]];
let table2 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];


function check_winner(){

    // let r0c0 = document.getElementById("row0col0").innerHTML
    // let r0c1 = document.getElementById("row0col1").innerHTML
    // let r0c2 = document.getElementById("row0col2").innerHTML
    // let r1c0 = document.getElementById("row1col0").innerHTML
    // let r1c1 = document.getElementById("row1col1").innerHTML
    // let r1c2 = document.getElementById("row1col2").innerHTML
    // let r2c0 = document.getElementById("row2col0").innerHTML
    // let r2c1 = document.getElementById("row2col1").innerHTML
    // let r2c2 = document.getElementById("row2col2").innerHTML
    

    // case 1
    if ((r0c0==="X") && (r0c1==="X") && (r0c2==="X") || (r0c0==="O") && (r0c1==="O") && (r0c2==="O")){
        console.log("Winner is", r0c0.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r0c0 +" !!!"
        game_over = 1
    }

    // case 2
    if ((r0c0==="X") && (r1c1==="X") && (r2c2==="X") || (r0c0==="O") && (r1c1==="O") && (r2c2==="O")){
        console.log("Winner is", r0c0.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r0c0 +" !!!"
        game_over = 1
    }

    // case 3
    if ((r0c0==="X") && (r1c0==="X") && (r2c0==="X") || (r0c0==="O") && (r1c0==="O") && (r2c0==="O")){
        console.log("Winner is", r0c0.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r0c0 +" !!!"
        game_over = 1
    }

    // case 4
    if ((r1c1==="X") && (r0c1==="X") && (r2c1==="X") || (r1c1==="O") && (r0c1==="O") && (r2c1==="O")){
        console.log("Winner is", r1c1.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r1c1 +" !!!"
        game_over = 1
    }

    // case 5
    if ((r1c1==="X") && (r1c0==="X") && (r1c2==="X") || (r1c1==="O") && (r1c0==="O") && (r1c2==="O")){
        console.log("Winner is", r1c1.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r1c1 +" !!!"
        game_over = 1
    }

    // case 6
    if ((r1c1==="X") && (r0c2==="X") && (r2c0==="X") || (r1c1==="O") && (r0c2==="O") && (r2c0==="O")){
        console.log("Winner is", r1c1.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r1c1 +" !!!"
        game_over = 1
    }

    // case 7
    if ((r0c2==="X") && (r1c2==="X") && (r2c2==="X") || (r1c2==="O") && (r0c2==="O") && (r2c2==="O")){
        console.log("Winner is", r2c2.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r2c2 +" !!!"
        game_over = 1
    }

    // case 8
    if ((r2c2==="X") && (r2c1==="X") && (r2c0==="X") || (r2c2==="O") && (r2c1==="O") && (r2c0==="O")){
        console.log("Winner is", r2c2.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r2c2 +" !!!"
        game_over = 1
    }
}





function clicked(id) {
    
    if (game_over ==0){

        if (flag == 0 && game_over == 0){
            
            document.getElementById(id).innerHTML = "X"
            document.getElementById(id).onclick = ""
            flag = 1
            console.log(document.getElementById(id));
            
        }    
            
        else{
            
            document.getElementById(id).innerHTML = "O"
            document.getElementById(id).onclick = ""
            flag = 0
           
        }
    }
    else{
        document.getElementById(id).onclick = ""
    }
    
    check_winner();
}


