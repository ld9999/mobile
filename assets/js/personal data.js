$(function () {
	$('.return').click(function () {
		window.location.href = 'personal.html';
	})
	$('.ext-submit').click(function () {
		window.location.href = 'login.html';
	})
	$('.account-msg>li:gt(3)').click(function () {
		if ($(this).children('a').hasClass('rote')) {
			$(this).children('a').removeClass('rote')
			$(this).next().hide()
		}else{
			$(this).children('a').addClass('rote')
			$(this).next().show()
		}
	})
	$('.account-msg>li:nth-child(4)').click(function () {
		alert('手机号已绑定!')
	})	
	$('#birthday').change(function () {
		$('.account-msg>li:gt(3)').children('a').removeClass('rote')
		$(this).parents('.bidy').prev('.msg-list').find('span').text($('#birthday').val())
		$(this).parents('.bidy').hide()
	})
	$('.job-select').change(function () {
		$('.account-msg>li:gt(3)').children('a').removeClass('rote')
		$(this).parents('.guild').prev('.msg-list').find('span').text($('#occupation option:checked').text())
		$(this).parents('.guild').hide()
	})
	$('.account-msg li:nth-child(2)').click(function () {
		$('.cons').hide()
		$('.user').show()
	})
	$('.account-msg li:nth-child(3)').click(function () {
		$('.cons').hide()
		$('.pass').show()
	})
	$('.user .returns,.pass .returns').click(function () {
		$('.cons').show()
		$('.user').hide()
		$('.pass').hide()
	})
	$('.sure').click(function () {
		if ($('#ins').val()!='') {
			$('.cons').show()
			$('.user').hide()
			$('.live').text($('#ins').val())
		}else{
			alert('用户名不能为空')
		}
	})
	$('.sure-pass').click(function () {
		if ($('.old-pass').val() && $('.new-pass').val() && $('.new-pas').val() !== '' && $('.new-pass').val() === $('.new-pas').val()) {
			$('.cons').show()
			$('.pass').hide()
			$('.sets').text($('.new-pas').val())
		}else if ($('.new-pass').val() !== $('.new-pas').val()) {
			alert('新密码不一致,请重新输入')
			$('.new-pass').val('');
			$('.new-pas').val('');
		}else {
			alert('密码不能为空')
		}
	})
	var upload = document.getElementsByClassName('uptop')[0]
	var imgs = document.getElementById('imgd')
	upload.onchange = function () {
		if(window.FileReader) {
			var fr = new FileReader();
			fr.readAsDataURL(upload.files[0])
			fr.onloadend = function(e) {
				imgs.setAttribute('src', e.target.result)
			}
		} else {
			console.log('您的浏览器不支持FileReader')
		}
	}
})