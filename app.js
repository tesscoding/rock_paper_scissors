function playerInput(){
    //take input
    let choice =prompt("Choose paper, scissors or rock");


}
function computerPlay(){
    let result = Math.floor(Math.random*3);
    return result;
}
function playRound(playerSelection, computerSelection) {
	// your code here!
    //if they are the same return a draw
    if(playerSelection==computerSelection){
        return "draw";
    }
}