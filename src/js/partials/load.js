$(document).ready(function () {
	loader();
});

var loader = function(){
	$('.loader-wrapper').animate({
		opacity: 0
	}, 3000, function(){
		$('body').css({
			'overflow' : 'visible'
		});
		$(this).hide();
	});
};