

    let pScore=0;
    let cScore=0;
    let rNumber=0;
    //hide some elements
    let roundCounter=document.querySelector(".round-counter");
    let scores=document.querySelector(".scores");
    let choices=document.querySelector(".choices");
    let finalScreen=document.querySelector("div.results-screen");
    let gameScreen=document.querySelector(".game-screen");
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
 }

function playRound() {

   const options=document.querySelectorAll("button");
   const computerChoice=document.querySelector(".computer-choice");
   const playerChoice=document.querySelector(".player-choice");
   options.forEach(option=>{
    option.addEventListener("click", function(){
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

   /**function resetGame(){
        rNumber=0;
        cScore=0;
        pScore=0;
   }**/




}
function compareHands(playerSelection, computerSelection){
    const result=document.querySelector(".result");   
    //if they are the same return a draw
   if(playerSelection==computerSelection){
    result.textContent=`Draw! You both picked ${playerSelection}.`;
    rNumber++;
    updateRound();
    return;
}else if(playerSelection=='rock'&&computerSelection=='paper'){
    result.textContent=`You lose! Paper beats rock.`;
    cScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='rock'&&computerSelection=='scissors'){
    result.textContent='You win! Rock beats scissors';
    pScore++; 
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='scissors'&&computerSelection=='rock'){
    result.textContent=`You lose! Rock beats scissors.`;
    cScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='scissors'&&computerSelection=='paper'){
    result.textContent=`You win! Scissors beats paper.`;
    pScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='paper'&&computerSelection=='rock'){
    result.textContent='You win! Paper beats rock.';
    pScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}else if(playerSelection=='paper'&&computerSelection=='scissors'){
    result.textContent=`You lose! Scissors beats paper.`;
    cScore++;
    rNumber++;
    updateScore();
    updateRound();
    return;
}
}

