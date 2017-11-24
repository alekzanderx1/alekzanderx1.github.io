$(window).on('load',function() {
		$(".se-pre-con").fadeOut(1500);
	});

	


$(document).ready( function () {
	$( "#scrolldown" ).on('click', function() {
		$('html, body').animate({
        scrollTop: $("#Education").offset().top
    }, 2000).promise().done(
    function(){
        $("#demo1").addClass("in");
    });
		
	});
});;


/*$("demo1").one('scroll',function () {
		$("#demo1").addClass("in");
});*/

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 700; 
     $triggered_times = 0;        // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test && $triggered_times==0) {
			$("#demo1").addClass("in");
			$triggered_times=1;
    }
});