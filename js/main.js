$("#footer").load("footer.html");

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".work").click(function() {
      $(this).children('img').eq(0);
      window.location = $(this).children('div.overlay').eq(0).data("location");
      // window.location = $(".work .overlay").data("location");
      return false;
    });
    $(".thumb").click(function() {
      window.location = $(".thumb .overlay").data("location");
      return false;
    });
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