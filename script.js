$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop() > 200){
				$('.pageTop_btn').stop(true).fadeIn();
			}else{
				$('.pageTop_btn').stop(true).fadeOut();
			}
		});
		$('.pageTop_btn').click(function(){
			$('body, html').animate({scrollTop:0},500);
		}); 
	});