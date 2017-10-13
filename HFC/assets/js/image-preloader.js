// CN 11/04/17 Function to preload all background images used in tour
(function(){
	function preload(){
		var images = new Array();
		for(var i=0; i < preload.arguments.length; i++){
			var img = new Image();
			img.src = preload.arguments[i];
			images.push(img);
		}
		
		return images;
	}
		
	preload(
		'assets/img/images/rear.jpg',
		'assets/img/images/backroom_norm.jpg',
		'assets/img/images/front_norm.jpg',
		'assets/img/images/ftwindowinside.jpg',
		'assets/img/images/leftside_norm.jpg',
		'assets/img/images/kitchen_norm.jpg',
		'assets/img/images/stairs_norm.jpg',
		'assets/img/rollover_images/rear_ro.jpg',
		'assets/img/rollover_images/backroom_ro.jpg',
		'assets/img/rollover_images/ro_ftwindowinside.jpg',
		'assets/img/rollover_images/leftside_ro.jpg',
		'assets/img/rollover_images/kitchen_ro.jpg',
		'assets/img/rollover_images/stairs_ro.jpg',
		'assets/img/b&w_images/rear_b&w.jpg',
		'assets/img/b&w_images/backroom_b&w.jpg',
		'assets/img/b&w_images/front_b&w.jpg',
		'assets/img/b&w_images/ftwindowinside.jpg',
		'assets/img/b&w_images/leftside_b&w.jpg',
		'assets/img/b&w_images/kitchen_b&w.jpg',
		'assets/img/b&w_images/stairs_b&w.jpg'
	);
	
	
}());