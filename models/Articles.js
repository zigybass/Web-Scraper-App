const mongoose = require("mongoose");


  const articlesSchema = new mongoose.Schema({
    title: String,
    url: String
  });

  const Article = mongoose.model("Articles", articlesSchema);

  module.exports = Article;