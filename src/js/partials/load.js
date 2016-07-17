$(document).ready(function() {
	loader();
	$('.js-search').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		if ($(this).hasClass('active')){
			var top = 0;
		}
		else{
			var top = -140;
		}

		$('.searchText-header').animate({
			top: top
		}, 500, function(){
			$(this).find('input').focus();
		});
	});
});

var loader = function(){
	$('.loader-wrapper').animate({
		opacity: 0
	}, 1000, function(){
		$('body').css({
			'overflow' : 'visible'
		});
		$(this).hide();
	});
};