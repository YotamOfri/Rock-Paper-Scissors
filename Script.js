function getComputerChoice() {
  let random = parseInt(Math.floor(Math.random() * 3));
  let answer = random == 0 ? "rock" : random == 1 ? "scissors" : "paper";
  return answer;
}
function playround(c, playerSelection) {
  let score =
    c == playerSelection
      ? "Tie"
      : c == "rock" && playerSelection == "scissors"
      ? "Computer Win: Rock vs Scissors"
      : c == "rock" && playerSelection == "paper"
      ? "You Win : Rock vs Paper!"
      : c == "paper" && playerSelection == "rock"
      ? "Computer Win: Paper vs Rock"
      : c == "paper" && playerSelection == "scissors"
      ? "You Win: Paper vs Scissors"
      : c == "Scissors" && playerSelection == "paper"
      ? "Computer Win: Scissors vs Paper"
      : c == "scissors" && playerSelection == "rock"
      ? "You Win: Scissors vs Rock"
      : "False Input";
  return score;
}
let name = prompt("rock,paper,scissors").toLowerCase();
alert(playround(getComputerChoice(), name));
