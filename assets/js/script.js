$('document').ready(function() {
	$('ul.nav li a').on('click', function(e) {
		e.preventDefault();

		var index = $('ul.nav li a').index(this),
			diffHeader = 50,
			topTarget = $(".content-block:eq("+index+")").offset().top - diffHeader;

		$('html, body').animate({
            scrollTop: topTarget
        }, 500);
	});

	$('.navbar-brand').on('click', function(e) {
		e.preventDefault();

		$('html, body').animate({
            scrollTop: 0
        }, 500);
	});
});