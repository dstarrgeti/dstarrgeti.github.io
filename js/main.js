$("document").ready(function() {
    $('.carousel').carousel({
        interval: 2000
    });

    /* Sticky Nav for Navigation */

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 0) {
            $('.navbar').removeClass('nav-top-pos');
        }
        if ($(window).scrollTop() >= 50) {
            $('.navbar').addClass('nav-top-pos');

        }
    });
});


