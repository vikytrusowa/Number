var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 26,

    // Navigation arrows
    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    }, breakpoints: {
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 26,
        }
    }

})
$('.js-close').click(function(){
    $.fancybox.close();
});
$('.header__link').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
});
$('.footer__link').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
});