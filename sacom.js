//fade out the preload gif while the website is loading
$(window).on('load',function() {
		$(".se-pre-con").fadeOut(1500);
	});

//on clicking the Let us Begin button scroll down to education section and add the class 'in' to the Bachelors button to make it uncollapse
$(document).ready( function () {
	$( "#scrolldown" ).on('click', function() {
		$('html, body').animate({
        scrollTop: $("#Education").offset().top
    }, 2000).promise().done(
    function(){
        $("#demo1").addClass("in");
    });
		
	});
});

//if the user scrolls down instead of clicking the Let us begin button, Uncollapse the Bachelors button the first time only
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 700; 
     $triggered_times = 0;        // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test && $triggered_times==0) {
			$("#demo1").addClass("in");
			$triggered_times=1;
    }
});


/*$("demo1").one('scroll',function () {
		$("#demo1").addClass("in");
});*/

