const mongoose = require("mongoose");


  const articlesSchema = new mongoose.Schema({
    name: String
  });

  const Article = mongoose.model("Article", articlesSchema);

  module.exports = Article;
