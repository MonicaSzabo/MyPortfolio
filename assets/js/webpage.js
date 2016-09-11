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
    
});