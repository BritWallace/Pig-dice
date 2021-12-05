// Business Logic

let newGame = new Game (true, 0, 0, 0);

function diceRoll() {
  let rollOne = Math.ceil(Math.random() * 6);
  let rollTwo = Math.ceil(Math.random() * 6); 
  newGame.addDice(rollOne, rollTwo);
  console.log(newGame.currentScore);
}

function Game(turn, playerOneScore, playerTwoScore, currentScore) {
  this.turn = true;
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
  this.currentScore = 0;
}

Game.prototype.addDice = function(rollOne, rollTwo) {
  if ( rollOne === 1 || rollTwo === 1) {
    newGame.endTurn();
    console.log(newGame.currentScore);
  } else {
  let sum = rollOne + rollTwo;
  this.currentScore += sum;
  }
  return this.currentScore;
}

Game.prototype.endTurn = function() {
  newGame.currentScore = 0;
  newGame.turn = !newGame.turn;
  return newGame.turn, newGame.currentScore;
}

function holdScore() {
  newGame.hold();
}

Game.prototype.hold = function() {
let currentTurn = newGame.turn;
console.log(currentTurn);
}

// Test code
console.log(diceRoll());
// End test code