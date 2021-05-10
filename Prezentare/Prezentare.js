var dropdown = $('.dropdown-toggle');
var jumbotron =  $(".jumbotron");
var body = $("body");
var a = 0;
var dropdownLinks = $('.dropdown-menu a');
var carouselID = $("#imageCarousel");
var scroll_pos = 0;
var linkuri = ["../Capitale/AmericaN/AmericaN.html","../Capitale/AmericaS/AmericaS.html","../Capitale/Europa/Europa.html",
			  "../Capitale/Africa/Africa.html","../Capitale/Asia/Asia.html","../Capitale/Australia/Australia.html"];
var nimereala =  Math.floor(Math.random() * 6);
var linkCapitale = $("#linkCapitale");
var linkCapitale2 = $("#linkCapitale2");

linkCapitale.attr('href', linkuri[nimereala]);
linkCapitale2.attr('href', linkuri[nimereala]);

dropdown.click(function(event) {
	jumbotron.toggle();
});

$(document).click(function(e){
	if(!$(e.target).is(dropdownLinks)){

		dropdownLinks.click(function(event){
			a = 1;
		});

		if (a == 0 ){
		    jumbotron.show();
		}
	}

});

carouselID.carousel();

$(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 100) {
                    $("#bs-nav-demo").css('background-color', 'rgba(0, 0, 0,0.7)');
                } else {
                    $("#bs-nav-demo").css('background-color', '');
                }
            });





