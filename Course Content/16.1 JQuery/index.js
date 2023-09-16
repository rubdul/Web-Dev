// alert('Working')


// Let's use JQuery to change the h1 text color to red
$("h1").css("color","red");

// What if you put your JQuery script in the head of your html code
// If you want to protect the script from trying to prematurely access the JQuery library you can use a callback function on the document itself
$(document).ready(function() {$("h1").css("color","red")});


// To select elements in JQuery you can substitute the $ sign for the document.querySelector() element
$("button").css("background-color","green"); // Jquery doesn't differentiate between all the elements of one of them


// To change the style properties or analyze them with JQuery you can use the .css methods with the eleent in question
console.log($('h1').css("font-size")); // to get the font-size only have one argument

// $('h1').css("font-size","5rem"); // to change the font-size add two arguments


// Use the addClass method to add a class to an object
$('h1').addClass('big-title');


// Changing text with jquery
$("h1").text('New Text');
// $("button").html("<em>Please Click Me</em>"); // you don't need to use innerHTML you can just use .html


// Let's also see how we can manipulate attributes with JQuery do this with the attr method
console.log($('img').attr("src"));

$("a").attr("href","https://leetcode.com/explore/");
$("a").text("LeetCode")


// we can also find all of the classes attached to an element
console.log($("h1").attr('class'));


// Now let's try to add event listeners
$("h1").click(function() {
    // $("h1").css("color","blue");
});


// Adding an event listener to multiple instances can also be done easily
 $("button").click(function(){
    $("h1").css("color","purple");
 });


// We can also set up event listeners text inputs and keypresses
$("input").keypress(function(event){
    console.log(event.key);

    $("h1").text(event.key);

    // console.log($("input").val);
    
});

// Adding the event listener to the entire website or using the on method for any event listener
$("h1").on("mouseover", function(event) {
    $("h1").css("color","orange");
    console.log("mouseover")
});

// We can also remove or add html elements with JQuery's before() after() prepend() and append() methods

// before and after create the element before or after the html code it references
$("h1").before('<button>New</button>');

$("h1").after('<button>New</button>');

// prepend and append will create the new element before the end of the closing tag of the element referenced
$("h1").prepend('<button>prepend</button>');// before the content of the h1 element
$("h1").append('<button>append</button>');// right after the content



// Now let's do animations with JQuery

// hide method
$("button").on("click", function() {
    $("h1").hide();
});


// fadeOut or fadeIn fadeToggle methods
$("#reveal").on("click", function() {
    $("h1").fadeIn();
});

// The animate method for css values that haave numerical values
$("button").on("click", function() {
    $("h1").animate({opacity: '30%'});
});


// You can chain animations so be careful about setting them up
$("button").on("click", function() {
    $("h1").slideUp().slideDown();
});