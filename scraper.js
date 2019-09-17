const axios = require("axios");
const Article = require("./models/Articles");
const cheerio = require("cheerio");

module.exports = function(app) {
  axios.get("https://www.caranddriver.com/news/").then(data => {
    const $ = cheerio.load(data.data);
    const titles = $(".item-title");
    $(".item-title").each(i => {
      const { data: title } = titles[i].children[0];
      const { href: url } = titles[i].attribs;
      //   console.log(title, url);
      const article = new Article({
        title: title,
        url: url
      });
      article.save(err => {
        if (err) return console.log(err);
      });

      //   articles.model("Article", );
      //   articles.save((err, articles) => {
      //       if (err) return console.log(err);

      //   })
    });
  });
};
