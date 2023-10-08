import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// use the body parser to get the submissions to the html form
app.use(bodyParser.urlencoded({extended: true}));

// Use the body
app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html")

});

app.post('/submit', (req,res) => {
  console.log("Your Band Name is " + req.body.street + " " + req.body.pet)
  res.send(`<h2>Your band name is:</h2> </br> <h3> ${req.body.street} ${req.body.pet}</h3>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
