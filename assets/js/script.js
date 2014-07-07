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
});