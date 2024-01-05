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
    let comp_print = document.getElementById("comp_choice");
    comp_print.innerText = "";
    let status = document.getElementById("status");
    comp_print.innerText = "Computer Chose Rock";
    status.innerText = "It's A Draw";
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "paper") {
    let comp_print = document.getElementById("comp_choice");
    comp_print.innerText = "";
    let status = document.querySelector("#status");
    comp_print.innerText = "Computer Chose Paper";
    status.innerText = "Computer Wins!";
    computer_score++;
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "scissors") {
    let comp_print = document.getElementById("comp_choice");
    comp_print.innerText = "";
    let status = document.querySelector("#status");
    comp_print.innerText = "Computer Chose Scissors";
    status.innerText = "You Win!";
    player_score++;
    ScoreUpdater(player_score, computer_score);
  }
});
paper.addEventListener("click", () => {
  let comp_choice = ComputerChoiceGenerator();
  console.log(paper.id, comp_choice);
  if (comp_choice === "rock") {
    let comp_print = document.getElementById("comp_choice");
    comp_print.innerText = "";
    let status = document.getElementById("status");
    comp_print.innerText = "Computer Chose Rock";
    status.innerText = "You Win!";
    player_score++;
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "paper") {
    let comp_print = document.getElementById("comp_choice");
    comp_print.innerText = "";
    let status = document.querySelector("#status");
    comp_print.innerText = "Computer Chose Paper";
    status.innerText = "It's A Draw";
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "scissors") {
    let comp_print = document.getElementById("comp_choice");
    comp_print.innerText = "";
    let status = document.querySelector("#status");
    comp_print.innerText = "Computer Chose Scissors";
    status.innerText = "Computer Wins!";
    computer_score++;
    ScoreUpdater(player_score, computer_score);
  }
});

scissors.addEventListener("click", () => {
  let comp_choice = ComputerChoiceGenerator();
  console.log(scissors.id, comp_choice);
  if (comp_choice === "rock") {
    let comp_print = document.getElementById("comp_choice");
    comp_print.innerText = "";
    let status = document.getElementById("status");
    comp_print.innerText = "Computer Chose Rock";
    status.innerText = "Computer Wins!";
    computer_score++;
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "paper") {
    let comp_print = document.getElementById("comp_choice");
    comp_print.innerText = "";
    let status = document.querySelector("#status");
    comp_print.innerText = "Computer Chose Paper";
    status.innerText = "You Win!";
    player_score++;
    ScoreUpdater(player_score, computer_score);
  }
  if (comp_choice === "scissors") {
    let comp_print = document.getElementById("comp_choice");
    comp_print.innerText = "";
    let status = document.querySelector("#status");
    comp_print.innerText = "Computer Chose Scissors";
    status.innerText = "It's A Draw";
    ScoreUpdater(player_score, computer_score);
  }
});
