let newGame = new Game (true, 0, 0, 0);

function diceRoll() {
  let rollOne = Math.ceil(Math.random() * 6);
  let rollTwo = Math.ceil(Math.random() * 6); 
  newGame.addDice(rollOne, rollTwo);
  console.log(newGame.currentScore);
}

//function verify(dieRoll) {
  //if ( dieRoll === 1) {
    //console.log("end turn");
  //}
//}

//function addDice(rollOne, rollTwo) {
  //let sum = rollOne + rollTwo 
  //return sum
//}

function Game(turn, playerOneScore, playerTwoScore, currentScore) {
  this.turn = true;
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
  this.currentScore = 0;
}

Game.prototype.addDice = function(rollOne, rollTwo) {
  if ( rollOne === 1 || rollTwo === 1) {
    console.log("end turn");
  } else {
  let sum = rollOne + rollTwo;
  this.currentScore += sum;
  }
  return this.currentScore;
}

// Test code
console.log(diceRoll());
// End test code