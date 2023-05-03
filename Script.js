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
      : c == "scissors" && playerSelection == "paper"
      ? "Computer Win: Scissors vs Paper"
      : c == "scissors" && playerSelection == "rock"
      ? "You Win: Scissors vs Rock"
      : "False Input";
  return score;
}
// score add
const socre_div = document.querySelector(".score-container");
// human score
const human_score = socre_div.querySelector(".score-human");
var human_count = 0;
// Ai score
const computer_score = socre_div.querySelector(".score-computer");
var computer_count = 0;
// result container
const result_container = document.querySelector(".result-container");
// result display in text
const result_text = result_container.querySelector(".result");
// Rest Score Function
function restScore() {
  human_score.innerHTML = human_count = 0;
  computer_score.innerHTML = computer_count = 0;
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
  this.remove();
  result_text.innerHTML = "Start";
}
//
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let result = playround(
      getComputerChoice(),
      e.target.textContent.toLowerCase()
    );
    // adding to the winner
    if (result.includes("You Win"))
      human_count++, (result_text.innerHTML = result);
    if (result.includes("Computer Win"))
      computer_count++, (result_text.innerHTML = result);
    if (result.includes("Tie")) result_text.innerHTML = result;
    // updating the results
    human_score.innerHTML = human_count;
    computer_score.innerHTML = computer_count;
    // win condition
    if (human_count > 4 || computer_count > 4) {
      buttons.forEach((btn) => {
        btn.disabled = true;
      });
      // Play Again button
      const play_again = document.createElement("button");
      play_again.innerHTML = "Play again";
      play_again.addEventListener("click", restScore);
      play_again.classList.add("play_again");
      result_container.appendChild(play_again);
    }
  });
});
