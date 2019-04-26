/*
* @Author: Star
* @Date:   2019-04-26 15:01:05
* @Last Modified by:   Star
* @Last Modified time: 2019-04-26 20:22:18
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
	// 自定义菜单配置
	/*editor.customConfig.menus = [
		'head',  // 标题
		'bold',  // 粗体
		'fontSize',  // 字号
		'fontName',  // 字体
		'underline',  // 下划线
		'foreColor',  // 文字颜色
		'backColor',  // 背景颜色
		'link',  // 插入链接
		'justify',  // 对齐方式
		'quote',  // 引用
		'emoticon',  // 表情
		'image',  // 插入图片
		'video',  // 插入视频
		'code',  // 插入代码
		'undo',  // 撤销
		'redo'  // 重复
	]*/
	// 自定义字体
	editor.customConfig.fontNames = [
		'宋体',
		'微软雅黑',
		'Arial',
		'Tahoma',
		'Verdana'
	]
	editor.create();
	
	$(".w-e-text").bind("input propertychange",function(event){
		if(editor.txt.text()) {
			$('.submit').addClass('submit-font');
			console.log(editor.txt.text().length)
		} else {
			$('.submit').removeClass('submit-font');
		}
	});
});