function diceRoll() {
  let rollOne = Math.ceil(Math.random() * 6);
  let rollTwo = Math.ceil(Math.random() * 6);
  console.log(rollOne, rollTwo); 
}

// Test code
console.log(diceRoll());
// End test code