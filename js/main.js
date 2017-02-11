function initMap() {
	var myLatLng = {lat: 46.4866411, lng: 30.7332505};


	var map = new google.maps.Map(document.getElementById('map'), {
		center     : myLatLng,
		scrollwheel: false,
		zoom       : 18
	});

}

(function () {

	'use strict';


	$(function () {

		$(document).on('click', '.head-nav-menu-item-link', function (e) {

			e.preventDefault();

			var elemId = $(this).attr('href');

			if (elemId.length > 2) {
				var top = $(elemId).offset().top;

				$('body').animate({
					scrollTop: top
				}, 1500);
			}

		});


		$('.works-slider').slick({
			slidesToShow  : 1,
			slidesToScroll: 1,
			autoplay      : false,
			arrows        : true,
			dots          : true
		});

		$('.team-slider').slick({
			slidesToShow  : 3,
			slidesToScroll: 1,
			autoplay      : false,
			arrows        : true
		});

		$(document).on('click', '.contact form .send', function (e) {

			var inputName = $('.contact form .name'),
				inputEmail = $('.contact form .email'),
				inputMsg = $('.contact form .msg');

			e.preventDefault();

			$('.contact form').find('.error').removeClass('error');

			if (inputName.val().length == 0) {

				inputName.addClass('error');

			} else if (inputEmail.val().length == 0) {

				inputEmail.addClass('error');

			} else if (inputMsg.val().length == 0) {

				inputMsg.addClass('error');

			} else if (inputName.val().length !== 0 && inputEmail.val().length !== 0 && inputMsg.val().length !== 0) {

				$('.contact form input').removeClass('error');

			}

		});


		$(function () {
			$('.btn-up').mouseover(function () {
				$(this).animate({opacity: 0.65}, 100);
			}).mouseout(function () {
				$(this).animate({opacity: 1}, 100);
			}).click(function () {
				$('.btn-up').click(function () {
					$('html, body').animate({scrollTop: 0}, 500);
					return false;
				})
			});

			$(window).scroll(function () {
				if ($(document).scrollTop() > 0) {
					$('.btn-up').fadeIn('slow');
				} else {
					$('.btn-up').fadeOut('slow');
				}

			});


		});

		$(function () {

			var infoSlider = $('.info-slider');

			infoSlider.mouseenter(function () {
				$(this).css('right', '0px');
			});

			infoSlider.mouseleave(function () {
				$(this).css('right', '-203px');
			});

		});




	});

})();

