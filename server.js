const express = require("express");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");
const Article = require("./models/Articles")

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

const articles = [];
axios.get("https://www.caranddriver.com/news/").then(data => {
  const $ = cheerio.load(data.data);
  const titles = $(".item-title")
  $('.item-title').each(i => {
      const {data: title} = titles[i].children[0]
      const {href: url} = titles[i].attribs;
      console.log(articles);
      const article = new Article({ [title]: url});
      article.save( err => {
          if (err) return console.log(err)
      })

    //   articles.model("Article", );
    //   articles.save((err, articles) => {
    //       if (err) return console.log(err);

    //   })

  })
});

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on Port: " + PORT);
});
