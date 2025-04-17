/*
o	Create a Tic-Tac-Toe game grid using your HTML element of choice.
o	When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
o	A heading should say whether it is X's or O's turn and change with each move made.
o	A button should be available to clear the grid and restart the game.
o	When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
*/

// Global variables used throughout the program
let player_mark = 'X';
let winner_mark = 'Z';
let click_count = 0;

// board is an array of 9 positions that either holds an empty string or the players mark
let board = [9];

// player is a structure to hold the chosen mark and an optional value for even/odd turn
var player = [{mark: 'Z', turn: 0}, {mark: 'Z', turn: 1}];

// When the page loads all game grid buttons are disabled
disableGame();






// Event listener to clear and reset the game grid button text
document.querySelector("#clear").addEventListener('click', () => {
    clear();

});

//If the Start button is clicked, the game requests players to choose their mark
document.querySelector("#start").addEventListener('click', () => {
    setPlayerMark();
        
    //Block of code to display the chosen marks for the game players on the page
    displayPlayerMark();

    //On start reset all variables and clear the game board, then enable the game button grid
    disableGame();
    enableGame();

    // Assign the mark of the current turn to the global variable and display whose 
    // turn on the page
    displayPlayerTurn(player_mark);

});



// Grab the parent node to all the game grid buttons
var theParent = document.querySelector("#theDude");

