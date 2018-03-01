window.onload = function() {
  	console.log('navbar js loaded');

  	var navbar = $('#navbar');
  	var navbarOrginaleBurger = $('.navbar-toggler');
  	var navbarBurgerIcon = $('.navbar-toggler-icon');
  	var navbarCloseIcon = $('#navbar-close');
  	var navbarBurgerAlbaek = $('#navbarBurger');


  	/*
  	*
  	*/
  	navbarBurgerAlbaek.click(function() {
  		navbarOrginaleBurger.trigger("click");
  		navbarBurgerAlbaek.addClass('hide');
  	});

  	/*
  	* Set burger menu / close logo 
  	*/
	navbarOrginaleBurger.click(function() {
	 	if(navbar.hasClass('navbar-expanded')) {
	 		console.log('close navbar');
	 		navbarCloseIcon.addClass('not-active');
	 		navbarBurgerIcon.show();
	 		navbar.addClass('navbar-closed');
	 		navbar.removeClass('navbar-expanded');
	 	}else{
	 		console.log('open navbar');
	 		navbarBurgerIcon.hide();
	 		navbarCloseIcon.removeClass('not-active');
	 		navbar.addClass('navbar-expanded');
	 		navbar.removeClass('navbar-closed');
	 	}
	 });
};
