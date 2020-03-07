$(function(){
	var num=0
	var index=0
	// 1.图片自己动
	var timer 
	var z=0;
	timer = setInterval(run,6000)
	function run(){
		if(lock==true){
			lock=false
			num++
			index++
			if(num>1){
				$('.banner>ul').append($('.banner>ul>li').first())
				$('.banner>ul').css('left','0')
				num=1
				
			}
			if(index>1){
				index=0
			}
			$('.banner>ul').animate({left:-$('.banner>ul>li').width()*num+'px'},500,function(){
				lock=true
			})
			$('.banner>p>span').eq(index).css('opacity','1').siblings().css('opacity','0.25')
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
			index--
			if(num<0){
				$('.banner>ul').prepend($('.banner>ul>li').last())
				$('.banner>ul').css('left',''+-$('.banner>ul>li').width()+'px')
				num=0
			}
			if(index<0){
				index=1
			}
			$('.banner>ul').animate({left:$('.banner>ul>li').width()*num+'px'},500,function(){
				lock=true
			})
			$('.banner>p>span').eq(index).css('opacity','1').siblings().css('opacity','0.25')
		}
	})
	$('.btn-right').click(run)
	// 6.给小圆点绑定点击事件
	var s =0
	$('.banner>p>span').click(function(){
		$(this).css('opacity','1').siblings().css('opacity','0.25')
		console.log($(this).index()-index)
		s= $(this).index()-index 
		index = $(this).index()
		console.log($(this).index()-index)
		for(var i=0;i<Math.abs(s);i++){
			console.log(s)
			if(s>0){
					num++
					if(num>1){
						$('.banner>ul').append($('.banner>ul>li').first())
						$('.banner>ul').css('left','0')
						num=1
					}
					$('.banner>ul').animate({left:-$('.banner>ul>li').width()*num+'px'},500)
					$('.banner>p>span').eq(index).css('opacity','1').siblings().css('opacity','0.25')
			}
			if(s<0){	
				num--
				if(num<0){
					$('.banner>ul').prepend($('.banner>ul>li').last())
					$('.banner>ul').css('left',''+-$('.banner>ul>li').width()+'px')
					num=0
				}
				$('.banner>ul').animate({left:$('.banner>ul>li').width()*num+'px'},500,function(){
					lock=true
				})
				$('.banner>p>span').eq(index).css('opacity','1').siblings().css('opacity','0.25')
				
			}
		}
	})
})