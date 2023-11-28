import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "BarbieMan";
const yourPassword = "password1";
const yourAPIKey = "f515c3cc-339e-4a3b-b453-d125698728e2";
const yourBearerToken = "5560bc37-76f6-4f72-b50d-9213a29bd1c5";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try {
    var response = await axios.get(API_URL + "random");
    var result = response.data;
    console.log(JSON.stringify(response));

    res.render('index.ejs',{
      content:JSON.stringify(result)
    })

  } catch (error) {
    console.error("Error",error.message);
    res.render("index.ejs",{
      content:error.message
    });
  
  };
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
 

  try {
     
    
    var response = await axios.get('https://secrets-api.appbrewery.com/all?page=2', {
        auth: {
        username: yourUsername,
        password: yourPassword,
     }
    });

      var result = JSON.stringify(response.data);
      console.log(response);
      res.render('index.ejs',{content:result});

  } catch (error) {
    console.error("Error",error.message);
    res.render("index.ejs",{
      content:error.message
    });
  
  }
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  try {
    var response = await axios.get(API_URL + "filter?socre=5&apiKey=" + yourAPIKey);
    var result = response.data;
    console.log(JSON.stringify(result));

    res.render('index.ejs',{
      content:JSON.stringify(result)
    })

  } catch (error) {
    console.error("Error",error.message);
    res.render("index.ejs",{
      content:error.message
    });
  
  };
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  
  try {
     
    
    var response = await axios.get(API_URL + "secrets/42", {
        headers: {
        Authorization: `Bearer ${yourBearerToken}`} 
    });

      var result = JSON.stringify(response.data);

      res.render('index.ejs',{content:result});

  } catch (error) {
    console.error("Error",error.message);
    res.render("index.ejs",{
      content:error.message
    });
  
  }
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
