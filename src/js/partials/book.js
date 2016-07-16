$(document).ready(function() {
	$('.js-contents').on('click', function(e){
		e.preventDefault();
		$('#contentsModal').modal();
	});

	$('.js-signature').on('click', function(e){
		e.preventDefault();
		$('#signatureModal').modal();
	});
});