$(document).ready(function(){

	let child = $(window.parent.document).find("#changeItem").attr("src");
	let wrapper = $('#navbar');

	$('#navbar ul li').click( function(e) {
		$(this).tab('show');
	})
	changeChild('#article', 'child/article.html');
	changeChild('#news', 'child/news.html');
	changeChild('#task', 'child/task.html');
	changeChild('#topic', 'child/topic.html');

	function changeChild(childName, childUrl) {
		// $("#navbar").toggle();
		$("#navbar").on("click", childName, function () {
			$(window.parent.document).find("#changeItem").attr("src", childUrl);
			$("#navbar").removeClass('in');
		})
	}

});
