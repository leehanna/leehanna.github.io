
$(window).scroll(function() {
    var scrolledY = $(this).scrollTop();
    $('#home-header').css('top','+'+ (scrolledY/15) + 'px');
    $('#works').css({
        opacity: function() {
            // var e = document.querySelector('.square');
            // var elementHeight = window.getComputedStyle(e).height / 2;
            var elementHeight = $('.workbox.square').first().height()/2,
            opacity = ((1 - (elementHeight - scrolledY) / elementHeight) * 0.9) + 0.1;
            return opacity;
        }
    });
    if (scrolledY > 40) {
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

document.addEventListener('DOMContentLoaded', function () {
	var msg = getParameterByName('msg');
	if (msg == 'success') {
		$('#success-msg').show();
	} 
});