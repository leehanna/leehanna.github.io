
$(window).scroll(function() {
    var scrolledY = $(this).scrollTop();

    // parallax
    var imgPos = scrolledY / 10 + 'px';
    $('#home-header').css('transform', 'translate(-50%,' + imgPos + ')');

    // fade in
    $('#works').css({
        opacity: function() {
            var elementHeight = $('.square').first().height() / 2,
            opacity = ((1 - (elementHeight - scrolledY) / elementHeight) * 0.9) + 0.1;
            return opacity;
        }
    });

    // expand and shrink nav bar on scroll
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