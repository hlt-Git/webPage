/*
* @Author: Star
* @Date:   2019-04-26 15:01:05
* @Last Modified by:   Star
* @Last Modified time: 2019-04-27 16:19:10
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


});