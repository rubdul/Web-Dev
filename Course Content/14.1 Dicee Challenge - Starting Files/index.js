// Javascript for the dice roll project

// Plan: initialize random numbers for the two players, compare the two values, and declare a winner at the end based on who has the.

// first create the random number variables between 1-6
var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

// Set up the dice
var dice1 = "images/dice" + player1 + ".png";
var dice2 = "images/dice" + player2 + ".png";

// were going to use the document commands 
document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);

// player 1 wins
if (player1 > player2) {

    document.querySelector('h1').textContent = "Player1 Wins!";
}



// player 2 wins
if (player2 > player1) {

    document.querySelector('h1').textContent = "Player2 Wins!";
}