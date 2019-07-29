// key words that generate the gifs
var starterGifs = ['dog', 'cat', 'horse'];
var userPick = [];
// loop that creates buttons
$(document).ready(function() {
    for (i = 0; i < starterGifs.length; i++) {
        console.log(starterGifs[i])
        var topicBtn = $("<button>");
        topicBtn.addClass("gifButton");
        topicBtn.attr("data-letter", starterGifs[i]);
        topicBtn.text(starterGifs[i]);
        $("#topicButtons").append(topicBtn);
    }
});


// links Giphy
function getGiffs(){
    
var xhr = $.get("https://api.giphy.com/v1/gifs/search?q= "+ userPick + "&api_key=24KQv6B23tfAoFCOnUdjAn1ZKbOjZWr2&limit=10");
xhr.done(function (res) {
    console.log("success got data", res);

    var giffs = res.data

    for (i in giffs) {
        $("#gifImages").append("<img src='" + giffs[i].images.original.url + "' style='height:350px; width:350px;'/>")
    }
});
}

$("#addGifs").on("click", function() {
    var newButton = $("<button>").text($("#serchText").val());
        newButton.addClass("");
        $("#topicButtons").append(newButton);
        starterGifs.push(newButton);
        userPick.push(newButton);
        getGiffs()
        console.log(userPick);
  });