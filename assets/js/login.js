$(function() {
	var user = /(^[a-zA-z]\w{3,15}$)|(^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$)|(^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$)/;
	var pass = /^[a-zA-Z]\w{5,19}$/;
	var chekNode = /^\d{4,6}$/;
	$('.obtn').click(function() {
		if(!user.test($('.users').val())) {
			$(this).val('')
		}
		if(!pass.test($('.pasd').val())) {
			$(this).val('')
			alert('密码格式为6-20之间，以字母开头，只能包含数字，大小写字母')
		}
		if($('.users').val() && pass.test($('.pasd').val())) {
			alert('登录成功,跳转至个人中心')
			window.location.href = 'personal.html'
		}
	})
	$('.return').click(function () {
		window.location.href = 'register.html';
	})
})