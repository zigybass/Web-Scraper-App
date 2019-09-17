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
                        <a href="${item.url}">Check Out Article</a>
                    </li>`
                )
            })
        })
    })

    $(document).on("click", ".list-group-item", () => {
        $("#modal").css("display", "block")
    })
    

    $(document).on("click", ".close", function(e) {
        e.preventDefault();
        $("#modal").css("display", "none");
      });

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };


  });
