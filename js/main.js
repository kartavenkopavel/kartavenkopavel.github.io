$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="arrow-left" ></img>',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="arrow-right" ></img>',
    });

    $('a[href*="#"]').click(function() {
        $('html, body, footer').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});