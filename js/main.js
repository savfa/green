$(function(){
	$('.ground_btn').on('click', function(e){
		e.preventDefault();
		$(".green_anim__line").animate({left: '558px'},2000).animate({left: '-250px'},2000);
		if ($('.ground_btn').text()=='Green it') {
			$('.green_anim__overlay').fadeIn(4000);
			$('.ground_btn').text("Klear it");
		} else {
			$('.green_anim__overlay').fadeOut(4000);
			$('.ground_btn').text("Green it");
		}
	});
});
