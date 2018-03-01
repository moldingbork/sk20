<div class="sk20-modal" id="prospect-modal" >
	<div class="sk20-modal-wrapper">
		<div class="sk20-module">
			<button href="#" id="modalClose" class="modalClose-wrapper">
			<div class="modal-close"> </div>
		</button>
        <h1>Download prospekt for SK20</h1>
        <div class="module-line"></div>
        <div class="description" id="module-description">
          <p>Download prospekt for en detaljeret beskrivelse af ejendommen, indretning, beliggenhed m.v. samt økonomiske hovedtal.</p>
        </div>
        <form class="prospect-form" action="http://formspree.io/moldingbork@gmail.com" method="post" id="download-prospekt-form">
	        <input type="hidden" name="Emne" value="Download af prospekt">
	        <input type="hidden" name="Prospekt" value="SK20">
	        <div class="prospect-form-row flex">
				<div class="prospect-form-input">
					<span>Navn</span>
					<input class="form-prospekt-input" type="text" name="Navn" value="" maxlength="128" id="prospect-form-name">
				</div>
				<div class="prospect-form-input">
					<span>E-mail</span>
					<input class="form-prospekt-input" type="email" name="_replyto" value="" maxlength="128" id="prospect-form-email">
				</div>
			</div>
			<div class="prospect-form-row flex">
				<div class="prospect-form-input">
					<span>Firma</span>
					<input class="form-prospekt-input" type="text" name="Firma" value="" maxlength="128" id="prospect-form-firm">
				</div>
				<div class="prospect-form-input">
					<span>Telefon</span>
					<input class="form-prospekt-input" type="phone" name="Telefon" value="" maxlength="128" id="prospect-form-phone">
				</div>
			</div>
			<div class="prospect-form-row flex">
				<div class="prospect-form-textarea">
					<span>Notat</span>
					<textarea name="Notat" rows="4" id="module-textarea"></textarea>
				</div>
			</div>
			<div class="prospect-form-row flex">
				<p> 
					<input type="checkbox" id="newsLetter" name="Nyhedsbrev">
					<label for="newsLetter">Ja tak, jeg vil gerne modtage Sadolin &amp; Albæks NewsLetter med opdateret markedsviden.</label>
				</p>
			</div>
			<div class="prospect-form-row checkbox flex">
				<p>
					<input type="checkbox" id="accept" name="Accept">
					<label for="accept">Ja tak, jeg vil gerne rekvirere oplysninger om denne ejendom/grund. Ved at krydse af her accepterer jeg, at Sadolin &amp; Albæk kontakter mig pr. e-mail/telefon.</label>
				</p>
			</div>
			<div class="prospect-form-row">
				<button class="submit" type="submit"><span id="submit-text">Download prospekt</span><div class="loader hide" id="download-prospect-loader"></div></button>

			</div>
        </form>
        <div class="download-prospekt-wrapper hide" id="download-prospekt-link-wrapper">
        	<p class="bold">Tak fordi du er interesseret i at download prospekt for SK20.</p>
        	<p id="text-auto-download">Din download vil starte automatisk om <span id="prospekt-download-counter"></span>.</p> <p>Hvis du oplever problemer, kan du manuelt downloade dokumentet ved at klikke  <a target="_blank" class="lejemaal-download-prospect" href="pdf/Prospekt_Sundkrogskaj.pdf" id="prospekt-url" download="">her<span class="underline"></span></a> eller kontakte os.</p> 
        	<div class="contact-person module-contact-person">
				<div class="sk20-modal-person flex">
					<div class="sk20-modal-person-image"></div>
					<div class="sk20-modal-person-info">
						<p class="name">Kirstine Sand</p>
						<p>Direktør, Partner</p>
						<p>E: <a href="">ks@sadolin-albaek.dk</a></p>
						<p>T: <a href="">+45 70 11 66 55</a></p>
						<p>M: <a href="">+45 20 19 69 07</a></p>
					</div>
				</div>
			</div>
    

        </div>
		</div>
	</div>
</div>
