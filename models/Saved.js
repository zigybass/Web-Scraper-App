const mongoose = require("mongoose");


  const savedSchema = new mongoose.Schema({
    id: String
  });

  const Saved = mongoose.model("Saved", savedSchema);

  module.exports = Saved;