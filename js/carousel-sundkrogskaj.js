$( document ).ready(function() {

	/*
	* Elements
	*/
	var sundkrogskajTitle = $('#sundkrogskajTitle');
	var sundkrogskajText = $('#sundkrogskajText');


	/*
	* Texts to each image 
	*/
	var imgTextsSundkrogskaj = {
		img1: {
			id: 1,
			title: 'Fuld af atmosfære',
			text: 'Den anerkendte arkitekt Kim Utzon har udformet den smukke ejendom med slanke, hvide søjler, højtplacerede forgreninger og asymmetriske zinktage. De store hvide  ader både udvendigt og indvendigt re ekterer lysets leg i vandspej- let og sikrer dagslys langt ind i bygningen. Ejendommen er opført med ambitionen om gensidig samhørighed med omgivelserne, og de anvendte materialer har et eksklusivt og maritimt præg med merbauplankegulve og messingdetaljer.'
		},
		img2: {
			id: 2, 
			title: 'TOPPLACERING I NORDHAVN MED METRO TIL DØREN',
			text: 'Nordhavn er en dynamisk og a rak v erhvervsbydel i has g udvikling. Dag for dag kommer nyt liv og puls  l kvarteret i takt med at ambi onerne i byudviklingen tager form. Senest åbner havnetunnellen i ul mo 2017, og forbinder Nordhavnen med Lyngbyvejen på ganske få minu er. Flere toneangivende virksomheder har valgt området  l på grund af den centrale placering i forhold  l city kombineret med orienteringen mod nord. Her kan man opleve kontakten med det smukke miljø langs havet. Og så kører Metroen fra 2019.'
		},
		img3: {
			id: 3,
			title: '+100 FRIE P-PLADSER',
			text: 'SK20 ligger super godt i forhold  l adgang med bil og cykel, og vil i løbet af 2017 blive forbundet med motorvejsne et via havne- tunnellen. Ejendommen er veludstyret med 95  lhørende parkeringspladser placeret i parkeringskælder og på terræn. Foran bygningen er der fri parkering på 10 pladser langs kajen, og langs bygningen  ndes yderligere 8 pladser. For cyklister er der overdækkede pladser på terræn og a åselige rum i parkerings- kælderen.'
		},
		img4: {
			id: 4,
			title: 'Kvalitet til mindste detalje',
			text: 'Når I har oplevet den smukke ejendom udefra, træder I ind i et helt unikt rum. Her bydes I velkommen af receptionen og den majestætiske trappe, hvorfra jeres gæster og medarbejdere kan gå på oplevelse i et storslåede atrium, som er husets hjerte. Atriumrummet er belyst fra tagvinduer i hele rummets udstrækning, der får øjet til at vandre opad. Bagvæggen i receptionen er dekoreret med Lin Utzons spektakulære kunstværk af hånddekorerede kakler, som smelter ind i den gennemførte stil. '
		},
		img5: {
			id: 5,
			title: 'BLIV SET I HUSETS CENTRALE ATRIUM',
			text: 'Det centrale atrium er en ultimativ ramme om virksomhedens aktiviteter. Rummet, som på en gang forskyder og samler, fremstår som det naturlige samlingspunkt i et hus der er både levende og dynamisk. Rummet kan bruges i mange sammenhænge, I bestemmer selv hverdan. Her kan jeres gæster få et godt indtryk af jeres professionelle ansigt udadtil. Her kan medarbejdere mødes og udveksle ideer og viden. Her kan konsulenter slå sig ned og arbejde mellem møder. Dette rum skal opleves!'
		},
		img6: {
			id: 6,
			title: 'RUM TIL TRIVSEL OG ARBEJDSGLÆDE',
			text: 'Arbejdspladsen skal være et dynamisk, inspirerende og spændende sted at være for de ansatte, og rammerne skal være med til at udbygge hver enkelt medarbejders kollektive bevidsthed om firmaets eksistensgrundlag. Kontorerne kan tilpasses jeres behov da fleksibiliteten i grundplanet er stor og giver mulighed for at indrette i større eller mindre kontorer. Gangarealerne kan udnyttes til touch down-pladser eller break out-områder og bidrage til en yderst effektiv udnyttelse af kvadratmetrene.'
		},
		img7: {
			id: 7,
			title: 'PLADS TIL STORE PLANER',
			text: 'Lejemålet har en meget effektiv bygningsdybde understøttet af enorme ovenlysvinduer i begge tagetager. Det giver dagslys helt ind i den midterste del af ejendommen og gør alle arealer brugbare. Selv med en indretning med overvægt af enkeltmandskontorer kan I opnå en attraktiv effektivitet og velbelyste arbejdsarealer.'
		},
		img8: {
			id: 8,
			title: 'KLAR PARAT SERVÉR',
			text: 'Der er også kælet for detaljerne, når det gælder spisefaciliteter og madglæde. SK20 har et fuldt udstyret produktionskøkken med tilhørende kantine mod kajen. Fra kantinen er der adgang til et privat udeareal med pergola og grønne træer.  Herfra kan medarbejdere nyde frokosten med udsigt til de mange sejlbåde - og en sjælden gang til modige badegæster som springer i fra kajen.'
		},
		img9: {
			id: 9,
			title: 'BLIV SET FRA ALLE VINKLER',
			text: 'Ejendommen har en stor synlighed i området, og kan ses fra både S-tog og Metro-linien, samt fra området ved Kalkbrænderihavnsgade langs havnen og fra Sundkrogsgade. Med jeres virksomhedslogo på facaden bliver I set af mange forbipasserende hver dag.'
		}
		,
		img19: {
			id: 19,
			title: 'RUM TIL TRIVSEL OG ARBEJDSGLÆDE',
			text: ''
		}
	};


	sundkrogskajTitle.text(imgTextsSundkrogskaj.img1.title);
	sundkrogskajText.text(imgTextsSundkrogskaj.img1.text);





	var mobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		mobile = true;
	}

	/*
	* Set carousel for sundkrogskaj
	*/
	$("#carousel-sundkrogskaj").slick({
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
	* Event listener on image change in sundkrogskaj carousel
	*/ 
	$('#carousel-sundkrogskaj').on('afterChange', function(event, slick, currentSlide, nextSlide){

	    var textID = parseInt($(slick.$slides.get(currentSlide)).attr('textID'));    
	    var value = getImgText(textID);
	    console.log(value);
	    
		setTextSundkrogskaj(value);
	});

	/*
	* Set text to img in sundkrogskaj carousel
	*/
	function setTextSundkrogskaj(value) {
		sundkrogskajTitle.text(value.title);
		sundkrogskajText.text(value.text);
	}

	/*
	* Find value and return img text
	*/
	function getImgText(textID) {
		var returnValue;
		$.each(imgTextsSundkrogskaj, function(key, value) { 
	    	if(value.id === textID){
	    		returnValue = value;	
	    		return false;
	    	}
		}); 
		return returnValue;
	}

});