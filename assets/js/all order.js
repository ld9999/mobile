$(function () {
	$('.order-nav>a').click(function () {
		$(this).addClass('current').siblings().removeClass('current')
	})
	$('.good-info a,.shop a').click(function () {
		window.location.href = "details.html";
	})
	$('.order-nav>a:gt(0)').click(function () {
		$('.no-order').show()
		$('.order-list').hide()
	})
	$('.order-nav>a:first-child').click(function () {
		if ($('.content').children('ul').hasClass('order-info')) {
			$('.order-list').show()
			$('.no-order').hide()
		}
	})
	$('.close').click(function () {
		$(this).parents('.order-info').remove()
		$('.no-order').show()
		$('.order-list').hide()
	})
	$('.btn-primary').click(function () {
		window.location.href = "cashier desk.html";
	})
	$('.btn-cancel').click(function () {
		$('.abolish-box').show()
	})
	$('.cancelBtn').click(function () {
		$('.abolish-box').hide()
	})
	$('.sureBtn').click(function () {
		$('.order-info').remove()
		$('.abolish-box').hide()
		$('.no-order').show()
	})
})