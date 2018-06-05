$(function() {
	$('.return').click(function () {
		window.location.href = "index.html"
	})
	$('.order_list_list a').click(function () {
		window.location.href = "details.html"
	})
	//商品勾选
	$('.cart_list  label').on('click', function() {
		if($(this).parents('.cart_list').hasClass('on')) {
			$(this).parents('.cart_list').removeClass('on').addClass('off')
			$(this).parents('.cart_list').find('.shop_price_text').text((($(this).parents('.cart_list').find('.goods_price').text()) * ($(this).parents('.cart_list').find('.nums').val())).toFixed(2))
		} else {
			$(this).parents('.cart_list').addClass('on').removeClass('off')
			$(this).parents('.cart_list').find('.shop_price_text').text(0 + ".00")
		}
		checkAll()
		sums();
	})
	//全选计算
	$('.float_ctrl_wrap label').click(function() {
		if($('.cart_list').hasClass('on')) {
			$('.cart_list').removeClass('on').addClass('off')
			$('.cart_list .shop_price_text').each(function () {
				$(this).parents('.cart_list').find('.shop_price_text').text((($(this).parents('.cart_list').find('.goods_price').text()) * ($(this).parents('.cart_list').find('.nums').val())).toFixed(2))
//				console.log(this)
			})
		} else {
			$('.cart_list').addClass('on').removeClass('off')
			$('.cart_list').find('.shop_price_text').text(0 + ".00")
		}
		checkAll()
		sums()
	})
	//商品的删除
	$('.exit').click(function () {
		$('.cart_list.off').remove()
		$('.float_ctrl_wrap').addClass('on')
		if ($('.cart_list.off').length<=0) {
			$('.total_price').text(0 + ".00")
		}
		sums();
	})
	$('.delete_btn').click(function () {
		$(this).parents('.cart_list').remove()
		if ($('.cart_list.off').length<=0) {
			$('.total_price').text(0 + ".00")
		}
		sums();
	})
	//商品的加减
	$('.add').click(function () {
		var price =$(this).siblings('.nums');
		price.val(parseInt(price.val())+1);
		if(price.val() == "" || NaN || undefined || null) {
			price.val(1);
		}
		if(parseInt(price.val()) < 1) {
			price.val(1);
		}
		if(parseInt(price.val()) > 99) {
			price.val(99);
			alert('购买的商品数量不能更多了')
		}
		$(this).parents('.cart_list.off').find('.shop_price_text').text(($(this).parents('.cart_list').find('.goods_price').text()* price.val()).toFixed(2))
		sums();
	})
	$('.minus').click(function () {
		var price =$(this).next();
		price.val(parseInt(price.val())-1);
		if(price.val() == "" || NaN || undefined || null) {
			price.val(1);
		}
		if(parseInt(price.val()) < 1) {
			price.val(1);
			alert('商品的数量不能小于1')
		}
		if(parseInt(price.val()) > 99) {
			price.val(99);
			alert('购买的商品数量不能更多了')
		}
		$(this).parents('.cart_list.off').find('.shop_price_text').text(($(this).parents('.cart_list').find('.goods_price').text()* price.val()).toFixed(2))
		sums();
	})
	//结算
	$('.go_charge').click(function () {
		window.location.href = 'order.html';
	})
	//封装函数  
	//全选勾选
	function checkAll() {
		if($('.cart_list').hasClass('on')) {
			$('.float_ctrl_wrap').addClass('on')
		} else {
			$('.float_ctrl_wrap').removeClass('on')
		}
	}
	//总价计算
	function sums() {
		var sum = 0;
		for (var i = 0; i < $('.shop_price_text').length; i++) {
			var k = parseFloat($('.shop_price_text').eq(i).text()).toFixed(2)
			sum += Number(k);
			$('.total_price').text(sum.toFixed(2))
		}
	}
})