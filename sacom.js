$(window).on('load',function() {
		$(".se-pre-con").fadeOut(2000);
	});

	
$("#scrolldown").click(function() {
    $('html, body').animate({
        scrollTop: $("#Education").offset().top
    }, 2000);
});

