const cheerio = require("cheerio");
const axios = require("axios")

module.exports = function (app) {

    axios.get("https://www.motortrend.com/").then( (data) => {

        const $ = cheerio.load(data.data)
        const siteArticles = []

        $("h3 a").each( (i, elem) => {
            siteArticles[i] = $(this).text()
        })

        console.log(siteArticles)
    })

}

