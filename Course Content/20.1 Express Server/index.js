// import express from "express";
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}.`);
// });


// We are going to import the express js and set it up to port 3000 with a callback function to log it
import express from "express";
const app = express();

// To perform a normal get request from a server we must make a function that works with the .get method
app.get("/",(req, res)=>{
  console.log(req.rawHeaders);
  // response request
  // res.send("Hello World");
  // You can send HTML text
  res.send("<h1>Hello World</h1>");
});

// Use a different endpoint
app.get("/about", (req, res) => {
  res.send("<h1> About Me and youff </h1>");
});

// Moving on to the lesson on HTTP requests let's test server response codes using postman
app.put("/register", (req,res) => {
  res.sendStatus(201);
});

app.get("/Contact", (req,res) => {
  res.send( "<h1>If found please call 555-555-5555</h1>" )
});

// Activate the server listener
app.listen(3000, () => {
  console.log("Server running on port 3000");
});