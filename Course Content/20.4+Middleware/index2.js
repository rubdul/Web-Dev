import express from "express";
// import morgan for logging
import morgan from "morgan";

const app = express();
const port = 3000;

//  we can also create a custom function for this kind of middleware
function logger(req, res,next){
  // log the response method
  console.log(req.method)

  // log the response url
  console.log(req.url)

  // use the next method to move on to other server code to be executed
  next();
  
}

app.use(logger)

// use the morgan function in the app
// app.use(morgan("tiny"));

// We can also use or create multiple middlewares for use in this section
// app.use((req, res, next) => {
//   console.log("Request method: ", req.method);
//   next()
// })

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
