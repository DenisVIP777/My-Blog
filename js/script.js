$('document').ready( function(){
	$('.slider').slick({
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        touchThreshold: 7,
        vertical: true,
        verticalSwiping: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: ".sliderbig"
    });

    $('.sliderbig').slick({
        arrows: false,
        fade: true,
        vertical: false,
        centerMode: false,
        infinite: true,
        asNavFor: ".slider"
    });

    $('.slider_testimonials').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    });
});