
// Use an event listener but don't call the function with parenthesis
// document.querySelector('button').addEventListener("click",handleClick)


// You can also use an anonymous function for this
// document.querySelector('button').addEventListener("click", function (){ 
//     alert("I got clicked!")
// })


// Experiment: Use query selectiorAll to see if I can select every button to apply this to.
// Result: I need to use a for loop, but I deceided to look up how to use a for each loop for this.
document.querySelectorAll('.drum').forEach(button=>{button.addEventListener("click", handleClick)})




// Let's find out how to play audio objects for each button like this
//  var audio = new Audio('audio_file.mp3');
//  audio.play();
var tom1 = new Audio("sounds/tom-1.mp3"); 
// tom1.play();


// We can use the term "this" to discover more about the current button object in use.

// Add keyboard key event listener to the entire document to do the same for the keyboard presses 
document.addEventListener("keydown", function(event) {
    console.log(event);

    var keyPressed = event.key;

    buttonAnimation(keyPressed);

    switch (keyPressed) {
    case "w":
        var audio = new Audio("sounds/crash.mp3")
        audio.play();
        break;

    case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

    case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;


    case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

    case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

    case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;        

    case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;


    default:
        break;
}

});



// There is also a thing called callback functions and they are the ones that get called in the second half of the addEventListener function.
// The trigger event will be the what causes the function to be called back and then used later

//  Create a function to do something when the button is pressed
function handleClick() {
    // alert('I got clicked');
    // tom1.play();
    this.style.color = 'blue';
    var buttonInnerHTML = this.innerHTML;
// We can add a switch case statement to decide based on the button text what to play

buttonAnimation(buttonInnerHTML);


switch (buttonInnerHTML) {
    case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

    case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

    case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;


    case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

    case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

    case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;        

    case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;


    default:
        break;
}

}


// Now let's add animation to the website


// Make an animation function
function buttonAnimation(currentKey) {
    
    // Add the .pressed class to the complete
    var activeButton = document.querySelector("." + currentKey);

    // Add the pressed class to the method
    activeButton.classList.add("pressed");

    // Now we need to remove the class with a time delay function
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    },100);


}


// call it from an event listener


// We can also pass in functions as argument into other functions 
// Let's try this with simple calculations

function add(num1,num2) {
    return num1 + num2;
}

function mutliply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2){
    return num1/num2 ;
}

function subtract(num1,num2){
    return num1 - num2;
}

function calculator(num1,num2, operator) {
    return operator(num1, num2);
}

// Note: You can access the debugger on the browser, you can type in debugger; functionName()
// A higher order function is a fucntion where that incorporates other functions


// Javascript object notation is similar to other objects

var bellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"]
    
}

// This is how class constructor functions work,
// WARNING: the name must be capitalized
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasworkPermit = hasWorkPermit;
    this.languages = languages;

    this.moveSuitcase = function (){
        alert("The suitcase has been moved")
    };
}
// You can also establish and call methods from the 




// Make sure to use the new key word in making the new thing
var bellBoy1= new BellBoy("Adrian", 19, true, ["French", "English"])


