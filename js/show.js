$(function(){
	$('.type-order>ul>li').click(function(){
		$(this).children().css({color: '#B2CC5E'}).parent().siblings().children().css({color: '#999'})
		$('.pro-main>ul').eq($(this).index()).css('display','block').siblings().css('display','none')
		$('.pro-main>div').css('display','block')
		if($(this).index()==1){
			$('.produce').css('height','488.05px')
			$('.pro-main').css('height','428.05px')
			$('.pro-main>ul').eq(1).css('height','366.55px')
		}else{
			$('.produce').css('height','854.7px')
			$('.pro-main').css('height','794.7px')
			$('.pro-main>ul').eq(1).css('height','733.1px')
		}
	})
})