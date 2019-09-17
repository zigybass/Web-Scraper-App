const db = require("../models")
const scraper = require("../scraper")
// const Article = require("../models/Articles.js");

module.exports = function (app) {

    app.get("/scrape", function (req, res) {
        console.log("scraper")
        scraper()
        res.send("Good Job")
        })
    }