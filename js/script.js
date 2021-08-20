$('.container').scroll(function () {
    const wh = $(window).height();
    const topBody = $(this).scrollTop();
    if (topBody > wh) {
        $('#btn-up').removeClass("hide");
    } else $('#btn-up').addClass("hide");
});

$('#btn-up').click( function(e) {
    e.preventDefault();
    const id = $(this).attr("href");
    const top = $(id).offset().top;
    $('.container').animate({scrollTop: top}, 500);
});


$(".navigation .navigation-item").click( function(e){
    e.preventDefault();
    const id = $(this).attr("href");
    const top = $(id).offset().top;
    $('.container').animate({scrollTop: top}, 500);

});

$("#btn-toggle").click(function(){
    $("#popular-posts").slideToggle(1000);
    if ($(this).text().toLowerCase() ==="hide"){
        $(this).text("Show");
    } else $(this).text("Hide");

});




