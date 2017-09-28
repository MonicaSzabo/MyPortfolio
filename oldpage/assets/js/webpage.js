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
    // function windowH() {
    //     var wH = $(window).height();
    //     var wW = $(window).width();

    //     var borderHeight = wH * .50;
    //     var innerBlock = borderHeight - 100;

    //     //Closes the gap on wide screens
    //     if(wW > 1389) {
    //         var innerBlockWidth = wW * .74;
    //         $('.bodytext').css({width: innerBlockWidth});

    //     } else {
    //         $('.bodytext').css({width: "90%"});
    //     }

    //     // Mobile responsiveness
    //     if(wH > 600) {
    //         $('.background').css({height: wH});
    //         $('.border').css({height: borderHeight});
    //         $('.bodytext').css({height: innerBlock});
    //     } else {
    //         $('.background').css({height: "1000px"});
    //         $('.border').css({height: "530px"});
    //         $('.bodytext').css({height: "430px"});
    //     }

    // }
    // //Resizes on window resize
    // window.onresize = function () {
    //     windowH();
    // };
    // //On initial load will size
    // windowH();
    
});