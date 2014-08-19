function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

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
		ga('send', 'event', {
			'eventCategory' : 'form',
			'eventAction'   : 'submit',
			'eventLabel'    : 'inscricao',
			'hitCallback'   : function () {
				$('#formInscricao').off('submit');
				$('button[name=submit]').trigger('click');
			}
		});
		return false;
	});

	$(".navbar-nav li a").on('click', function(event) {
		$(".navbar-collapse").collapse('hide');
	});

	$('#btnEcerrado').on('click', function(e) {
		ga('send', 'event', 'click', 'btn', 'encerrado');
	});
});