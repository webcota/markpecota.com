jQuery(document).ready(function() {

jQuery('.screen-reader-text').click(function () {
	jQuery(".inputs").toggleClass("no-show");
	if( jQuery(this).hasClass("fa-times")) {
	jQuery(this).removeClass("fa-times").addClass("fa-search");
		 } else {
			jQuery(this).addClass("fa-times").removeClass("fa-search");
		};//end else
	});// end click
}); // end ready



