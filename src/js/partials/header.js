$(document).ready(function(){
	$( window ).scroll(function() {
		if (window.pageYOffset > 0){
			console.log(window.pageYOffset);
			$('body').addClass('js-scroll');
		}
		else{
			$('body').removeClass('js-scroll');	
		}
	});
});


