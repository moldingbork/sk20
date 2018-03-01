$( document ).ready(function() {

	/*
	* Elements
	*/
	var indretningTitle = $('#indretningsforslagTitle');
	var indretningText = $('#indretningsforslagText'); 


	/*
	* Texts to each image 
	*/
	var imgTextsIndretning = {
		img1: {
			id: 1,
			title: 'PARTERRE',
			text: 'Plantegning med testindretning til potentiel domicillejer. Parterre etagen indeholder parkeringskælder, kantine med produktionskøkken, omklædningsfaciliteter, arkiver samt arbejdsarealer med kontorer og mødelokaler.<br><br>18 stk	arbejdspladser i KONTORER<br>96 stk	siddepladser i KANTINE<br>30 stk pladser i MØDERUM.'
		},
		img2: {
			id: 2,
			title: 'STUEETAGE',
			text: 'Etagen indeholder receptionsområde, konference, atrium, mødelokaler, gæstekantine samt arbejdsarealer med kontorer og møderum.<br><br>36 stk	arbejdspladser i KONTORER<br>142 stk siddepladser i KONFERENCERUM<br>90 stk	pladser i MØDERUM'
		},
		img3: {
			id: 3,
			title: 'Etage 1',
			text: 'Etagen indeholder primært arbejdsarealer med touch down pladser, kontorer og møderum.<br><br>80 stk	arbejdspladser i KONTORER<br>44 stk	pladser i MØDERUM'
		}
	};

	/*
	* Set text to first img
	*/
	indretningTitle.html(imgTextsIndretning.img1.title);
	indretningText.html(imgTextsIndretning.img1.text);

	

	/*
	* Set carousel: indretningsforslag
	*/
	$("#carousel-indretningsforslag").slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1, 	
		/*lazyLoad: 'ondemand',*/
		//adaptiveHeight: true,
		autoplay:false,
	    arrows: true,
	    prevArrow: '<div class="slick-arrow left"><div class="slick-inner"> <span class="fa fa-angle-left arrow-left"></span><span class="sr-only">Prev</span></div></div>',
	    nextArrow: '<div class="slick-arrow right"><div class="slick-inner"><span class="fa fa-angle-right arrow-right"></span><span class="sr-only">Next</span></div></div>'
	});


	/*
	* Event listener on image change in indretningsforslag carousel
	*/ 
	$('#carousel-indretningsforslag').on('afterChange', function(event, slick, currentSlide, nextSlide){

	    var textID = parseInt($(slick.$slides.get(currentSlide)).attr('textID'));    
	    var value = getImgTextIndretning(textID);
	    console.log(value);
	    
		setTextIndretning(value);
	});

	/*
	* Set text to img in indretningsforslag carousel
	*/
	function setTextIndretning(value) {
		indretningTitle.html(value.title);
		indretningText.html(value.text);
	}

	/*
	* Find value and return img text
	*/
	function getImgTextIndretning(textID) {
		var returnValue;
		$.each(imgTextsIndretning, function(key, value) { 
	    	if(value.id === textID){
	    		returnValue = value;	
	    		return false;
	    	}
		}); 
		return returnValue;
	}

});