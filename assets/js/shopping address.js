$(function () {
	$('.back-icon').click(function () {
		window.location.href = "personal.html";
	})
	$('.novel').on('click','.adds',function () {
		$('.adds')[0].innerHTML = '保存'
		$(this).addClass('saves').removeClass('adds')
		$('.address-msg').removeClass('am-hide')
		$('.addr_list').addClass('am-hide')
	})
	$('.novel').on('click','.saves',function () {
		$('.addr_list').removeClass('am-hide')
		$('.address-msg').addClass('am-hide')
		$('.saves')[0].innerHTML = '新增'
		$(this).addClass('adds').removeClass('saves')
		$('.nick_name').text("收件人：" + $('#addressUser').val())
		$('.adrl_phone').text($('#phone').val()) 
		$('.add_detail').text($('#addressPid option:checked').text() + $('#addressCid option:checked').text() + $('#addressDid option:checked').text() + $('#addressStreet').val()) 
	})
	//返回上一页
	$('.return').click(function () {
		$('.adds,.saves')[0].innerHTML = '新增'
		$('.saves').addClass('adds')
		$('.adds').removeClass('saves')
		$('.address-msg').addClass('am-hide')
		$('.addr_list').removeClass('am-hide')
	})
	//设为默认地址按钮
	$('.switch_btn .inner_circle').click(function () {
		if ($('.switch_btn').hasClass('switch_uncheck')) {
			$('.switch_btn').addClass('switch_check').removeClass('switch_uncheck')
			$('.default_note').show()
		}else {
			$('.switch_btn').addClass('switch_uncheck').removeClass('switch_check')
			$('.default_note').hide()
		}
	})
	$("#addressPid").change(function () {
		$('.province').hide()
	})
	$("#addressCid").change(function () {
		$('.city').hide()
	})
	$("#addressDid").change(function () {
		$('.area').hide()
	})
})