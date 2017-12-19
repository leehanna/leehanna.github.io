
$(window).scroll(function() {
  if ($(document).scrollTop() > 40) {
    $('#navigation').addClass('shrink');
  } else {
    $('#navigation').removeClass('shrink');
  }
});

// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Give the parameter a variable name

$(document).ready(function() {
	var msg = getParameterByName('msg');
	if (msg == 'success') {
		$('#success-msg').show();
	} 

    // $(window).bind('scroll', function(e){
    //     parallaxScroll();
    // });
    // function parallaxScroll(){
    //     var scrolledY = $(window).scrollTop();
    //     $('.section-header').css('top','+' + ((scrolledY*1.2)) + 'px');
    // }
});