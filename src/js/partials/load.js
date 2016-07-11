$(document).ready(function () {
	setTimeout(loader, 3000);
});

var loader = function(){
	$('.loader-wrapper').animate({
		opacity: 0
	}, 2000, function(){
		$('body').css({
			'overflow' : 'visible'
		});
	});
};