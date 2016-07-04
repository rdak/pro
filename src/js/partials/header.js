$(document).ready(function(){
	$( window ).scroll(function() {
		if (window.pageYOffset > 0){
			$('body').addClass('js-scroll');
		}
		else{
			$('body').removeClass('js-scroll');	
		}
	});
});
