$(document).ready(function() {
  const savedArticles = [];

  $("#scrapeAlert").css("display", "none");

  $("#scrapeBtn").on("click", function(e) {
    e.preventDefault();

    $("#scrapeAlert").css("display", "initial");
    setTimeout(() => {
      $("#scrapeAlert").css("display", "none");
    }, 5000);
    console.log("click");
    $.get("/scrape", function() {}).then(data => {
      console.log(data);
      data.forEach(item => {
        $("#listArticles").append(
          `<li class="list-group-item">
                    <p>${item.title}</p>
                    <a href="${item.url}">Check Out Article</a>
                    <button value="${item._id}" id="saveArticle" class="btn btn-secondary">Save Article</button>
                    <button class="btn btn-secondary saveNote">Save Note</button>
                </li>`
        );
      });
    });
  });

  $("#showArticles").on("click", e => {
    e.preventDefault();
    $.get("/show", data => {
      console.log(data);
      // data.forEach( item => {
      //     $("#listArticles").append(
      //         `<li class="list-group-item">
      //             <p>${item.title}</p>
      //             <a href="${item.url}">Check Out Article</a>
      //             <button id="saveArticle" class="btn btn-secondary">Save Article</button>
      //             <button class="btn btn-secondary saveNote">Save Note</button>
      //         </li>`
      //     )
      // })
    });
  });

  $(document).on("click", "#saveArticle", e => {
    e.preventDefault();
    const savedId = e.currentTarget.value;
    const savedObj = { id: savedId };
    console.log(savedId);
    $.post("/saveArticle/" + savedId, savedObj, (data, err) => {
      console.log("saved article?")
      
    }).then( () => {
      console.log("saved")
    });
  });

  $(document).on("click", ".saveNote", () => {
    $("#modal").css("display", "block");
  });

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
