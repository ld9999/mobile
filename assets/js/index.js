$(function () {
	$('.banner a,activity a,.activity a,.look p,.commod a').prop('href','details.html')
	$('.shops a').click(function () {
		$(this).addClass('active').parent().siblings().children('a').removeClass('active')
		$('.ad-commodity>.ad-box').eq($(this).parent().index()).show().siblings().hide()
	})
	$('.search').focus(function() {
		window.location.href = 'search.html';
	});
	$('.service').click(function() {
		window.location.href = 'service.html';
	});
	var timer = null;
	var flag = true;
	$('.top-btn').click(function() {
		clearInterval(timer);
		timer = setInterval(function() {
			var scoll = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.floor(-scoll / 10);
			flag = true;
			document.body.scrollTop = document.documentElement.scrollTop = scoll + speed;
			if(scoll == 0) {
				clearInterval(timer);
			};
		}, 30);
	});
	window.onscroll = function () {
		var scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTopHeight >= 680) {
			$('.shops').addClass('nav-fixed')
		}else{
			$('.shops').removeClass('nav-fixed')
		};
		if(scrollTopHeight >= 1500) {
			$('.top-btn').css('display', 'block');
		} else {
			$('.top-btn').css('display', 'none');
		};
		if(!flag) {
			clearInterval(timer);
		}
		flag = false;
	};
})
