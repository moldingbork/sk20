$( document ).ready(function() {

	var navbarHeight = $('.navbar').outerHeight(); 
	var alert; 

	/*
	* Check if localhost
	*/
	var navbarUrl;
	var localhost = window.location.href.indexOf("localhost");
    if(localhost > -1) {
       navbarUrl = '/sk20';
    }else{
       navbarUrl = '';
    }

	/*
	Click on link in menu
	*/
	$('.nav-link').click(function(e) {
		e.preventDefault();

		var link = $(this).attr('href');
		var translate = link.indexOf('translate');

		var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

		if( mobile) {
			$('.navbar-toggler').click();
		}

		if(translate >= 0){
			alert("translate");
		}else{

			$('.nav-link').removeClass('active');
			$(this).addClass('active');

			$('html, body').animate({
		        scrollTop: $(link).offset().top - navbarHeight + 10
		    }, 1000);
		}
  	});

	

});


/*
* On scroll: Register which section are viewed an update color in menu.	
*/

var sections = ['hero' ,'sundkrogskaj', 'indretningsforslag', 'omraadet', 'kontakt'];
//var linkIsSet = false; 

$(window).on('scroll', function() {
	
	var y_scroll_pos = $('.navbar').offset().top + 55;

	for (var i = 0; i < sections.length; ++i) {
	    var section = '#' + sections[i];
	  	
	  	section = $(section);

	  	var section_top = section.offset().top;
	  	var section_bottom = section_top + section.height();

	    if(y_scroll_pos >= section_top && y_scroll_pos <= section_bottom){
	    	var link = '#nav-link-' + sections[i];
	    	$('.nav-link').removeClass('active');
	    	$(link).addClass('active');
	    }

	}
    
});






