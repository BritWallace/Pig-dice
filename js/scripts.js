// Business Logic

function diceRoll() {
  let rollOne = Math.ceil(Math.random() * 6);
  let rollTwo = Math.ceil(Math.random() * 6); 
  newGame.addDice(rollOne, rollTwo);
}

function Game(turn, playerOneScore, playerTwoScore, currentScore, currentlyPlaying) {
  this.turn = true;
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
  this.currentScore = 0;
  this.currentlyPlaying = true;
}

Game.prototype.addDice = function(rollOne, rollTwo) {
  if ( rollOne === 1 || rollTwo === 1) {
    newGame.endTurn();
    console.log(newGame.currentScore);
  } else {
  let sum = rollOne + rollTwo;
  this.currentScore += sum;
  }
  this.rollOne = rollOne;
  this.rollTwo = rollTwo;
  return this.currentScore;
}

Game.prototype.endTurn = function() {
  newGame.currentScore = 0;
  newGame.turn = !newGame.turn;
  return newGame.turn, newGame.currentScore;
}

Game.prototype.endGame = function() {
  this.currentlyPlaying = false;
}

Game.prototype.reset = function() {
  this.turn = true;
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
  this.currentScore = 0;
  this.currentlyPlaying = true;
}

function holdScore() {
  newGame.hold();
}

Game.prototype.hold = function() {
  let currentTurn = newGame.turn;
  if (currentTurn === true) {
    newGame.playerOneScore += newGame.currentScore;
  } else {
    newGame.playerTwoScore += newGame.currentScore;
  }
  if (newGame.playerOneScore > 99 || newGame.playerTwoScore > 99) {
    newGame.endGame();
  } else {
    newGame.endTurn();
  }
  return newGame.playerTwoScore, newGame.playerOneScore;
}
let newGame = new Game(true, 0, 0, 0, false);
// UI logic

function updateRoll() {
  let currentDiceRoll = `${newGame.rollOne}` +"," + `${newGame.rollTwo}`  
  $(".totalRoll").text(newGame.currentScore);
  $(".currentRoll").text(currentDiceRoll);
}

function updateScore() {
$(".player-one-score").text(newGame.playerOneScore);
$(".player-two-score").text(newGame.playerTwoScore);
}

function gameOverScreen() {
  $("#screenTwo").hide();
  $("#screenThree").show();
}
  
$(document).ready(function() {
  $("#start").on("click", function() {
    $("#screenOne").hide();
    $("#screenTwo").show();
  });
  $("#roll").on("click", function() {
    diceRoll();
    updateRoll();
  });
  $("#hold").on("click", function() {
    holdScore();
    updateScore();
    if (newGame.currentlyPlaying === false) {
      gameOverScreen();
    }
  });
  $("#startNewGame").on("click", function() {
    newGame.reset();
    updateScore();
    updateRoll();
    $("#screenTwo").show();
    $("#screenThree").hide();
  })
});