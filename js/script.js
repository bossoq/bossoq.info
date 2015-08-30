$(document).ready(function() {
	$("#carousel").swiperight(function() {
    		$(this).carousel('prev');
	});
	$("#carousel").swipeleft(function() {  
		$(this).carousel('next');  
	});  
});
if ( ($(window).height() + 110) < $(document).height() ) {
	$('#top-link-block').removeClass('hidden').affix({
	// how far to scroll down before link "slides" into view
	offset: {top:110}
	});
}