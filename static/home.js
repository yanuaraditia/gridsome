$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    getHe();
});
$(window).resize(function() {
    getHe();
});

function getHe() {
    var hei = $('.header-top').height();
    $('.mt-sec').css('padding-top',hei+'px');
}
$('.dark-mode').click(function(){
    var body = $('body');
    body.toggleClass('dark');
    var darkBtn = $('.dark-mode-icon');
    if(body.class()='dark') {
        darkBtn.removeClass('ms-Icon--Sunny');
        darkBtn.addClass('ms-Icon--ClearNight');    
    }
    else {
        darkBtn.removeClass('ms-Icon--ClearNight');
        darkBtn.addClass('ms-Icon--Sunny');
    }
});
