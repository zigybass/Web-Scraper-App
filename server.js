const express = require("express");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();
const PORT = process.argv.PORT || 5050;

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/webscraperhw";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
// Middleware for app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

axios.get("https://www.motortrend.com/").then(data => {
  const $ = cheerio.load(data.data);
  

  console.log(data.data);
});

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./scrape");

app.listen(PORT, function() {
  console.log("App listening on Port: " + PORT);
});
