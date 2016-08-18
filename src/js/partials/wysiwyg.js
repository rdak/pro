$(document).ready(function(){
	tinymce.init({
	  	language: 'ru',
	    selector : '.js-wysiwyg-textarea',
	    height : 300,
	    menubar : false,
	    statusbar : false,
	    plugins: "image media link",
	    toolbar: 'bold italic bullist link unlink image media',
	    setup: function (ed) {
	        ed.on('init', function (evt) {
	            var toolbar = $(evt.target.editorContainer)
	                            .find('>.mce-container-body >.mce-toolbar-grp');
	            var editor = $(evt.target.editorContainer)
	                            .find('>.mce-container-body >.mce-edit-area');
	            toolbar.detach().insertAfter(editor);
	      });
	    },
	    content_css : '/css/main.css'
	});
	
	$('.js-auth').on('click', function(e){
		e.preventDefault();
		$('.reply-block, .wysiwyg-block').toggleClass('hide');
	});
});
