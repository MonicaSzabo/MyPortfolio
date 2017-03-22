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
        // if(wH <= 817) {
        //    $('.border').css({'overflow-y': 'inherit'});
        // } else {
        //    $('.border').css({'overflow-y': 'scroll'});
        // }

        var borderHeight = wH * .50;
        var innerBlock = borderHeight - 100;

        if(wW > 1389) {
            var innerBlockWidth = wW * .74;
            $('.bodytext').css({width: innerBlockWidth});

        } else {
            $('.bodytext').css({width: "90%"});
        }

        $('.background').css({height: wH});
        $('.border').css({height: borderHeight});
        $('.bodytext').css({height: innerBlock});

    }
    //Resizes on window resize
    window.onresize = function () {
        windowH();
    };
    //On initial load will size
    windowH();
    
});