$(document).ready(function() {
	$(".article-middle .info .article").dotdotdot({
		ellipsis	: '... ',
		wrap		: 'word',
		fallbackToLetter: true,
		after		: null,
		watch		: true,
		tolerance	: 0,
		callback	: function( isTruncated, orgContent ) {},
		lastCharacter	: {
			remove		: [ ' ', ',', ';', '.', '!', '?' ],
			noEllipsis	: []
		}
	});
});