// Event listener calling function to process whichever button is clicked by any player
theParent.addEventListener("click", (e) => {makeMarkOnButton(e, player_mark), false});
   




    // This function gets the target id for each clicked item and sets the players mark
    // as the button text. It stores a record of the button choice in the board array,
    // then checks for the winner, and switches player turns.
    function makeMarkOnButton(e) {
        if(e.target !== e.currentTarget)  {
            var clickedItem = e.target.id;
            
            //Grab the button being clicked
            const element = document.querySelector(`#${clickedItem}`);
            
            //Process the button as long as it is not disabled, insert the players mark
            // and increment the click counter.
            if(element.disbled !== true) {
                element.innerHTML = player_mark;
                element.disabled = true;
                click_count++;

                // Function to set the board variable with the clicked button id to the players mark
                setBoardWithClickedButtonID(clickedItem);
                // Check for winner and display a message
                winnerOrDraw();

                //Switch turns for the player mark and display the current turn
                switchTurns();
    
            }
            else 
                console.log("Element is not good");

        }
        // Stop the listening event propagation once a button is clicked.
        e.stopPropagation();
        
    }   




    // Function to set the players mark
    function setPlayerMark() {
        let response = prompt('Player 1 please select your mark: type X or O');
            if (response === 'X' || response === 'x') {
                player[0].mark = 'X';
                player[1].mark = 'O';
            }
            else
                {
                    player[0].mark = 'O';
                    player[1].mark = 'X';

            }
            player_mark = player[0].mark;
    }

    //Switch turns for the player mark and display the current turn
    function switchTurns() {
        if (player_mark === 'X'){
            player_mark = 'O';
            displayPlayerTurn(player_mark);
        }
        else{
            player_mark = 'X';
            displayPlayerTurn(player_mark);
        }

    }


    
    // Uses the event target id for the clicked item to find the id of the button clicked
    // and assign the current player's mark to the board array element.
    function setBoardWithClickedButtonID(clickedItem) {
        switch(clickedItem){
            case "button1": board[0] = player_mark;
                            break;
            case "button2": board[1] = player_mark;
                            break;
            case "button3": board[2] = player_mark;
                            break;
            case "button4": board[3] = player_mark;
                            break;
            case "button5": board[4] = player_mark;
                            break;
            case "button6": board[5] = player_mark;
                            break;
            case "button7": board[6] = player_mark;
                            break;
            case "button8": board[7] = player_mark;
                            break;
            case "button9": board[8] = player_mark;
                            break;
            default:    console.log("Button name error");
          
         }


    }

    // Function to display the players mark
    function displayPlayerMark() {
        let mark1 = $("#mark-1");
        let mark2 = $("#mark-2");
            mark1.text(player[0].mark);
            mark2.text(player[1].mark);


    }

    //Function to display the current players turn
    function displayPlayerTurn(player_mark) {
        $("#turn").text(`Player ${player_mark}`);

    }


    // Function to check whether all horizontal, vertical and diagonal elements have a players mark
    // Function sets the winner_mark and returns true if a winner is found.
    function winner_check(mark) {
        let winner = false;
        if( board[0] === mark && board[1] == mark && board[2] === mark ) {winner_mark = mark; winner = true;}
        else if( board[3] === mark && board[4] === mark && board[5] === mark ) {winner_mark = mark; winner = true; }
        else if( board[6] === mark && board[7] === mark && board[8] === mark ) {winner_mark = mark; winner = true;}
        else if( board[0] === mark && board[3] === mark && board[6] === mark ) {winner_mark = mark; winner = true;}
        else if( board[1] === mark && board[4] === mark && board[7] === mark ) {winner_mark = mark; winner = true;}
        else if( board[2] === mark && board[5] === mark && board[8] === mark ) {winner_mark = mark; winner = true;}
        else if( board[0] === mark && board[4] === mark && board[8] === mark ) {winner_mark = mark; winner = true;}
        else if( board[2] === mark && board[4] === mark && board[6] === mark ) {winner_mark = mark; winner = true;}
       
        return winner;
    }

    // Check for the winner during play and assign the winner
    // Show the bootstrap alert message, reset click counter and disable the game
    function winnerOrDraw() {
        if(click_count < 9 && winner_check(player_mark) == true) {
            winner_mark = player_mark;
            showAlert("Player " + player_mark + " Wins!", "success");
            click_count = 0;
            disableGame();
        }
        // Check for a non winning situation after all buttons are pressed
        else if(click_count === 9 && winner_check('X')==false && winner_check('O')==false) {
            showAlert("It's a Draw!", "warning");
            click_count = 0;
        }


    }



    // Function to disable the game button grid and reset the board and score card
    function disableGame() {
        let element;
        click_count = 0;
        for(let i = 1; i <= 9; i++) {
            element = document.querySelector(`#button${i}`);
            element.disabled = true;
            //element.innerHTML = "_";
            board[i-1] = '';
            element = document.querySelector("#mark-1");
            element.innnerHTML = "_";
            element = document.querySelector("#mark-2");
            element.innnerHTML = "_";
            element = document.querySelector("#turn");
            element.innnerHTML = "Player _";
            
        }
    }

    // Function to enable all the game buttons and reset the button text to default
    // It sets the board array to the empty string
    function enableGame() {
        let element;
        click_count = 0;
        for(let i = 1; i <= 9; i++) {
            element = document.querySelector(`#button${i}`);
            element.disabled = false;
            element.innerHTML = "_";
            board[i-1] = '';
            clearAlert();
        }
    }

    // Same as the previous function except the buttons are disabled, this forces the 
    // user to restart the game.
    function clear() {
        let element;
        click_count = 0;
        for(let i = 1; i <= 9; i++) {
            element = document.querySelector(`#button${i}`);
            element.disabled = true;
            element.innerHTML = "_";
            board[i-1] = '';
            clearAlert();
            
        }
    }

    // This function shows a bootstrap style alert message, if passed the message and type.
    function showAlert(message, type) {
        const alertContainer = document.getElementById('alert-container');
      
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.setAttribute('role', 'alert');
      
        alertDiv.innerHTML = `
          ${message}
          
        `;
      
        alertContainer.appendChild(alertDiv);
      }

      // This funciton clears the alert from the screen.
      function clearAlert() {
        const alertContainer = document.getElementById('alert-container');
      
        alertContainer.innerHTML = '';
       
      }