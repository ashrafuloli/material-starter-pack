(function ($) {
	'use strict';
	$(document).ready(function () {

		/*-------------------------------------------
			Sticky Header
		--------------------------------------------- */

		let win = $(window);
		let sticky_id = $(".header-area");
		win.on('scroll', function () {
			let scroll = win.scrollTop();
			if (scroll < 245) {
				sticky_id.removeClass("sticky-header");
			} else {
				sticky_id.addClass("sticky-header");
			}
		});

		/*------------------------------------
            Overlay Close
		--------------------------------------*/
		$(window).scroll(function () {
			if ($(this).scrollTop() !== 0) {
				$('#scrollUp').fadeIn();
			} else {
				$('#scrollUp').fadeOut();
			}
		});

		$('#scrollUp').on('click', function () {
			$("html, body").animate({scrollTop: 0}, 600);
			return false;
		});

	});
})(jQuery);