// test if it is connected
// alert("The javascript is connected")

// Create arrays for the button colors of the person playing and the pattern of the game
var buttonColours = ["green","red","yellow","blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// New Sequence function to create the next button for simon array
function nextSequence() {

    // Scrub the value of the userClickedPattern
    userClickedPattern = [];


    // Increment the level of the game
    level++;
    $("h1").text("Level " + level);
    
    // generate a new number new between 0 and 3
    var nextNum = Math.floor(Math.random() * 3);

    // Translate the number into a color 0=green, 1=red, 2=yellow,3=blue
    var nextColor = buttonColours[nextNum] ;
    
    // Add the new color to gamePattern array 
    gamePattern.push(nextColor);

    // Animate the button that was pressed based on it's ID
    $("#" + nextColor).fadeOut(100);
    $("#" + nextColor).fadeIn(100);
    
    // play the sound effect for the next color button pressed
    var audio = new Audio("sounds/" + nextColor +".mp3");
    audio.play();
    

}


// create the animate press function
function animatePress(pressedClass) {

    $(pressedClass).addClass("pressed");

    // Make the timeout for the animation
    setTimeout(function() {
        $(pressedClass).removeClass("pressed")
    },100);


}



// Next up let's add a jquery handler to find what button the player clicked and add it to their personal array
$(".btn").on("click",function(){

    // Find the id of the button pressed
    var colorPressed = $(this).attr("id");

    // add the color pressed to the user's chosen array
    userClickedPattern.push(colorPressed);

    // Add the pressed class to the clicked button and play the sound
    animatePress("#"+colorPressed);
    var audio = new Audio("sounds/" + colorPressed +".mp3");
    audio.play();

    // Call the checkIndex click function
    var currentIndex = userClickedPattern.length - 1;
    
    checkAnswer(currentIndex);


});



// Make the game recognize keypress
$(document).on("keypress", function(){


    // call the nextSequence function if the level is 0
    if (level === 0 ){
       $("h1").text("Level " + level);
       $('h1').css("color"," #FEF2BF")
        nextSequence();
        
        
    }

});

// Create a function to check the user's answers vs the game pattern
function checkAnswer(index) {

    var gameColor = gamePattern[index];
    var userColor = userClickedPattern[index];

    // Check if the last color picked by the user is the same as the game's color
    if(gameColor == userColor){
        console.log("success");
        // Check if length of user clicked pattern equals colorPattern
            if (userClickedPattern.length === gamePattern.length){
            // call the nextSequence function and scrub the userClickedPattern within it
            setTimeout(function(){nextSequence()}, 1000);
            console.log("nextSequence")
            
            }
    }
    else if(gameColor != userColor){
        console.log("incorrect");
        gameOver();
    }

}



// The Game Over function 
function gameOver() {
 
    if(level != 0){
    //  play the game over sound
    var gameOverAudio = new Audio("sounds/wrong.mp3")
    gameOverAudio.play();

    // Give the game a red background flash
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },100);

    //  Set the level to 0 and pattern to empty to reset the game
    level = 0;
    gamePattern = [];
    
    // Change the title ot game over
    $("h1").text("Game Over. Press any key to restart")
    $("h1").css("color","red");
    }
}