$(document).ready(function(){
	$('.js-cleditor').cleditor({
		width : '100%',
		height : '245',
		controls : 'bold italic bullets link unlink image',
		bodyStyle: "background: #fff; margin:10px 15px; font-family: Proxima; font-size: 15px; line-height: 20px; color: #1d1d1d; cursor:text"
	});

	$('.js-auth').on('click', function(e){
		e.preventDefault();
		$('.reply-block, .wysiwyg-block').toggleClass('hide');
	});
});
