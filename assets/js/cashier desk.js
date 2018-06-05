$(function () {
	$('.pay-list li .iconfont').click(function () {
		if ($(this).hasClass('fts')) {
			$(this).removeClass('fts')
		}else {
			$(this).addClass('fts').parents('li').siblings('li').find('.iconfont').removeClass('fts')
			$(this).removeClass('fonts')
		}
	})
	$('.return').click(function () {
		window.location.href = "all order.html";
	})
	$('.btn').click(function () {
		if ($('.pay-one .iconfont').hasClass('fts')) {
			alert('即将跳转到微信支付页面')
		}else if($('.pay-two .iconfont.fts').hasClass('fts')) {
			alert('即将跳转到支付宝支付页面')
		}else {
			alert('请至少选择一种支付方式')
		}
	})
})