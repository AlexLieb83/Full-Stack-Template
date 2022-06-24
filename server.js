//require Dependencies - so we can access and use them
const express = require("express");
const app = express();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let db = db,
  dbConnectionString = process.env.DB_STRING,
  dbName = "",
  collection;

MongoClient.connect(dbConnectionString).then((client) => {
  console.log("Connected to Database");
  db = client.db("templateDB");
  collection = db.collection("test");
});
