$(function(){
	var num=0;
	$('button').click(function(){
		num = $('.input-group>input').val();
		if($(this).index()==0){
			num--
			// console.log(num)
			$('.input-group>input').val(num)
			if($('.input-group>input').val()<=1){
				$('.input-group>input').val(1)
			}
		}else{
			num++
			// console.log(num)
			$('.input-group>input').val(num)
			if($('.input-group>input').val()>=99){
				$('.input-group>input').val(99)
			}
		}
		$('.main>li').eq(3).html('&yen;'+' '+$('.input-group>input').val()*199+'.00')
		$('.panel-body>div>ul>li>span').html('&yen;'+' '+$('.input-group>input').val()*199+'.00')
	})
	$('.input-group>input').blur(function(){
		if($('.input-group>input').val()>99){
			$('.input-group>input').val(99)
		}
		if($('.input-group>input').val()<1){
			$('.input-group>input').val(1)
		}
		$('.main>li').eq(3).html('&yen;'+' '+$('.input-group>input').val()*199+'.00')
		$('.panel-body>div>ul>li>span').html('&yen;'+' '+$('.input-group>input').val()*199+'.00')
	})
})