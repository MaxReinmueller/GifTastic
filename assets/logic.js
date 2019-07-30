// key words that generate the gifs
var gifsButtons = ['dog', 'cat', 'horse'];
var userPick = ('');
// loop that creates buttons
$(document).ready(function () {
    for (i = 0; i < gifsButtons.length; i++) {
        var topicBtn = $("<button>");
        topicBtn.addClass("gifButton");
        topicBtn.attr("id", gifsButtons[i]);
        topicBtn.val(gifsButtons[i])
        topicBtn.text(gifsButtons[i]);
        $(".topicButtons").append(topicBtn);
    }

    // retrives value from button when clicked
    $(document).on("click", ".gifButton", function () {
        var clicked = $(this).val();
        userPick = clicked;
        // userPick.push(clicked);
        console.log(userPick);
        getGiffs();
    });


    // links Giphy
    function getGiffs() {
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q= " + userPick + "&api_key=24KQv6B23tfAoFCOnUdjAn1ZKbOjZWr2&limit=10&rating=g");
        xhr.done(function (res) {
            console.log("success got data", res);

            var giffs = res.data
            $("#gifImages").empty();
            for (i in giffs) {
                $("#gifImages").append("<img src='" + giffs[i].images.original.url + "' style='height:350px; width:350px;'/>")
            }
        });
    }


    // adds new buttons to array
    $("#addGifs").on("click", function () {
        var newButton = $("<button>").text($("#serchText").val());
        newButton.addClass("gifButton");
        newButton.attr("id", newButton.text());
        newButton.val(newButton.text());
        $(".topicButtons").append(newButton);
        gifsButtons.push(newButton);
        userPick = newButton.val();
        console.log(userPick);
        getGiffs();
    });
});