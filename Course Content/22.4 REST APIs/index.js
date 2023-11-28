import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "19b5fda1-d66f-48f0-aa9d-32375eb9fbb3";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  var secret = req.body;
  console.log(secret);
  try {
    var response = await axios.post(API_URL + 'secrets',secret,config);
    res.render('index.ejs',{content:'Your secret is safe with me'});
  

  } catch (error) {

    res.render("index.ejs", { content: JSON.stringify(error.message) });
  }
}); 

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  var secret = req.body;
  console.log(secret)
  try {
    var response = await axios.put(API_URL + 'secrets/' + searchId,secret,
    config);
    res.render('index.ejs',{content:secret});
    console.log(secret)

  } catch (error) {

    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
  var secret = req.body;
  console.log(secret)
  try {
    var response = await axios.patch(API_URL + 'secrets/' + searchId,secret,
    config);
    res.render('index.ejs',{content:secret});
    console.log(secret)

   } catch (error) {
    
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    
  }
});


app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.

  var secret = req.body;
  console.log(secret)
  try {
    var response = await axios.delete(API_URL + 'secrets/' + searchId,secret,
    config);
    res.render('index.ejs',{content:JSON.stringify(response.data)});
    console.log(secret)

   } catch (error) {
    
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    
  }


});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
