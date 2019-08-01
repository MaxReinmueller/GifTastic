// global variables
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

    // links Giphy
    function getGiffs() {
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q= " + userPick + "&api_key=24KQv6B23tfAoFCOnUdjAn1ZKbOjZWr2&limit=10&rating=g");
        xhr.done(function (res) {
            console.log("success got data", res);

            var giffs = res.data

            $("#gifImages").empty();

            for (i in giffs) {
                var image = ("<img src='" + giffs[i].images.original_still.url + "'class='gifTile' style='height:350px; width:350px;'/>")
                var still = giffs[i].images.original_still.url;
                var animated = giffs[i].images.original.url;
                var rated = giffs[i].rating;
                var pOne = $("<p>").text("Rating: " + rated);
                $("#gifImages").append(image).append(pOne)

                console.log(animated);
            }

            // animates giffs on click
            $(document).on("click", ".gifTile", function () {
                console.log($(this).src);
                // $(this).attr(animated: true)
                // $(this).empty("<img>");
                // console.log($(this));
                // $(this).append("<img src='" + giffs[i].images.original.url + "'class='gifTile' style='height:350px; width:350px;'/>");
            });
        });
    }

    // retrieves value from button when clicked
    $(document).on("click", ".gifButton", function () {
        var clicked = $(this).val();
        userPick = clicked;
        console.log(userPick);
        getGiffs();
    });


    // adds new buttons to array
    $("#addGifs").on("click", function () {
        var newButton = $("<button>").text($("#searchText").val());
        newButton.addClass("gifButton");
        newButton.attr("id", newButton.text());
        newButton.val(newButton.text());
        $(".topicButtons").append(newButton);
        gifsButtons.push(newButton);
        userPick = newButton.val();
        console.log(userPick);
        getGiffs();
    });

    // $().on("click", function () {


    //     var state = $(this).attr('dataState')
    //     if (state = 'still') {
    //         $(this).attr remove still
    //         add animate
    //     } else {
    //         remove animate
    //         add still
    //     }
    // });
});