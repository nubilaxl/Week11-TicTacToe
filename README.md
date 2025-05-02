# Week11-TicTacToe

 This HTML and javascript web project for the Tic Tac Toe game. It allows users to start, clear the game board, and features locking of position buttons once a player takes their turn. This project demonstrates bootstrap alerts, buttons, and javascript event listeners.

## Live Demo URL

Check out the game board [Tic-Tac-Toe] (https://nubilaxl.github.io/Week11-TicTacToe/) click Start to begin and select your mark x or o.

## Technologies used

* JavaScript programming language
* Bootstrap
* JQuery
* HTML

## Favorite Features
### DOM object manipulation
* Finding the correct javascript and jquery code to gain access to manipulate the display and mark buttons was a challenge. To overcome this challenge jquery and javascript references were employed. A global array variable and modularized functions for switching between players and displaying the mark helped me to solve this problem.
### Global Event Listeners
* It was a challenge to manage all 9 buttons at once. The solution came from research, an algorithm for using a global event listener for all game board buttons made managing the clicks a snap.
### Layout of board with Bootstrap grid
* Designing the layout of the control board and the game board was challenging. Bootstrap grid was the solution using parent containers, rows and primary buttons. To get the control board layout each section was subdivided under a small container that was one-third width of the screen. 

## Code Snippets

### Main Code to run the game
```javascript

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

```
## Installation
The local environment require node packet manager, and http server
Check your system using command: npm -v 
If no version install from nodejs.org
Then install http server using command: npm install -g http-server

To make a local copy of of the code, clone the repository
```
git clone https://github.com/nubilaxl/Week11-TicTacToe
cd Week11-TicTacToe
```
Run npm in project directory to pull down dependencies
```
npm install
```
Then within the project directory start http-server
```
http-server
```

The server will show the localhost url to plug into your browser

## Contributions
Pull requests, feature requests, and bug reports are welcome. Please open an issue first so that we may discuss.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact Info
Email: nubila.levon@outlook.com 
LinkedIn:  https://www.linkedin.com/in/nubila-levon/ 