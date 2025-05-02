//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

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