$(document).ready(function(){
	$( window ).scroll(function() {
		if (window.pageYOffset > 0){
			$('body').addClass('js-scroll');
		}
		else{
			$('body').removeClass('js-scroll');	
		}
	});

	$('.shop-block .paper').tooltip({
		title : 'Бумажная книга'
	});

	$('.shop-block .electronic').tooltip({
		title : 'Электронная книга'
	});
});
