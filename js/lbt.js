$(function(){
	var num=0
	// 1.图片自己动
	var timer 
	timer = setInterval(run,6000)
	function run(){
		if(lock==true){
			lock=false
			num++
			if(num>1){
				$('.banner>ul').append($('.banner>ul>li').first())
				$('.banner>ul').css('left','0')
				num=1
			}
			$('.banner>ul').animate({left:-$('.banner>ul>li').width()*num+'px'},500,function(){
				lock=true
			})
		}
	}
	// 2.鼠标移入停止轮播
	$('.banner').mouseenter(function(){
		clearInterval(timer)
	})
	$('.banner').mouseleave(function(){
		timer = setInterval(run,6000)
	})
	
	// 5.定义锁
	var lock=true
	// 4.给左右按钮绑定点击事件
	$('.btn-left').click(function(){
		if(lock==true){
			lock=false
			num--
			if(num<0){
				$('.banner>ul').prepend($('.banner>ul>li').last())
				$('.banner>ul').css('left',''+-$('.banner>ul>li').width()+'px')
				num=0
			}
			$('.banner>ul').animate({left:$('.banner>ul>li').width()*num+'px'},500,function(){
				lock=true
			})
		}
	})
	$('.btn-right').click(run)
})