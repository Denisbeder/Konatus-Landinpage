import isMobile from './is-mobile';

export function menuToggle() {
	$(".menu-toggle").click(function(e) {
		e.preventDefault();
		if ($(this).hasClass("fa-bars")) {
			$(".menu")
				.css("display", "flex")
				.addClass("open");
			$(this)
				.removeClass("fa-bars")
				.addClass("fa-times");
		} else {
			$(".menu")
				.css("display", "none")
				.removeClass("open");
			$(this)
				.removeClass("fa-times")
				.addClass("fa-bars");
		}
	});
}

export function handleColorMenu() {
	setTimeout(function() {
		var pageActiveDownload =
			$(".cd-section.visible").prop("id") == "page-download";
		if (pageActiveDownload) {
			$(".header").addClass("bg-transparent");
		} else {
			$(".header").removeClass("bg-transparent");
		}
	});
}

export function showMenu() {
	handleColorMenu();
	var wHeight = $(window).height();
	var startTop;

	if (wHeight <= 768 && wHeight > 576) {
		startTop = 500;
	} else if (wHeight <= 576) {
		startTop = 305;
	} else {
		startTop = 750;
	}
	startTop = isMobile() ? 50 : startTop;

	var handle = function() {
		var scrollTop = $(document).scrollTop();
		if (scrollTop >= startTop) {
			$(".header").addClass("header-dark");
		} else {
			$(".header").removeClass("header-dark");
		}
	};
	$(document).scroll(function() {
		handleColorMenu();

		return handle();
	});
	return handle();
}

export function menuAction() {
	var mobile = isMobile() ? 0 : 0;
	$("[data-navigate]").each(function(index, element) {
		var name = $(element).data("navigate");
		$(element).click(function() {
			$("html, body").animate(
				{
					scrollTop: $("#page-" + name).offset().top - mobile,
				},
				800
			);

			if ($(".menu").hasClass("open")) {
				$(".menu")
					.css("display", "none")
					.removeClass("open");
				$(".menu-toggle")
					.removeClass("fa-times")
					.addClass("fa-bars");
			}
		});
	});
}

