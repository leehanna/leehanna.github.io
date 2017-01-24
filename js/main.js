$("#footer").load("footer.html");

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".work").click(function() {
      window.location = $(".work .overlay").data("location");
      return false;
    });
    $(".thumb").click(function() {
      window.location = $(".thumb .overlay").data("location");
      return false;
    });
    // $(".work:hover .overlay").css('opacity', '0');
    // $(".work:hover .overlay").css('visibility', 'hidden');
    // $(".thumb:hover .overlay").css('opacity', '0');
    // $(".thumb:hover .overlay").css('visibility', 'hidden');
} else {
    $(".overlay").click(function() {
      window.location = $(this).data("location");
      return false;
    });
    // $(document).ready(function(){
    //     var $window = $(window);
        
    //     $('section[data-type="background"]').each(function(){
    //         var $bgobj = $(this); // assigning the object
        
    //         $(window).scroll(function() {
    //             var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
                
    //             // Put together our final background position
    //             var coords = '50% '+ yPos + 'px';

    //             // Move the background
    //             $bgobj.css({ backgroundPosition: coords });
    //         }); 
    //     });  
    // });
}