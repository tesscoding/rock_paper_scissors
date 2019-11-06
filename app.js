

    let pScore=0;
    let cScore=0;
    let rNumber=0;
    //hide some elements
    let roundCounter=document.querySelector(".round-counter");
    let scores=document.querySelector(".scores");
    let choices=document.querySelector(".choices");
    let finalScreen=document.querySelector("div.results-screen");
    let gameScreen=document.querySelector(".game-screen");
    let resultMessage=document.querySelector(".result");
    //let openingButtons=document.querySelector(".center-buttons");
    let openingMessage=document.querySelector(".initial-screen h1");
    resultMessage.style.display="none";
    roundCounter.style.visibility="hidden";
    scores.style.visibility="hidden";
    choices.style.visibility="hidden";
    finalScreen.style.visibility="hidden";

    playRound();
    

function updateScore(){
    const playerScore=document.querySelector(".player-score p");
    const computerScore=document.querySelector(".computer-score p");
    playerScore.textContent=`${pScore}`;
    computerScore.textContent=`${cScore}`;
}

function updateRound(){
    const roundNumber=document.querySelector(".update-round");
    roundNumber.textContent=`${rNumber}`;
  
}
function resetGame(){
         rNumber=0;
        cScore=0;
        pScore=0;
        

        const playAgain=document.querySelector(".play-again");
        playAgain.addEventListener("click", function(){
            finalScreen.style.visibility="hidden";
                //initialScreen.style.visibility="visible";
            //initialScreen.forEach(item=>item.style.visibility="visible");
            //initialScreen.forEach(item=>item.style.display="block");
            //initialScreen.style.visibility="visible";
            gameScreen.style.visibility="visible";
            resultMessage.style.display="none";
            openingMessage.style.display="block";
            //openingButtons.style.visibility="visible";
            //playRound();
        });
   }
function showEndScreen(){
    let gameResults=document.querySelector(".results-screen h1");
    if(pScore==5){
        gameResults.textContent="You are the Winner! Congratulations"
    } else{
        gameResults.textContent="You Lose!"
    }
     gameScreen.style.visibility="hidden";
    roundCounter.style.visibility="hidden";
    scores.style.visibility="hidden";
    choices.style.visibility="hidden";
     finalScreen.style.visibility="visible";

     resetGame();
 }

function playRound() {
    
    
    console.log(rNumber, cScore, pScore);
   const options=document.querySelectorAll("button.choice");
   const computerChoice=document.querySelector(".computer-choice");
   const playerChoice=document.querySelector(".player-choice");
   options.forEach(option=>{
    option.addEventListener("click", function(){
          openingMessage.style.display="none";
        resultMessage.style.display="block";
        roundCounter.style.visibility="visible";
        scores.style.visibility="visible";
        choices.style.visibility="visible";
        const compOptions=["paper", "scissors", "rock"];
        var rand = Math.floor(Math.random()*3);
        const computerSelection=options[rand].textContent;

        const playerSelection=this.textContent;
        computerChoice.textContent=`The Computer chose: ${computerSelection}`;
        playerChoice.textContent=`You chose: ${playerSelection}`;
        compareHands(playerSelection,computerSelection);
        if(pScore==5||cScore==5){
          showEndScreen();
        }
      
    })
})




}
function compareHands(playerSelection, computerSelection){
    
    //if they are the same return a draw
   if(playerSelection==computerSelection){
    resultMessage.textContent=`Draw! You both picked ${playerSelection}.`;
    rNumber++;
    updateRound();
    return;
}else if(playerSelection=='rock'&&computerSelection=='paper'){
    resultMessage.textContent=`You lose! Paper beats rock.`;
    cScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='rock'&&computerSelection=='scissors'){
    resultMessage.textContent='You win! Rock beats scissors';
    pScore++; 
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='scissors'&&computerSelection=='rock'){
    resultMessage.textContent=`You lose! Rock beats scissors.`;
    cScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='scissors'&&computerSelection=='paper'){
    resultMessage.textContent=`You win! Scissors beats paper.`;
    pScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='paper'&&computerSelection=='rock'){
    resultMessage.textContent='You win! Paper beats rock.';
    pScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='paper'&&computerSelection=='scissors'){
    resultMessage.textContent=`You lose! Scissors beats paper.`;
    cScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}
}

