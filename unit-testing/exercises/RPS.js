function whoWon(player1, player2) {
  let array=['rock','paper','scissors'];

  if (player1 === player2) {
    return 'TIE!';
  }

  if (player1 === 'rock' && player2 === 'paper') {
    return 'Player 2 wins!';
  }

  if (player1 === 'paper' && player2 === 'scissors') {
    return 'Player 2 wins!';
  }

  if (player1 === 'scissors' && player2 === 'rock') {
    return 'Player 2 wins!';
  }
  if(!array.includes(player1) || !array.includes(player2)){
    return 'Invalid Data.';
  }

  return 'Player 1 wins!';
}
console.log(whoWon('rock', 'paper'));
console.log(whoWon('scissors', 'rock'));

module.exports = {
  whoWon: whoWon
};