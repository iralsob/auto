$(document).ready(function() {
	var carType = 0;
	var wheelType = 0;
	var serviceType = 0;
	var tireType = 0;

	$('select').bind('click', function(){

		if (this.id == "car-type") {
			carType = $("#car-type :selected").val();
			$("#car-type").css('color', '#ea7230');
		} else if (this.id == "wheel-type") {
			wheelType = $("#wheel-type :selected").val();
			 $("#wheel-type").css('color', '#ea7230');
		} else if (this.id == "service-type") {
			serviceType = $("#service-type :selected").val();
			$("#service-type").css('color', '#ea7230');
		} else if (this.id == "tire-type") {
			tireType = $("#tire-type :selected").val();
			$("#tire-type").css('color', '#ea7230');
		}

		var result = parseInt(carType) + parseInt(wheelType) + parseInt(serviceType) + parseInt(tireType);

		$("#result").html(result);
	});

	$('#datepicker').datetimepicker({
	  format:'d.m.Y H:i',
	  inline:true,
	  lang:'ru',
	  minTime:'9:30',
	  step: 30,
	  maxTime: '18:30',
	  todayButton: false
	});
	

	


	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
    	itemWidth: 500,
	});

	$(".orange-gradient, .xdsoft_datepicker.active:before, .xdsoft_timepicker.active:before").pxgradient({
		step: 1,
		colors: ["#eb7632","#f5af4a"],
		dir: "y"
	});
	
	$(".black-gradient").pxgradient({
		step: 1,
		colors: ["#b0b0b4","#5d5d65"],
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
$(window).scroll(function(){
	var height = $('#promo').outerHeight()-62;
	if ( $(window).scrollTop() > height ){
		$("#nav").addClass("stickly");
	} else {
		$("#nav").removeClass("stickly");
	}
});