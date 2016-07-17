/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js

/*
 * Custom
 */
//= partials/header.js
//= partials/load.js

//= partials/jquery.nice-select.js

$(document).ready(function() {
  $('select').niceSelect();
});