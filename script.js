const player1 = [];
const player2 = [];
let finished = false;

//Pasa funcion con valor 1 a 9
// Si X ya ue selccionado, alert que no se puede
// Si no fue seleccionado, 
// Habilitarlo y comprobar totales
// 
const ta = x =>{
    if (finished){return false}
    if (player1.includes(x) || player2.includes(x)){
        console.log("Ya esta seleccionado")
    } else {

    }
}

// Array jugador 1 y array jugador 2
// Si 1-3 gana
// Si 4-6 gana
// Si 7-9 gana
// Si 1,4,7 gana
// Si 2,5,8 gana
// Si 3,6,9 gana
// Si 1,5,9 gana
// Si 3,5,7 gana

//REGEX