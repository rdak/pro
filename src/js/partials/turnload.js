$(document).ready(function() {
	loader();
	$('a').on('click', function(e){
		e.preventDefault();
		initLoader();
	});

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

var initLoader = function(){
	$('.loader').show().css({
		"left": "100%",
		"opacity" : 1
	});

	$('.turn-loader').show().css({
		"left": "100%",
	});
// on ajax start
    setTimeout(loaderTurn, 0, $('.turn-loader'), 0, 1000, true);
	setTimeout(loaderTurn, 500, $('.loader'), 0, 1000, true);
// on ajax finish in loaderTurn function
};

var loaderTurn = function($screen, leftOffset, duration, repeat){
	$screen.animate(
		{
			left: leftOffset
		},
		{
			duration: duration,
			step: function( now, fx ){
				var c = 1;
				if (repeat){
					c = 2;
				}
		    	$(this).find('.logo-brand').css({
		    		"left" : -(now)*c
		    	});
		  	},
  			
  			//on ajax finish
		  	done : function(){
		  		if ($(this).hasClass('turn-loader') && repeat){
		  			
		  		}
		  		else if ($(this).hasClass('loader') && repeat){
		  			

		  			var ajaxTimeout = Math.random()*2000;
		  			var width = $(window).width();
		  			setTimeout(loaderTurn, ajaxTimeout, $(this), -width, 1000, false)
		  			setTimeout(loaderTurn, ajaxTimeout + 500, $('.turn-loader'), -width, 1000, false)
		  		}
		  	}
		}
    );
}

var loader = function(){
	$('.loader').animate({
		opacity : 0
	}, 1500, function(){
		$(this).hide();
	});
};