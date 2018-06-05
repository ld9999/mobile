$(function() {
	var user = /(^[a-zA-z]\w{3,15}$)|(^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$)|(^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$)/;
	var chekNode = /^\d{4,6}$/;
	$('.obtn').click(function() {
		if(!user.test($('.phone').val())) {
			$('.phone').val('')
		}
		if(!chekNode.test($('.verify').val())) {
			alert('请输入正确的验证码')
		}
		if(user.test($('.user').val()) && chekNode.test($('.verify').val())) {
			alert('注册成功,跳转至登录界面')
			window.location.href = 'login.html'
		}
	})
	$('.return').click(function () {
		window.location.href = 'login.html';
	})
	var timer =null;
	$('.codetext').click(function () {
		alert('验证码已发送至手机')
		$('.times').show()
		$(this).hide()
		clearInterval(timer);
		var t = parseInt($('.times').text())
		timer= setInterval(function () {
			t--;
			$('.times').text(t)
		    if (t <= 0) {
				clearInterval(timer);
			}
		},1000)
	})
})