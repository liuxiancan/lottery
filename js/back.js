$(function(){
	var num
	$(window).scroll(function(){
		num=$(document).scrollTop()
		if($(document).scrollTop()>=700){
			$('.back').css('transform','translateY(0px)')
			$('.back').animate({opacity:'1'},1)
		}else{
			$('.back').css('transform','translateY(30px)')
			$('.back').css('opacity','0')
		}
	})
	$('.back').click(function(){
		var timer=setInterval(function(){
			if($(document).scrollTop()>0){
				$(document).scrollTop(num-100)
			}else{
				clearInterval(timer)
			}
		},1)
	})
})