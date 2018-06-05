$(function () {
	$('.ad-commodity a').click(function () {
		window.location.href = 'details.html';
	})
	$('.search').focus(function() {
		window.location.href = 'search.html';
	});
	$('.shops a').click(function() {
		$(this).addClass('active').parent().siblings().children('a').removeClass('active')
		$('.ad-commodity>.ad-box').eq($(this).parent().index()).show().siblings().hide()
	})
	var timer = null;
	var flag = true;
	$('.gotop').click(function() {
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
	window.onscroll = function() {
		var scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTopHeight >= 40) {
			$('.shops').addClass('nav-fixed')
		} else {
			$('.shops').removeClass('nav-fixed')
		};
		if(scrollTopHeight >= 300) {
			$('.gotop').css('display', 'block');
		} else {
			$('.gotop').css('display', 'none');
		};
		if(!flag) {
			clearInterval(timer);
		}
		flag = false;
	};
})