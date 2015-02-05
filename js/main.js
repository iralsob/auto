$(document).ready(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
    	itemWidth: 500,
	});

	$("h2, form span").pxgradient({
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

var myMap;
ymaps.ready(init);
function init () {
    myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 11
    });

    var myPlacemark = new ymaps.Placemark([55.76, 37.64], {}, {
    	iconLayout: 'default#image',
    	iconImageHref: 'http://iralsob.github.io/auto/img/pointer.png',
    	iconImageSize: [55, 58],
    	iconImageOffset: [-3, -42]
    });
    
    myMap.geoObjects.add(myPlacemark);

    var myPlacemark1 = new ymaps.Placemark([55.79, 37.54], {}, {
    	iconLayout: 'default#image',
    	iconImageHref: 'http://iralsob.github.io/auto/img/pointer.png',
    	iconImageSize: [55, 58],
    	iconImageOffset: [-3, -42]
    });
    
    myMap.geoObjects.add(myPlacemark1);

    var myPlacemark2 = new ymaps.Placemark([55.73, 37.74], {}, {
    	iconLayout: 'default#image',
    	iconImageHref: 'http://iralsob.github.io/auto/img/pointer.png',
    	iconImageSize: [55, 58],
    	iconImageOffset: [-3, -42]
    });
    
    myMap.geoObjects.add(myPlacemark2);

}