<head>
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<?php wp_head(); ?>
	<script type="text/javascript" src="<?php bloginfo('template_directory')?>/assets/orangebox/js/orangebox.min.js"></script>
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css"  />
</head>

<body  >
<div name = "WP_Test">
Text visible
</div>
 
 <header class="menu">
		<nav class="menu-side" class="menu-toggle"><a href="http://google.com">This is a side menu</a><br/>Menu<br/>About<br/>Contact us</a></nav>
		
	</header>
  

 <div class="FLOATRIGHT" ><a href="#"class="menu-toggle">
 <a href="<?php bloginfo('template_directory')?>/assets/map.jpg" rel="lightbox"><img src="<?php bloginfo('template_directory')?>/assets/eric.jpg"></a><br/>
 <a href="<?php bloginfo('template_directory')?>/assets/seliloquy.pdf" data-ob="lightbox" data-ob_caption="ajklsdfnaskldfnaklsdfn"> link 2</a></div>


</div>	
	
		<script>
			(function() {
				var body = $('body');
				var togglesIn= 0;
				var togglesOut= 1;
				$("body").on("mousemove",function(event) {
				if (event.pageX < 231 && togglesIn !== 1) {
					//console.log('I have run on click');
					body.toggleClass('menu-open');
					togglesIn= 1;
					togglesOut=0;
				
				}
				if (event.pageX > 231 && togglesOut !== 1) {
					//console.log('I have run on click');
					body.toggleClass('menu-open');
					togglesOut= 1;
					togglesIn=0;
				}
				});
					
				})();
				
					
				
				
		</script>



</body>