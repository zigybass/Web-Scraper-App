const db = require("../models")
const scraper = require("../scraper")
// const Article = require("../models/Articles.js");

module.exports = function (app) {

    app.get("/scrape", function (req, res) {
        console.log("scraper")
        scraper()
        db.Article.find({}).then( articles => {
            res.json(articles)
        })
        })

    app.get("/show", (req, res) => {
        db.Article.find().then( articles => {
            res.json(articles)
        })
    })

    app.post("/saveArticle/:id", (req, res) => {
        console.log(req.params)
        db.Saved.insertMany(req.params).then( articles => {
            res.json(articles)
        })
    })
        
    }