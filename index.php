<!doctype html>

<html lang="en">

<head>
  <title>SK20</title>
  <?php include_once "templates/header.php"; ?>
  <!-- slick -->
  <link rel="stylesheet" type="text/css" href="css/slick/slick-theme.min.css"/>
  <link rel="stylesheet" type="text/css" href="css/slick/slick.min.css"/>
</head>



<!-- Test -->


<body>
<div class="body-wrapper">
    
 
<!-- navbar -->
<?php include_once "templates/download-prospekt.php"; ?>

<!-- navbar -->
<?php include_once "templates/navbar.php"; ?>

<!-- hero -->
<?php include_once "templates/hero.php"; ?>

<!-- section: sundkrogskaj -->
<?php include_once "templates/section-carousel-sundkrog.php"; ?>

<!-- section: indretningsforslag -->
<?php include_once "templates/section-carousel-indretningsforslag.php"; ?>

<!-- section: området -->
<?php include_once "templates/section-carousel-area.php"; ?>

<!-- section: kontakt -->
<?php include_once "templates/section-contact.php"; ?>

 </div>

  <!-- framework -->
  <script src="js/framework/jquery.min.js"></script>
  <script src="js/b-lazy.min.js"></script>  
   <script>
    /*
        (function() {
            // Initialize
            var bLazy = new Blazy({ 
              offset: 500 // Loads images 100px before they're visible
            });

            
        })(); */

        (function() {
            // Initialize
            var bLazy = new Blazy({ 
                  offset: 500,
                  breakpoints: 
                  [{
                      width: 500, // max-width
                      src: 'data-src-small'
                      },
                      { 
                      width: 1600, // max-width
                      src: 'data-src-medium'
                  }]
              });

              var bLazyCarousel = new Blazy({ 
                  offset: 500,
                  container: '.single-item', // Default is window
                  breakpoints: 
                  [{
                      width: 500, // max-width
                      src: 'data-src-small'
                      },
                      { 
                      width: 1600, // max-width
                      src: 'data-src-medium'
                  }]
              });

              $('.single-item').on('beforeChange', function(event, slick, direction){
                bLazyCarousel.revalidate();
                // left
              });
        })();


  </script>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
  <!--
  <script src="js/framework/popper.min.js"></script> -->
  <script src="js/framework/bootstrap.min.js"></script>
  <script src="js/framework/slick.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


  <script type="text/javascript" src="js/navbar.min.js?v=<?=time();?>"></script>
  <script type="text/javascript" src="js/carousel-sundkrogskaj.min.js?v=<?=time();?>"></script>
  <script type="text/javascript" src="js/carousel-indretningsforslag.min.js?v=<?=time();?>"></script>
  <script type="text/javascript" src="js/carousel-area.min.js?v=<?=time();?>"></script>
  <script type="text/javascript" src="js/menu-scroll.min.js?v=<?=time();?>"></script>
  <script type="text/javascript" src="js/download-prospekt.min.js?v=<?=time();?>"></script>

</body>
</html>