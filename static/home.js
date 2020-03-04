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
    $('.mt-sec').css('margin-top',hei+'px');
}