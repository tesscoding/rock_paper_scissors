


function playRound() {
   const options=document.querySelectorAll("button");
   options.forEach(option=>{
    option.addEventListener("click", function(){
        const compOptions=["paper", "scissors", "rock"];
        var rand = Math.floor(Math.random()*3);
        const computerSelection=options[rand].textContent;

        const playerSelection=this.textContent;
        console.log(playerSelection,computerSelection);
        compareHands(playerSelection,computerSelection);
    })
})





}
function compareHands(playerSelection, computerSelection){
    const result=document.querySelector(".result");   
    //if they are the same return a draw
   if(playerSelection==computerSelection){
    result.textContent=`Draw! You both picked ${playerSelection}.`;
    return
}
if(playerSelection=='rock'&&computerSelection=='paper'){
    result.textContent=`You lose! Paper beats rock.`;
    return
}
if(playerSelection=='rock'&&computerSelection=='scissors'){
    result.textContent='You win! Rock beats scissors';
    return
}if(playerSelection=='scissors'&&computerSelection=='rock'){
    result.textContent=`You lose! Rock beats scissors.`;
    return
}if(playerSelection=='scissors'&&computerSelection=='paper'){
    result.textContent=`You win! Scissors beats paper.`;
    return
}if(playerSelection=='paper'&&computerSelection=='rock'){
    result.textContent='You win! Paper beats rock.';
    return
}if(playerSelection=='paper'&&computerSelection=='scissors'){
    result.textContent=`You lose! Scissors beats paper.`;
    return
}
}

playRound();