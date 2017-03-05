
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

} else {
    var scroll_start = 0;
    var startchange = $('#spetcial');
    var offset = startchange.offset();
    $('#navigation').css('background-color', 'transparent');
    $('#navigation').css('border-bottom', 'none');
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();
            if(scroll_start+1 > offset.top) {
                $("#navigation").css('background-color', 'white');
                $("#navigation").css('border-bottom', 'thin rgba(80, 80, 80, 0.1) solid')
            } else {
                $('#navigation').css('background-color', 'transparent');
                $('#navigation').css('border-bottom', 'none');
            }
        });
    }
}