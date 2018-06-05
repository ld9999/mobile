$(function () {
	$('.chat-list').click(function () {
		$('.cons').hide()
		$('.chat-main').show()
	})
	$('.chat-main .return').click(function () {
		$('.cons').show()
		$('.chat-main').hide()
	})
	$('.navs .return').click(function () {
		window.location.href = "index.html";
	})
})