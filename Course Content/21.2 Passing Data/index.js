import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// we need to get the amount of letters from the names posted on the front-end form
// After that we will send them into the front end 
app.get("/", (req, res) => {
  res.render("index.ejs");
  
});

app.post("/submit", (req, res) => {
  res.render("index.ejs",
  { first_name: req.body["fName"],
  last_name: req.body["lName"]

});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
