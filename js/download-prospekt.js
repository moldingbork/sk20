$( document ).ready(function() {

/*
* Elements
*/
var $downloadProspekt = $('#prospekt-url');
var $prospektModal = $('#prospect-modal');
//var $prospektModalCover = $('#module-background');
var $prospektForm = $('#download-prospekt-form');
var $downloadProspektLinkWrapper = $('#download-prospekt-link-wrapper');
var $textarea = $('#module-textarea');
var $newletter = $('#newsLetter');
var $accept = $('#accept');
var $name = $('#prospect-form-name');
var $email = $('#prospect-form-email');
var $firm = $('#prospect-form-firm');
var $phone = $('#prospect-form-phone');
var $title = $('.title-prospekt-name');
var $description = $('#module-description');
var $loader = $('#download-prospect-loader');
var $submitText = $('#submit-text');
var $downloadCounter = $('#prospekt-download-counter');
var $textAutoDownload = $('#text-auto-download');
var $closeModal = $('#modalClose');
var $downloadProspektButton = $('#download-prospekt-btn');


 
var modalDownloadedBefore = false;



/*

=======================================
	Click on elements
=======================================

*/


/*
* Click download prospect
* Open prospekt modal
*/
$downloadProspektButton.click( function() {
	buildModal();
	fadeModalInOut();
});



/*
* Click on modal cover
* Close modal

$prospektModalCover.click(function() {
	fadeModalInOut();
	resetModal();
});*/

/*
* Click close modal
*/
$closeModal.click(function() {
	 fadeModalInOut();
	resetModal();
});


/*
* Submit prospekt form
*/
$prospektForm.submit(function(e) {
	e.preventDefault();

	var verifiedInputs = verifyInput();	
	if(!verifiedInputs) {
		return false;
	}
	
	$.ajax({
		url: $(this).attr('action'),
		method: $(this).attr('method'),
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			// show loader
			$submitText.addClass('hide');
			$loader.removeClass('hide');
		},
		success: function() {
			modalDownloadedBefore = true;
			$prospektForm.addClass('hide');
			$description.addClass('hide');
			$downloadProspektLinkWrapper.removeClass('hide');

			// push to array
			autoDownloadProspect();
		},
		error: function() {
			//$('#error-message').show();
		}
	});
});



/*

=======================================
	Help functions
=======================================

*/


function buildModal() {
	if(modalDownloadedBefore){
		buildSuccesModal();
		return false;
	}

	$textAutoDownload.removeClass('hide');
}

/*
* Download prospect automatically
*/ 
var count = 5;
function autoDownloadProspect() {
	if(count === 5){
		$downloadCounter.text(count);
	}
	setTimeout(
		function() 
		{
		count--;
		$downloadCounter.text(count);
		if(count > 0){
			autoDownloadProspect();
		}else{
			$('#prospekt-url').get(0).click();
			$textAutoDownload.addClass('hide');
			count = 5;
		} 
	}, 1000);
}




/*
* Very requested inputs
*/
function verifyInput() {

	// variables
	var $acceptTerms = $accept.is(':checked');
	var $inputName = ($name.val().length) >= 1;
	var $inputEmail = ( (($email.val().length) >= 1) && isValidEmailAddress($email.val()) ) ;
	var $inputFirm = ($firm.val().length) >= 1;
	var $inputPhone = ($phone.val().length) >= 1;

	// check accept of terms
	if(!$acceptTerms || !$inputName || !$inputEmail || !$inputFirm || !$inputPhone){
		showOrHideErrorMessages($acceptTerms, $inputName, $inputEmail, $inputFirm, $inputPhone);
		return false;
	}

	// ensure to remove errors
	showOrHideErrorMessages($acceptTerms, $inputName, $inputEmail, $inputFirm, $inputPhone);
	return true;

}

/*
* Check if email input is valid
*/
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    return pattern.test(emailAddress);
}

/*
* Show Or hide error elements
*/
function showOrHideErrorMessages(acceptTerms, inputName, inputEmail, inputFirm, inputPhone) {
	
	// handle error in name
	if(!inputName){
		$name.addClass('error');
	}else{
		$name.removeClass('error');
	}

	// handle error in email
	if(!inputEmail){
		$email.addClass('error');
	}else{
		$email.removeClass('error');
	}

	// handle error in firm
	if(!inputFirm){
		$firm.addClass('error');
	}else{
		$firm.removeClass('error');
	}

	// handle error in phone
	if(!inputPhone){
		$phone.addClass('error');
	}else{
		$phone.removeClass('error');
	}

	// handle error in accept terms
	var $labelAccept = $accept.parent().find('label');
	if(!acceptTerms){
		$labelAccept.addClass('error');
	}else{
		$labelAccept.removeClass('error');
	}
}


/*
* Hide or show download prospekt modal
*/
function fadeModalInOut() {
	if($prospektModal.hasClass('active')){
		// hide modal
		$prospektModal.removeClass('active'); 
		$('body').removeClass('stop-scroll');
		return false;
	}

	// show modal
	$('body').addClass('stop-scroll');
	$prospektModal.addClass('active');

}

/*
* Reset modal
*/
function resetModal() {
	setTimeout(
		function() 
		{
			$prospektForm.removeClass('hide');
			$description.removeClass('hide');
			$downloadProspektLinkWrapper.addClass('hide');
			$textAutoDownload.removeClass('hide');

			// clear textarea
			$textarea.text('');
			$textarea.val('');

			// clear checkboxes
			$newletter.prop( "checked", false );
			$accept.prop( "checked", false );

			// remove loader
			$loader.addClass('hide');
			$submitText.removeClass('hide');
	}, 500);

}


/*
* Build succes modal
*/
function buildSuccesModal() {
	$textAutoDownload.addClass('hide');
	$prospektForm.addClass('hide');
	$description.addClass('hide');
	$downloadProspektLinkWrapper.removeClass('hide');
}



});

