// эту функцию getComputerChoice написал gpt
function getComputerChoice() {
    const choices = ['камень', 'ножницы', 'бумага'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "камень") {
    if (playerSelection === "бумага") {
      console.log("Вы победили!");
    } else if (playerSelection === "ножницы") {
      console.log("Вы проиграли!");
    } else {
      console.log("Ничья");
    }
  }

  if (computerSelection === "ножницы") {
    if (playerSelection === "камень") {
      console.log("Вы победили!");
    } else if (playerSelection === "бумага") {
      console.log("Вы проиграли!");
    } else {
      console.log("Ничья");
    }
  }

  if (computerSelection === "бумага") {
    if (playerSelection === "ножницы") {
      console.log("Вы победили!");
    } else if (playerSelection === "камень") {
      console.log("Вы проиграли!");
    } else {
      console.log("Ничья");
    }
  }
}

function game() {
  let playerSelection = prompt("Напиши вариант из камень, ножницы, бумага");
  let computerSelection = getComputerChoice(); // логика - которая вернет камень или ножницы или бумагу
  console.log('Выбор компа:', computerSelection)
  playRound(playerSelection, computerSelection);
}

game();
game();
game();
