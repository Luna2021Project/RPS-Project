const getUserChoice = function userInput() {
    userInput = userInput.tolowercase();
      if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
      } else {
        console.log('error!');
        }
      }
  
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.ramdom() * 3);
      switch(randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
      break;
      }
    }
  
  function winner (userChoice, computerChoice) {
     if (userChoice === computerChoice) {
       return 'the game is a tie!';
     }  
     if (userChoice === 'rock') {
       if (computerChoice === 'paper') {
         return 'the computer won!';
       } else {
         return 'you won!';
       }
     }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'the computer won!';
    } else {
      return 'you won!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'the computer won!';
    } else {
      return 'you won!';
      }
    }
  }
  
  function playGame() {
      const userChoice = getUserChoice('rock');
      const computerChoice = getComputerChoice();
      console.log("User:  " + userChoice);
      console.log("Computer:  " + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();


  function buttonClicked(event) {
    alert("Deu certo!! Rock");
    
      /* if (person.Name = cells[0].textContent;event.target.aria-label.value === "Rock") {
       alert("Deu certo!! Rock");
    }
      
      event.target.style.backgroundColor = "orange";
    } else {
        event.target.style.backgroundColor = "green";
    } */
 }
    let button = document.getElementsByClassName("button");
      for (let i = 0; i < button.length; i++)
      button[i].addEventListener('click', buttonClicked);