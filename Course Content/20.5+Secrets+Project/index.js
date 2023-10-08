//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

const correctPassword = 'ILoveProgramming';

// First import the correct packages
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Set up the server variables
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// use the body parser to grab the password
app.use(bodyParser.urlencoded({extended: true}));

// now set up the server request
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req,res)=>{
    var password = req.body.password;
    console.log(req.body.password);
    
    //check if the password works and send a page for success or failure
    if(password == correctPassword){
        res.sendFile(__dirname + "/public/secret.html")
    }
    else{
        res.send('<h1>Incorrect Password please try again</h1>');
    }

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

