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

//Middleware
app.set("view engine", "ejs");
//serves up all files from public folder
app.use(express.static("public"));
//handles urls
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Set up our server's location PORT - also cl to confirm it's running
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port`);
});
