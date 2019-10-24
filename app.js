
var playerSelection=playerInput();
//console.log(playerSelection);
var computerSelection=computerPlay();
//console.log(computerSelection);
var result =playRound(playerSelection, computerSelection);
if(result=="loss"){
    console.log("You lose!");
}
else if(result=="win"){
    console.log("You win!");
}
else{
    console.log("Draw.")
}
//console.log(result);
function playerInput(){
    //take input
    var choice =prompt("Choose paper, scissors or rock");
    //console.log(choice);
    return choice;

}
function computerPlay(){
    var selection=["paper", "scissors", "rock"];
    var result = Math.floor(Math.random()*3);
    //console.log(result);
    return selection[result];
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    
    
    //if they are the same return a draw
    if(playerSelection==computerSelection){
        return 'draw';
    }
    if(playerSelection=='rock'&&computerSelection=='paper'){
        return 'loss';
    }
    if(playerSelection=='rock'&&computerSelection=='scissors'){
        return 'win';
    }if(playerSelection=='scissors'&&computerSelection=='rock'){
        return 'loss';
    }if(playerSelection=='scissors'&&computerSelection=='paper'){
        return 'win';
    }if(playerSelection=='paper'&&computerSelection=='rock'){
        return 'win';
    }if(playerSelection=='paper'&&computerSelection=='scissors'){
        return 'loss';
    }
   
}