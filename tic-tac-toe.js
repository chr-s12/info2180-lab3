/*Hugh Richards
Tic-Tac-Toe */

document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
	const butn = document.querySelector(".btn");
	const gameState = new Array(9).fill(null);
	 const status = document.getElementById("status");
	const introMsg = status.textContent;
	const winningState=[
	[0,1,2], [3,4,5],[6,7,8],
	[0,3,6], [1,4,7], [2,5,8],
	[0,4,8], [2,4,6]
	];
	let currentPlayer = "X";
	let endGame= false;

	function winCheck(){
		for(let i=0; i<winningState.length; i++){
		const x = winningState[i][0];
		const y = winningState[i][1];
		const z = winningState[i][2];
		
		if(gameState[x] != null && 
		gameState[x] == gameState[y] && 
		gameState[x] == gameState[z]){
		return gameState[x];
		}
		}
		return null;

	}
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }
	for(let i=0; i< squares.length;i++){
	squares[i].addEventListener("click", function() {
		if (gameState[i] != null || endGame){
			return;
		}
		squares[i].textContent = currentPlayer;
		squares[i].classList.add(currentPlayer);
		gameState[i]= currentPlayer;
		 
		const winner= winCheck();
		if (winner != null){
		status.textContent = "Congratulations " + winner + " is the Wxinner!";
		status.classList.add("you-won");
		endGame =true;
		return;
		}
		currentPlayer = (currentPlayer == "X")? "O": "X";
	});
	}
	for(let i=0;i<squares.length;i++){
		squares[i].addEventListener("mouseover", function(){
	 	squares[i].classList.add("hover");
		});
	  	squares[i].addEventListener("mouseout", function () {
        	squares[i].classList.remove("hover");
    		});
	}
	butn.addEventListener("click",function(){
	for(let i= 0; i<squares.length; i++){
	squares[i].textContent= "";
	squares[i].classList.remove("X");
	squares[i].classList.remove("O");
	gameState[i] = null;
	}
	  currentPlayer = "X";
    endGame = false;

    // Restore the status message and remove the winner styling
    status.textContent = introMsg;
    status.classList.remove("you-won");
	});
});
