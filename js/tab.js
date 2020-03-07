$(function(){
	$('.ls-main>ul>li').click(function(){
		$(this).children().css({background: '#B2CC5E',color: 'white'}).parent().siblings().children().css({color: '#9E9E9E',background: 'transparent'})
		$('.tab-content>ul').eq($(this).index()).css({transform:'scale(1)',transition:'all 1s ease'}).siblings().css({transform: 'scale(0)',transition:'all 0s ease'})
		if($(this).index()==2||$(this).index()==3||$(this).index()==4){
			$('.tab3').css('height','360.64px')
			$('.tab4').css('height','360.64px')
			$('.tab5').css('height','360.64px')
			$('.tab-content').css('height','360.64px')
			$('.ls-main').css('height','527.037px')
			$('.list').css('height','527.037px')
		}else{
			$('.tab-content>ul').css('height','721.275px')
			$('.tab-content').css('height','721.275px')
			$('.ls-main').css('height','887.675px')
			$('.list').css('height','887.670px')
		}
	})
})