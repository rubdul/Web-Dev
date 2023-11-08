// The goal is to make a dynamic website with an h1 element that displays a different message depending on whether it's the weekdays or weekends
// Use the Javascript function getDay()


// First import the correct packages
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


// Set up the server variables
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


// set up the getDay() method
var today = new Date();
today = today.getDay();
var weekPart;
var sentence;

// Conditional for weekend or weekday
switch (today) {
    case 0 || 6 :
        weekPart = "Weekend";
        sentence = "Let's relax and unwind!";
        break;

    default:
        weekPart = "Weekday";
        sentence = "Time to work hard!"
        break;
};

console.log(weekPart + " advice: " + sentence );
 

// // Send the page corresponding to date of the week it is 
// app.get("/",(req,res) =>{
//     res.sendFile(__dirname + weekPart + ".html");
// });

// Let's use res.render into the index.ejs
app.get("/",(req,res) => {

    res.render("index.ejs",{
        dayType: "a " + weekPart, advice: sentence,
    });
}
)



// Listening on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

