// global variables
var gifsButtons = ['dog', 'cat', 'horse', 'hippo', 'rhino', 'fish', 'chicken'];
var userPick = ('');

// loop that creates buttons
$(document).ready(function () {
    for (i = 0; i < gifsButtons.length; i++) {
        var topicBtn = $("<button>");
        topicBtn.addClass("gifButton btn btn-primary btn-sm");
        topicBtn.attr("id", gifsButtons[i]);
        topicBtn.val(gifsButtons[i])
        topicBtn.text(gifsButtons[i]);
        $(".topicButtons").append(topicBtn);
    }

    // links Giphy
    function getGiffs() {
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q= " + userPick + "&api_key=24KQv6B23tfAoFCOnUdjAn1ZKbOjZWr2&limit=10&rating=g");
        xhr.done(function (res) {
            console.log(res)
            var giffs = res.data

            $("#gifImages").empty();

            for (i in giffs) {
                var rating = (giffs[i].rating);
                R = rating.toUpperCase()
                rated = ("Rated: " + R);

                var giffy = $("<img height='200px' width='200px'>")
                giffy.attr('src', giffs[i].images.original.url, 'datastate', 'animated')
                giffy.attr('src', giffs[i].images.original_still.url, 'datastate', 'still');
                giffy.addClass("gifTile");

                var animated = ("<img src='" + giffs[i].images.original.url + "'class='gifTile' style='height:200px; width:200px;'/>")
                var still = ("<img src='" + giffs[i].images.original_still.url + "'class='gifTile' style='height:200px; width:200px;'/>")
                
                var theGiff = $('<div class="gifCard">');
                theGiff.append(rated).append(giffy);

                $("#gifImages").append(theGiff);

            }            
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
    $(".addGifs").on("click", function () {
        var newButton = $("<button>").text($("#searchText").val());
        newButton.addClass("gifButton btn btn-primary btn-sm");
        newButton.attr("id", newButton.text());
        newButton.val(newButton.text());
        $(".topicButtons").append(newButton);
        gifsButtons.push(newButton);
        userPick = newButton.val();
        console.log(userPick);
        getGiffs();
    });
});

    // animates giffs on click
    $(document).on("click", ".gifTile", function () {
        console.log($(this).attr('src'))
        // var state = 

    //    $(this).attr('src', 'res.data.images.original.url')
        

        // var state = $(this).attr('dataState')
        
        // if (state = 'still') {
        //     $(this).attr remove still
        //     add animate
        // } else {
        //     remove animate
        //     add still
        // }
    });
