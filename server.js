//require Dependencies - so we can access and use them
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const TestModel = require("./models/schema");

//connect to db
//use async await to only show we are connected after we have established a connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
    console.log(`Connected to database: ${mongoose.connection.name}`);
  } catch (err) {
    console.log("Failed to connect", err);
  }
};

connectDB();

//Middlewaref
//look into ejs and show it
app.set("view engine", "ejs");
//serves up all files from public folder
app.use(express.static("public"));
//handles urls
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    //get data from DB - specific collection
    //after data is found, then render ejs and pass data so that it can render on page
    const content = await TestModel.find();
    console.log(content);
    res.render("index.ejs", { contentKey: content });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

//Set up our server's location PORT - also cl to confirm it's running
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port`);
});
