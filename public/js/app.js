$(document).ready( function () {


    $("#scrapeBtn").on("click", function (e) {
        e.preventDefault()
        console.log("click")
        $.get("/scrape", data => {
            console.log(data)
        })
    })







})