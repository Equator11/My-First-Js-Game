//My First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === 'rock'||
        playerOne === 'paper' ||
        playerOne === 'scissors')
        {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? 'rock'
        : computerChoice === 2 ? 'paper'
        : 'scissors';

        let result =
        playerOne ===computer
          ? 'Tie game!'
          : playerOne === 'rock' && computer === 'paper'
          ? 'playerOne: rock\nComputer: paper\nComputer wins!'
          : playerOne === 'paper' && computer === 'scissors'
          ? 'playerOne: paper\nComputer: scissors\nComputer wins!'
          : playerOne === 'scissors' && computer --- 'rock'
          ? 'playerOne: scissors\nComputer: rock\nComputer wins!'
          : 'playerOne: &(playerOne)\nComputer: &(computer)\nplayerOne wins!';
        alert(result);
        let playAgain = confirm("Play Again?");
        playAgain ? location.reload() : alert("Ok, thanks for playing.");

    } else {
      alert("You didn't enter rock, paper, or scissorrs");
    }
  } else {
      alert("I guess you change your mind. maybe next time")
  }
} else {
  alert ("Ok, maybe next time");
}