/*
* @Author: Star
* @Date:   2019-04-29 10:26:23
* @Last Modified by:   Star
* @Last Modified time: 2019-04-29 11:01:13
*/
$(function() {
		// 富文本编译器
	let E = window.wangEditor;
	let editor = new E('#editor-header', '#editor-content');
	// let editor = new E('#editor');
	// 使用 base64 保存图片
	editor.customConfig.uploadImgShowBase64 = true;
	// 设置z-index
	editor.customConfig.zIndex = 1;


	editor.create();
	// E.fullscreen.init('#editor');
	
	$(".w-e-text").bind("input propertychange",function(event){
		if(editor.txt.text()) {
			$('.submit').addClass('submit-font');
			console.log(editor.txt.text().length)
		} else {
			$('.submit').removeClass('submit-font');
		}
	});

	$('.comment-say').click(function() {
		$('.avatar-box').toggleClass('avatar-box-show');
		$('.comment-title').toggleClass('comment-title-bottom');
		$('.comment-say').toggleClass('comment-say-click');
	})
})