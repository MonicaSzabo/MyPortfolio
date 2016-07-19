$(document).ready(function() {

    //On mouseover on the portfolio images, will show the correct caption
    $('.portPic').hover(function() {
        var id = "#" + $(this).attr('id');
        var idNum = id.slice(-2);
        var capID = "#caption" + idNum

        $(capID).css('display', 'inherit');

    }, function() {
        var id = "#" + $(this).attr('id');
        var idNum = id.slice(-2);
        var capID = "#caption" + idNum

        $(capID).css('display', 'none');
    });
    
});