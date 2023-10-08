import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import body-parser
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


// use the body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
// app.use(BodyParser.text({type:'text/html'}));

// We are going to use the res.sendFile method to send the html through this file system.
app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html")
  res.sendFile(__dirname + "/public/index.html");
});

// Use body parser to get the main tools used for this
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
