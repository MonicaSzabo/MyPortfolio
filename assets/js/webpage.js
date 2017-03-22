$(document).ready(function() {

    //On mouseover on the portfolio images, will show the correct caption
    $('.portPic').on('mouseover', function() {
        var id = "#" + $(this).attr('id');
        var idNum = id.slice(-2);
        var capID = "#caption" + idNum;

        $(capID).css('visibility', 'inherit');

    });

    $('.caption').on('mouseleave', function() {
        var id = "#" + $(this).attr('id');
        var idNum = id.slice(-2);
        var capID = "#caption" + idNum;

        $(capID).css('visibility', 'hidden');
    });


    //Height stays 100% of the screen
    function windowH() {
         var wH = $(window).height();

         var wW = $(window).width();

         //Mobile responsiveness
         if(wW <= 767) {
            wH = 200;
            $('.right-bar').css({'overflow-y': 'inherit'});
         } else {
            $('.right-bar').css({'overflow-y': 'scroll'});
         }

         $('.background').css({height: wH});

    }
    //Resizes on window resize
    window.onresize = function () {
            windowH();
    };
    //On initial load will size
    windowH();
    
});