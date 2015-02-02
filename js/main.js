if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

} else {
    $(document).ready(function(){
        var $window = $(window);
        
        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object
        
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
                
                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            }); 
        });

        $('.rect').click(function(event){
            event.preventDefault();
            PreviewImage($(this).attr('id'));
            $("#dialogg").dialog('option', 'position', {my: "center", at:"center", of: window});
        });    
    });
}

var imgArray = ["thetatau", "hb", "shootdowncancer", "ctc", "cja", "hls", "letmeknow", "che", "cmg", "flavor", "typ", "littleprince"];

var dict = {
    "thetatau" : [0, "THETA TAU"],
    "hb" : [1, "HARDBOILED"],
    "shootdowncancer" : [2, "SHOOT DOWN CANCER"],
    "ctc" : [3, "CODE THE CHANGE"],
    "cja" : [4, "CHUN JIN AHM"],
    "hls" : [5, "HAAS LEADERSHIP SOCIETY"],
    "letmeknow" : [6, "LET ME KNOW"],
    "che" : [7, "CHE"],
    "cmg" : [8, "CREATIVE MARKETING GROUP"],
    "flavor" : [9, "FLAVOR"],
    "typ" : [10, "TOTAL YOUTH PRODUCTION"],
    "littleprince" : [11, "LITTLE PRINCE MAGAZINE"]
};

function mod(m, n) {
        return ((m % n) + n) % n;
}

PreviewImage = function(uri) {

  //Get the HTML Elements
  imageDialog = $("#dialogg");
  imageTag = $('#image');

  //Set the image src
  imgsrc1 = "images/rect/";
  imgsrc = imgsrc1.concat(uri).concat(".png");
  imageTag.attr('src', imgsrc);

  currImgNum = dict[uri][0];

    $('#dialogg').dialog({
      modal: true,
      position:({my: "center top", at:"center", of: window}),
      resizable: false,
      draggable: true,
      height: 700,
      width: 825,
      autoOpen: false,
      title: dict[uri][1],
      show: { effect: "fade", duration: 400 },
      fluid: true,
      buttons: [
            {
                text: "<",
                click: function() {
                    currImgNum = mod(currImgNum - 1, 12);
                    var currImgName = imgArray[currImgNum];
                    imgsrc = imgsrc1.concat(currImgName).concat(".png");
                    imageTag.attr('src', imgsrc);

                    imageDialog.dialog("option", "title", dict[currImgName][1]);
                }
            },
            {   
                text: ">",
                click: function() {
                    currImgNum = mod(currImgNum + 1, 12);
                    var currImgName = imgArray[currImgNum];
                    imgsrc = imgsrc1.concat(imgArray[currImgNum]).concat(".png");
                    imageTag.attr('src', imgsrc);

                    imageDialog.dialog("option", "title", dict[currImgName][1]);
                }
            }
       ],
       open: function(event, ui) {
            $(this).parent().css('position', 'fixed');
        }
    });

    $( "#dialogg" ).dialog( "open" );
}