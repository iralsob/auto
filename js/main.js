$(document).ready(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		directionNav: true
	});

	$("h2").pxgradient({
		step: 1,
		colors: ["#eb7632","#f5af4a"],
		dir: "y"
	});

	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
	return false;
});