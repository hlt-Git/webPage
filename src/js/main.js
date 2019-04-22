$(document).ready(function(){

	child = $(window.parent.document).find("#changeItem").attr("src");

	$('#navbar ul li').click( function(e) {
		$(this).tab('show');
	})
	changeChild('#main', 'child/mian.html');
	changeChild('#house', 'child/frobtHouse.html');

	function changeChild(childName, childUrl) {
		$("#navbar").on("click", childName, function () {
			$(window.parent.document).find("#changeItem").attr("src", childUrl);
		})
	}
});
