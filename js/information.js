$(function(){
	$('.select>span').click(function(){
		$(this).css({border: '1px solid #F96868',color: '#F96868'}).siblings().css({border: '1px solid #E4EAEC',color: '#76838F'})
		if($(this).index()==1){
			$('.size30').html('398.00')
		}else{
			$('.size30').html('199.00')
		}
	})
	var num=0;
	$('button').click(function(){
		num = $('.col>.input-group>input').val();
		if($(this).index()==0){
			num--
			$('.col>.input-group>input').val(num)
			if($('.col>.input-group>input').val()<=1){
				$('.col>.input-group>input').val(1)
			}
		}else{
			num++
			$('.col>.input-group>input').val(num)
			if($('.col>.input-group>input').val()>=99){
				$('.col>.input-group>input').val(99)
			}
		}
	})
	$('.col>.input-group>input').blur(function(){
		if($('.col>.input-group>input').val()>99){
			$('.col>.input-group>input').val(99)
		}
		if($('.col>.input-group>input').val()<1){
			$('.col>.input-group>input').val(1)
		}
	})
})