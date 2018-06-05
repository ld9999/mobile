$(function () {
	$('.search').bind('input propertychange', function() {
		if($(this).val() == "衬衫") {
			$('.class-list').show()
			$('.init-box').hide()
		}
	});
	$('.init-box a,.prompt-list li').click(function () {
		window.open("category.html")
	})
})