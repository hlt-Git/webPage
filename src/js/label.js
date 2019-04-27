/*
* @Author: Star
* @Date:   2019-04-27 09:13:31
* @Last Modified by:   Star
* @Last Modified time: 2019-04-27 13:02:36
*/
$(function() {
	// 选择标签的个数
	let num = 0;
	let items = [];

	goToHone();

	// event.stopPropagation();
	function changebgColor(item, bgcolor, bdcolor) {
		$(item).click(function(e) {
			event.stopPropagation();
			$(this).toggleClass(bgcolor);
			$(this).toggleClass(bdcolor);
			$(this).toggleClass('active');
		})
	}

	changebgColor('.label-item.one .item-right .item', 'item-add-01', 'item-color-01');
	changebgColor('.label-item.two .item-right .item', 'item-add-02', 'item-color-02');
	changebgColor('.label-item.three .item-right .item', 'item-add-03', 'item-color-03');
	changebgColor('.label-item.four .item-right .item', 'item-add-04', 'item-color-04');
	changebgColor('.label-item.five .item-right .item', 'item-add-05', 'item-color-05');

	// 标签点击的时候对选中的标签进行判断
	$('.item').click(function() {
		// 对选中的标签进行计数&&把选中的标签存入数组
		labelNum(this);
		goToHone();
	})

	// 对选中的标签进行判断： 长度和选中哪一个
	function labelNum(itemClass) {
		if($(itemClass).hasClass('active')) {
			// 对选中的标签进行计数
			num++;
			// 把选中的标签存入数组
			items.push($(itemClass).text());
		} else {
			num--;
			items.pop($(itemClass).text());
		}
		console.log("num:", num);
		console.log("items:", items);
	}

	// 当选中的标签大于等于三时进入首页的按钮可以点击
	function goToHone() {
		if(num >= 3 ) {
			$('.login').removeAttr('disabled');
			$('.login').addClass('login-agree');
		} else {
			$('.login').attr('disabled', 'true')
			$('.login').removeClass('login-agree');
		}
	}

	// 点击判断选择标签个数 >= 3 时进行跳转
	$('.login').click(function() {
		if (num >= 3) {
			window.location.href = '../index.html';
		}
	})

})