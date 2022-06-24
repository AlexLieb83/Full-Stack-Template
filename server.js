//require Dependencies - so we can access and use them
const express = require("express");
const app = express();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = "templateDB",
  collection;

MongoClient.connect(dbConnectionString).then((client) => {
  console.log("Connected to Database");
  db = client.db("templateDB");
  collection = db.collection("testk l");
});

//Set up our server's location PORT - also cl to confirm it's running and which port
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port`);
});
