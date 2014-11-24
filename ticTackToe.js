var player1, player2, player1Squares, player2Squares, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9, allSqares, move;

// setup players and initialize game
var player1 = 'X';
var player2 = 'O';
// var currentPlayer ='';
var move = 0;

//setup gameBoard
var sq1 = document.getElementById('square1');
var sq2 = document.getElementById('square2');
var sq3 = document.getElementById('square3');
var sq4 = document.getElementById('square4');
var sq5 = document.getElementById('square5');
var sq6 = document.getElementById('square6');
var sq7 = document.getElementById('square7');
var sq8 = document.getElementById('square8');
var sq9 = document.getElementById('square9');

//setup players choice function

currentPlayer = function(){
  if (move === 1){return 'X';};
  if (move === 2){return 'Y';};
}
// for(turn = 0; turn < 9; turn++){
//   var currentPlayer;
 
// }
// 
sq1.onclick = function(){sq1.innerHTML = currentPlayer; sq1.setAttribute("class", currentPlayer()); move += 1;}; 
sq2.onclick = function(){sq2.innerHTML = currentPlayer; sq2.setAttribute("class", currentPlayer()); move += 1;}; 
sq3.onclick = function(){sq3.innerHTML = currentPlayer; sq3.setAttribute("class", currentPlayer); move += 1;}; 
sq4.onclick = function(){sq4.innerHTML = currentPlayer; sq4.setAttribute("class", currentPlayer); move += 1;}; 
sq5.onclick = function(){sq5.innerHTML = currentPlayer; sq5.setAttribute("class", currentPlayer); move += 1;}; 
sq6.onclick = function(){sq6.innerHTML = currentPlayer; sq6.setAttribute("class", currentPlayer); move += 1;}; 
sq7.onclick = function(){sq7.innerHTML = currentPlayer; sq7.setAttribute("class", currentPlayer); move += 1;}; 
sq8.onclick = function(){sq8.innerHTML = currentPlayer; sq8.setAttribute("class", currentPlayer); move += 1;}; 
sq9.onclick = function(){sq9.innerHTML = currentPlayer; sq9.setAttribute("class", currentPlayer); move += 1;}; 

// var playerSelecting = function(){

// }
// var setSquare = function(player, squareSelected){
//   squareSelected.innerHTML = player;
// }



// if (move % 2 == 0){
//   player = player1;
//   move += 1;

// }


//determine if player 1 or player 2 wins or if there have been 8 moves for cat's game
if (sq1.classList.contains("x") && sq2.classList.contains("x") && sq3.classList.contains("x") ||
    sq1.classList.contains("x") && sq5.classList.contains("x") && sq9.classList.contains("x") ||
    sq1.classList.contains("x") && sq4.classList.contains("x") && sq7.classList.contains("x") ||
    sq2.classList.contains("x") && sq5.classList.contains("x") && sq8.classList.contains("x") ||
    sq3.classList.contains("x") && sq6.classList.contains("x") && sq9.classList.contains("x") ||
    sq3.classList.contains("x") && sq5.classList.contains("x") && sq7.classList.contains("x") ||
    sq4.classList.contains("x") && sq5.classList.contains("x") && sq6.classList.contains("x") ||
    sq7.classList.contains("x") && sq8.classList.contains("x") && sq9.classList.contains("x")){
  alert("Player 1 wins, go McNasty X!");
  move = 0;
} else if (
    sq1.classList.contains("o") && sq2.classList.contains("o") && sq3.classList.contains("o") ||
    sq1.classList.contains("o") && sq5.classList.contains("o") && sq9.classList.contains("o") ||
    sq1.classList.contains("o") && sq4.classList.contains("o") && sq7.classList.contains("o") ||
    sq2.classList.contains("o") && sq5.classList.contains("o") && sq8.classList.contains("o") ||
    sq3.classList.contains("o") && sq6.classList.contains("o") && sq9.classList.contains("o") ||
    sq3.classList.contains("o") && sq5.classList.contains("o") && sq7.classList.contains("o") ||
    sq4.classList.contains("o") && sq5.classList.contains("o") && sq6.classList.contains("o") ||
    sq7.classList.contains("o") && sq8.classList.contains("o") && sq9.classList.contains("o")){
  alert("Player 2 wins, go big O!");
  move = 0;
} else if(move > 8){
  alert("Cat's game. Nobody wins.");
  move = 0;
}


//clear board to begin new game
var clearButton = document.getElementById('clearButton');
clearButton.onclick = function(){
  sq1.removeAttribute("class", "o x disabled");
  sq2.removeAttribute("class", "o x disabled");
  sq3.removeAttribute("class", "o x disabled");
  sq4.removeAttribute("class", "o x disabled");
  sq5.removeAttribute("class", "o x disabled");
  sq6.removeAttribute("class", "o x disabled");
  sq7.removeAttribute("class", "o x disabled");
  sq8.removeAttribute("class", "o x disabled");
  sq9.removeAttribute("class", "o x disabled");
};





// var victorySequences = ['1,2,3','1,5,9', '1,4,7','2,5,8', '3,6,9', '3,5,7','4,5,6','7,8,9'];

//   for (i = 1; move <= 8; i++){
//     sq[i].onclick = function(player){
//     if(move % 2 !== 0){
//       sq1.setAttribute("class", "fa fa-times-circle");
//       move += 1;
//     } else {
//       sq1.setAttribute("class", "fa fa-times-circle");
//       move += 1;
//     }
//   };
// }

// sq1.setAttribute("class", "fa fa-square fa-3x");
// sq2.setAttribute("class", "fa fa-square fa-3x");
// sq3.setAttribute("class", "fa fa-square fa-3x");
// sq4.setAttribute("class", "fa fa-square fa-3x");
// sq5.setAttribute("class", "fa fa-square fa-3x");
// sq6.setAttribute("class", "fa fa-square fa-3x");
// sq7.setAttribute("class", "fa fa-square fa-3x");
// sq8.setAttribute("class", "fa fa-square fa-3x");
// sq9.setAttribute("class", "fa fa-square fa-3x");