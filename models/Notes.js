const mongoose = require("mongoose");

    const notesSchema = new mongoose.Schema({
        notes: Array
    });

    const Notes = mongoose.model("Notes", notesSchema);

    module.exports = Notes;