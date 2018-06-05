$(function () {
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
	window.onscroll = function() {
		var scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTopHeight >= 500) {
			$('.top-btn').css('display', 'block');
		} else {
			$('.top-btn').css('display', 'none');
		};
		if(!flag) {
			clearInterval(timer);
		}
		flag = false;
	};
	$('.fashion a').click(function () {
		window.location.href = "details.html";
	})
	$('.img_inner,.img_inner+p').click(function () {
		window.location.href = "personal data.html";
	})
	$('.return').click(function () {
		window.location.href = "index.html";
	})
})