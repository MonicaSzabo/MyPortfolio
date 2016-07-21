$(document).ready(function() {

    //On mouseover on the portfolio images, will show the correct caption
    $('.portPic').on('mouseover', function() {
        console.log("from mouse over ",this)
        var id = "#" + $(this).attr('id');
        var idNum = id.slice(-2);
        var capID = "#caption" + idNum

        $(capID).css('visibility', 'inherit');

    });

    $('.caption').on('mouseleave', function() {
        console.log("from mouse leave",this)
        var id = "#" + $(this).attr('id');
        var idNum = id.slice(-2);
        var capID = "#caption" + idNum

        $(capID).css('visibility', 'hidden');
    });
    
});