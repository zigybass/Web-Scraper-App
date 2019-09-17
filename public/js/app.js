$(document).ready(function() {
  $("#scrapeAlert").css("display", "none");

  $("#scrapeBtn").on("click", function(e) {
    e.preventDefault();

    $("#scrapeAlert").css("display", "initial");
    setTimeout(() => {
      $("#scrapeAlert").css("display", "none");
    }, 5000);
    console.log("click");
    $.get("/scrape", function () {
      }).then(() => {
          console.log("scraped")
      })
    });

    $("#showArticles").on("click", e => {
        e.preventDefault()
        $.get("/show", data => {
            data.forEach( item => {
                $("#listArticles").append(
                    `<li class="list-group-item">
                        <p>${item.title}</p>
                        <a href="${item.url}">Go To Article</a>
                    </li>`
                )
            })
        })
    })
    

  });
