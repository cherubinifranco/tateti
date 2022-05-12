const player1 = [];
const player2 = [];
const playerTurnText = document.getElementById("playerTurn");
let turnPlayer1 = true;
let finished = false;
let test = [1,2,3,4,9];
let counter = 0;


// The function are called Ta-Te-Ti
// They are called in that order by the previous function

// Ta checks the turns and the cells
// Te changes the cell to X or O
// Ti checks for winners and gives the alert


const ta = (x, y) =>{
    if (finished || counter == 9){
        window.location.reload();
        return false
    }
    if (player1.includes(x) || player2.includes(x)){
        alert("This cell is already selected");
    } else {
        counter++
        if (turnPlayer1){
            player1.push(x);
            te(y);
            ti(player1);
            playerTurnText.innerHTML= "Player 2 Turn (O)";
            turnPlayer1 = false;
        } else {
            player2.push(x);
            te(y);
            ti(player2);
            playerTurnText.innerHTML= "Player 1 Turn (X)";
            turnPlayer1 = true;
        }
    }
}

const te = (y) =>{
    let z = document.getElementById(y);
    if (turnPlayer1){
        z.innerHTML = "X";
    } else{
        z.innerHTML = "O";
        
    }
}

const ti = player =>{
    if (player.includes(1) && player.includes(2) && player.includes(3) ||
        player.includes(4) && player.includes(5) && player.includes(6) ||
        player.includes(7) && player.includes(8) && player.includes(9) ||
        player.includes(7) && player.includes(4) && player.includes(1) ||
        player.includes(8) && player.includes(5) && player.includes(2) ||
        player.includes(9) && player.includes(6) && player.includes(3) ||
        player.includes(1) && player.includes(5) && player.includes(9) ||
        player.includes(7) && player.includes(5) && player.includes(3))  {
        finished = true;
        if (turnPlayer1){
            alert("The winner is the player 1");
        } else {
            alert("The winner is the player 2");
        }
    }
}