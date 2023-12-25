let rock = document.querySelector("#Rock");
let paper = document.querySelector("#Paper");
let scissors = document.querySelector("#Scissors");
const options = ["rock", "paper", "scissors"];
let player_score = 0;
let computer_score = 0;

const ComputerChoiceGenerator = () => {
  let comp_choice = options[Math.floor(Math.random() * options.length)];
  return comp_choice;
};

const ScoreUpdater = (player_score, computer_score) => {
  let playerScore = document.querySelector("#User_Score");
  playerScore.innerText = player_score;

  let computerScore = document.querySelector("#Computer_Score");
  computerScore.innerText = computer_score;
};

rock.addEventListener("click", () => {
  let comp_choice = ComputerChoiceGenerator();
  console.log(rock.id, comp_choice);
  if (comp_choice === "rock") {
    let status = document.querySelector("#status");
    status.innerText = "It's A Draw";
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "paper") {
    let status = document.querySelector("#status");
    status.innerText = "Computer Wins!";
    computer_score++;
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "scissors") {
    let status = document.querySelector("#status");
    status.innerText = "You Win!";
    player_score++;
    ScoreUpdater(player_score, computer_score);
  }
});
paper.addEventListener("click", () => {
  let comp_choice = ComputerChoiceGenerator();
  console.log(paper.id, comp_choice);
  if (comp_choice === "rock") {
    let status = document.querySelector("#status");
    status.innerText = "You Win!";
    player_score++;
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "paper") {
    let status = document.querySelector("#status");
    status.innerText = "It's A Draw";
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "scissors") {
    let status = document.querySelector("#status");
    status.innerText = "Computer Wins!";
    computer_score++;
    ScoreUpdater(player_score, computer_score);
  }
});
scissors.addEventListener("click", () => {
  let comp_choice = ComputerChoiceGenerator();
  console.log(scissors.id, comp_choice);
  if (comp_choice === "rock") {
    let status = document.querySelector("#status");
    status.innerText = "Computer Wins!";
    computer_score++;
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "paper") {
    let status = document.querySelector("#status");
    status.innerText = "You Win!";
    player_score++;
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "scissors") {
    let status = document.querySelector("#status");
    status.innerText = "It's A Draw";
    ScoreUpdater(player_score, computer_score);
  }
});
