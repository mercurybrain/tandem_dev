$(function () {

	// $('a.popup-open').on('click', function (event) {
	// 	event.preventDefault();

	// 	var gallery = $(this).attr('href');

	// 	$(gallery).magnificPopup({
	// 		delegate: 'a',
	// 		type: 'image',
	// 		tClose: 'Закрыть (Esc)', // Alt text on close button
	// 		tLoading: 'Загрузка изображения #%curr%...',
	// 		gallery: {
	// 			enabled: true,
	// 			navigateByImgClick: true,
	// 			preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
	// 			tPrev: 'Предыдущий', // Alt text on left arrow
	// 			tNext: 'Следующий', // Alt text on right arrow
	// 			tCounter: '%curr% из %total%' // Markup for "1 of 7" counter
	// 		},
	// 		image: {
	// 			tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
	// 			titleSrc: function (item) {
	// 				return item.el.attr('title') + '<small>Наши сертификаты</small>';
	// 			}
	// 		},
	// 		preloader: true,
	// 		removalDelay: 300,
	// 		mainClass: 'my-mfp-zoom-in'
	// 	}).magnificPopup('open');
	// });

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right"></i>'],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	})
	$("#phone").mask("+7(999) 999-9999");
	new ResponsiveAutoHeight('.prices__description');
	new ResponsiveAutoHeight('.prices__price');
	new ResponsiveAutoHeight('.prices__header');
});