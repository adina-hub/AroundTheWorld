var dropdown = $('.dissapear');
var jumbotron =  $(".jumbotron");
var a = 0;
var dropdownLinks = $('.dropdown-menu a');
var scroll_pos = 0;

dropdown.click(function(event) {
	jumbotron.toggle();
	a = 0;
});


$(document).click(function(e){
	if(!$(e.target).is(dropdownLinks)) {
	     
	dropdownLinks.click(function(event) {
		a = 1;
	});

	if (a == 0 ){
	    jumbotron.show();
	}
	  }

});

$(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 100) {
                    $("#bs-nav-demo").css('background-color', 'rgba(0, 0, 0, 0.7)');
                } else {
                    $("#bs-nav-demo").css('background-color', '');
                }
            });




