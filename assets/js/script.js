$('document').ready(function() {
	var now = new Date(),
    	currentYear = now.getYear();
    
    if (currentYear < 1900) {
    	currentYear = currentYear+1900
    }
    
    $('.year').text(currentYear);
    
	$('body').on('activate.bs.scrollspy', function () {
		var navLabel = $('#menu ul li.active a').attr('href').replace('#', '');
		ga('send', 'event', 'nav', 'enter', navLabel);
	});
	
	$('#formInscricao').on('submit', function(e) {
		e.preventDefault();
		ga('send', 'event', {
			'eventCategory' : 'form',
			'eventAction'   : 'submit',
			'eventLabel'    : 'inscricao',
			'hitCallback'   : function () {
				$('#formInscricao').off('submit');
				$('#formInscricao')[0].submit();
			}
		});
		return false;
	});
	
	/*$('ul.nav li a').on('click', function(e) {
		var index = $('ul.nav li a').index(this),
			diffHeader = 50, //$('.navbar-header').height(),
			topTarget = $(".content-block:eq("+index+")").offset().top - diffHeader;

		$('html, body').animate({
            scrollTop: topTarget
        }, 500);
	});

	$('.navbar-brand').on('click', function(e) {
		$('html, body').animate({
            scrollTop: 0
        }, 500);
	});*/
});