<?php

// If IE
$LazyLoadSupport = true;
$server = $_SERVER['HTTP_USER_AGENT'];

// check for ei lower than v. 11
if (preg_match('~MSIE|Internet Explorer~i', $server)) {
	$LazyLoadSupport = false;
}

// check for ei 11
if (strpos($server, 'Trident/7.0; rv:11.0') !== false) {
    $LazyLoadSupport = false;
}

?>


<div class="image-about-header" id="sundkrogskaj">
	<h1 class="uppercase greenish-blue" >SUNDKROGSKAJ 20</h1>
	<p class="black">Velkommen til et domicil med højt til loftet og havudsigt fra alle niveauer.</p>
</div>
<div class="images-about-section flex">
	<div class="carousel-section">
		<div class="slick-container">
			<div class="single-item" id="carousel-sundkrogskaj">
				<div class="item slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" textID="1">
				    <?php if($LazyLoadSupport): // if IE: show hero backup image ?> 
				   		<img class="b-lazy" 
						     src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
						     data-src="img/sundkrogskaj/carousel/fuld_atmosfaere_large.jpg"
						     data-src-small="img/sundkrogskaj/carousel/fuld_atmosfaere_small.jpg"
						     data-src-medium="img/sundkrogskaj/carousel/fuld_atmosfaere_medium.jpg"
						     alt="Fuld af atmosfære"
						/>
				    <?php else: ?>
				    	<img src="img/sundkrogskaj/carousel/fuld_atmosfaere_large.jpg">
				    <?php endif; ?>
				    
				</div>
				<div class="item slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" textID="2">
					<?php if($LazyLoadSupport): // if IE: show hero backup image ?> 
				   		<img class="b-lazy" 
						     src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
						     data-src="img/sundkrogskaj/carousel/top-placering-large.jpg"
						     data-src-small="img/sundkrogskaj/carousel/top-placering-small.jpg"
						     data-src-medium="img/sundkrogskaj/carousel/top-placering-medium.jpg"
						     alt="Fuld af atmosfære"
						/>
				    <?php else: ?>
				    	<img src="img/sundkrogskaj/carousel/top-placering-large.jpg">
				    <?php endif; ?>
				</div>
				<div class="item slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" textID="3">
					<?php if($LazyLoadSupport): // if IE: show hero backup image ?> 
				   		<img class="b-lazy" 
						     src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
						     data-src="img/sundkrogskaj/carousel/100-parkeringspladser-large.jpg"
						     data-src-small="img/sundkrogskaj/carousel/100-parkeringspladser-small.jpg"
						     data-src-medium="img/sundkrogskaj/carousel/100-parkeringspladser-medium.jpg"
						     alt="Fuld af atmosfære"
						/>
				    <?php else: ?>
				    	<img src="img/sundkrogskaj/carousel/100-parkeringspladser-large.jpg">
				    <?php endif; ?>
				</div>
				<div class="item slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" textID="4">
				    <?php if($LazyLoadSupport): // if IE: show hero backup image ?> 
				   		<img class="b-lazy" 
				         src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
				         data-src="img/sundkrogskaj/carousel/kvalitet_til_mindste_detalje_large.jpg"
				         data-src-small="img/sundkrogskaj/carousel/kvalitet_til_mindste_detalje_small.jpg"
				         data-src-medium="img/sundkrogskaj/carousel/kvalitet_til_mindste_detalje_medium.jpg"
				         alt="Kvalitet til mindste detalje"
				    />
				    <?php else: ?>
				    	<img src="img/sundkrogskaj/carousel/kvalitet_til_mindste_detalje_large.jpg">
				    <?php endif; ?>
				</div>
				<div class="item slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" textID="5">
					<?php if($LazyLoadSupport): // if IE: show hero backup image ?> 
				   		<img class="b-lazy" 
				         src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
				         data-src="img/sundkrogskaj/carousel/bliv_set_i_atrium_large.jpg"
				         data-src-small="img/sundkrogskaj/carousel/bliv_set_i_atrium_small.jpg"
				         data-src-medium="img/sundkrogskaj/carousel/bliv_set_i_atrium_medium.jpg"
				         alt="Blid set i husets centrale atrium"
				    />
				    <?php else: ?>
				    	<img src="img/sundkrogskaj/carousel/bliv_set_i_atrium_large.jpg">
				    <?php endif; ?>
				</div>
				<div class="item slick-slide" data-slick-index="5" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" textID="6">
				    <?php if($LazyLoadSupport): // if IE: show hero backup image ?> 
				   		<img class="b-lazy" 
				         src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
				         data-src="img/sundkrogskaj/carousel/rum_til_trivsel_large.jpg"
				         data-src-small="img/sundkrogskaj/carousel/rum_til_trivsel_small.jpg"
				         data-src-medium="img/sundkrogskaj/carousel/rum_til_trivsel_medium.jpg"
				         alt="Rum til trivsel og arbejdsglæde"
				    />
				    <?php else: ?>
				    	<img src="img/sundkrogskaj/carousel/rum_til_trivsel_large.jpg">
				    <?php endif; ?>

				</div>
				<div class="item slick-slide" data-slick-index="6" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" textID="7">
				    <?php if($LazyLoadSupport): // if IE: show hero backup image ?> 
				   	<img class="b-lazy" 
				         src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
				         data-src="img/sundkrogskaj/carousel/rum_til_store_tanker_large.jpg"
				         data-src-small="img/sundkrogskaj/carousel/rum_til_store_tanker_small.jpg"
				         data-src-medium="img/sundkrogskaj/carousel/rum_til_store_tanker_medium.jpg"
				         alt="Plads til store planer"
				    />
				    <?php else: ?>
				    	<img src="img/sundkrogskaj/carousel/rum_til_store_tanker_large.jpg">
				    <?php endif; ?>

				</div>
				<div class="item slick-slide" data-slick-index="7" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" textID="8">
					<?php if($LazyLoadSupport): // if IE: show hero backup image ?> 
				   	<img class="b-lazy" 
				         src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
				         data-src="img/sundkrogskaj/carousel/klar_parat_server_large.jpg"
				         data-src-small="img/sundkrogskaj/carousel/klar_parat_server_small.jpg"
				         data-src-medium="img/sundkrogskaj/carousel/klar_parat_server_medium.jpg"
				         alt="Klar paret servér"
				    />
				    <?php else: ?>
				    	<img src="img/sundkrogskaj/carousel/klar_parat_server_large.jpg">
				    <?php endif; ?>
				    
				</div>
				<div class="item slick-slide" data-slick-index="8" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" textID="9">
					<?php if($LazyLoadSupport): // if IE: show hero backup image ?> 
				   	<img class="b-lazy" 
				         src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
				         data-src="img/sundkrogskaj/carousel/bliv_set_fra_alle_vinkler_large.jpg"
				         data-src-small="img/sundkrogskaj/carousel/bliv_set_fra_alle_vinkler_small.jpg"
				         data-src-medium="img/sundkrogskaj/carousel/bliv_set_fra_alle_vinkler_medium.jpg"
				         alt="Bliv set fra alle vinkler"
				    />
				    <?php else: ?>
				    	<img src="img/sundkrogskaj/carousel/bliv_set_fra_alle_vinkler_large.jpg">
				    <?php endif; ?>
				    
				</div>
			</div>
		</div>
	</div>
	<div class="images-about-text">
		<div class="about-text-content">
				<h3 id="sundkrogskajTitle"></h3>
				<div class="header-line"></div>
				<p id="sundkrogskajText"></p>
		</div>
	</div>
</div>


