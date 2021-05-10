var dropdown = $('.dropdown-toggle');
var jumbotron = $(".jumbotron");
var button = $("#result");
var a = 0;
var dropdownLinks = $('.dropdown-menu a');
var scroll_pos = 0;
var varParis = $('.Paris');
var varBali = $('.Bali');
var varIndia = $('.India');
var varGrandCanyon = $('.GrandCanyon');
var varIsland = $('.Island');
var varAll = [];
varAll.push(varParis, varBali, varIndia, varGrandCanyon, varIsland);

/* ======
   PLACES
   ====== */

var Paris = 0;
var Bali = 0;
var India = 0;
var GrandCanyon = 0;
var Island = 0;


dropdown.click(function (event) {
    jumbotron.toggle();


});

$(document).click(function (e) {

    if (!$(e.target).is(dropdownLinks)) {

        dropdownLinks.click(function (event) {
            a = 1;
        });

        if (a == 0) {
            jumbotron.show();
        }
    }

});


button.click(function (event) {


    $.each(varParis, function( index, value ){
        if(value.checked){
            Paris +=1;
        }
    });
    $.each(varIndia, function( index, value ){
        if(value.checked){
            India +=1;
        }
    });
    $.each(varBali, function( index, value ){
        if(value.checked){
            Bali +=1;
        }
    });
    $.each(varIsland, function( index, value ){
        if(value.checked){
            Island +=1;
        }
    });
    $.each(varGrandCanyon, function( index, value ){
        if(value.checked){
            GrandCanyon  +=1;
        }
    });

    var arrayCounters = [];
    arrayCounters.push(Paris, India, Bali, Island, GrandCanyon);
    var biggest = Math.max.apply(Math, arrayCounters);
    if (Paris === biggest) {
        jumbotron.html("<h1 style='letter-spacing:3px;'>Paris</h1><hr><img class='resultImg' src='https://images.unsplash.com/photo-1522459346908-436e555a0e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80' alt=''>");
    } else if (India === biggest) {
        jumbotron.html("<h1 style='letter-spacing:3px;'>India</h1><hr><img class='resultImg' src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80' alt=''>");
    } else if (Bali === biggest) {
        jumbotron.html("<h1 style='letter-spacing:3px;'>Bali</h1><hr><img src='https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='' class='resultImg'>");
    } else if (Island === biggest) {
        jumbotron.html("<h1 style='letter-spacing:3px;'>Iceland</h1><hr><img class='resultImg' src='https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80' alt=''>");
    } else if (GrandCanyon === biggest) {
        jumbotron.html("<h1 style='letter-spacing:3px;'>Grand Canyon</h1><hr><img src='https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80' alt='' class='resultImg'>");
    }
});


$(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 100) {
        $("#bs-nav-demo").css('background-color', 'rgba(0, 0, 0, 0.7)');
    } else {
        $("#bs-nav-demo").css('background-color', '');
    }
});



