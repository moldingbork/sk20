$( document ).ready(function() {
	/*
	* Set carousel: area
	*/
	$("#carousel-area").slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1, 	
		/*lazyLoad: 'ondemand',*/
		//adaptiveHeight: true,
		autoplay:false,
	    arrows: true,
	    prevArrow: '<div class="slick-arrow left"><div class="slick-inner"> <span class="fa fa-angle-left arrow-left"></span><span class="sr-only">Prev</span></div></div>',
	    nextArrow: '<div class="slick-arrow right" id="arae-right-click"><div class="slick-inner"><span class="fa fa-angle-right arrow-right"></span><span class="sr-only">Next</span></div></div>'
	});


	$(document).on('click', '#arae-right-click', function() {
        /*alert('te');*/
 	}) ;


 	$("#arae-right-click").trigger("click");

});