     

function check_winner(){
    let r0c0, r0c1, r0c2;
    let r1c0, r1c1, r1c2;
    let r2c0, r2c1, r2c2;

    r0c0 = document.getElementById("row0col0").innerHTML
    r0c1 = document.getElementById("row0col1").innerHTML
    r0c2 = document.getElementById("row0col2").innerHTML
    r1c0 = document.getElementById("row1col0").innerHTML
    r1c1 = document.getElementById("row1col1").innerHTML
    r1c2 = document.getElementById("row1col2").innerHTML
    r2c0 = document.getElementById("row2col0").innerHTML
    r2c1 = document.getElementById("row2col1").innerHTML
    r2c2 = document.getElementById("row2col2").innerHTML

    // console.log("r0c0 : ",r0c0.toString());
    // console.log("r0c1 : ",r0c1.toString());
    // console.log("r0c2 : ",r0c2.toString());
    // console.log("r1c0 : ",r1c0.toString());
    // console.log("r1c1 : ",r1c1.toString());
    // console.log("r1c2 : ",r1c2.toString());
    // console.log("r2c0 : ",r2c0.toString());
    // console.log("r2c1 : ",r2c1.toString());
    // console.log("r2c2 : ",r2c2.toString());
    
    // console.log(r0c0 && r0c1 && r0c2 || r0c0 && r1c0 && r2c0 || r0c0 && r1c0 && r2c0);

    // case 1
    if ((r0c0==="X") && (r0c1==="X") && (r0c2==="X") || (r0c0==="O") && (r0c1==="O") && (r0c2==="O")){
        console.log("Winner is", r0c0.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r0c0 +" !!!"
        not_click = 1
    }

    // case 2
    if ((r0c0==="X") && (r1c1==="X") && (r2c2==="X") || (r0c0==="O") && (r1c1==="O") && (r2c2==="O")){
        console.log("Winner is", r0c0.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r0c0 +" !!!"
        not_click = 1
    }

    // case 3
    if ((r0c0==="X") && (r1c0==="X") && (r2c0==="X") || (r0c0==="O") && (r1c0==="O") && (r2c0==="O")){
        console.log("Winner is", r0c0.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r0c0 +" !!!"
        not_click = 1
    }

    // case 4
    if ((r1c1==="X") && (r0c1==="X") && (r2c1==="X") || (r1c1==="O") && (r0c1==="O") && (r2c1==="O")){
        console.log("Winner is", r1c1.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r1c1 +" !!!"
        not_click = 1
    }

    // case 5
    if ((r1c1==="X") && (r1c0==="X") && (r1c2==="X") || (r1c1==="O") && (r1c0==="O") && (r1c2==="O")){
        console.log("Winner is", r1c1.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r1c1 +" !!!"
        not_click = 1
    }

    // case 6
    if ((r1c1==="X") && (r0c2==="X") && (r2c0==="X") || (r1c1==="O") && (r0c2==="O") && (r2c0==="O")){
        console.log("Winner is", r1c1.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r1c1 +" !!!"
        not_click = 1
    }

    // case 7
    if ((r0c2==="X") && (r1c2==="X") && (r2c2==="X") || (r1c2==="O") && (r0c2==="O") && (r2c2==="O")){
        console.log("Winner is", r2c2.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r2c2 +" !!!"
        not_click = 1
    }

    // case 8
    if ((r2c2==="X") && (r2c1==="X") && (r2c0==="X") || (r2c2==="O") && (r2c1==="O") && (r2c0==="O")){
        console.log("Winner is", r2c2.toString(), " !!!!");
        document.getElementById("winner").innerHTML = "Winner is "+ r2c2 +" !!!"
        not_click = 1
    }
}

let flag = 0;
let not_click = 0;



function clicked(id) {
    
    if (not_click ==0){

        if (flag == 0 && not_click == 0){
            
            document.getElementById(id).innerHTML = "X"
            document.getElementById(id).onclick = ""
            flag = 1
            console.log(document.getElementById(id));
            
        }    
            
        else{
            
            document.getElementById(id).innerHTML = "O"
            document.getElementById(id).onclick = ""
            flag = 0
            //console.log(document.getElementById(id).innerHTML);
        }
    }
    else{
        document.getElementById(id).onclick = ""
    }
    
}


