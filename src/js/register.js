/*
* @Author: Star
* @Date:   2019-04-24 15:21:23
* @Last Modified by:   Star
* @Last Modified time: 2019-04-25 10:12:21
*/
// 检查input输入框是否有数据

$(function() {

	// 验证手机号
	$('#login-number').on('blur', function() {
		checkPhone('#login-number');
	})

	// 校验验证码不能为空
	$('#login-code').on('blur', function() {
		checkCode('#login-code');
	})

	// 校验密码是否为空
	$('#login-password').on('blur', function() {
		checkPass('#login-password');
	})

	// 校验确认密码和密码是否一致
	$('#login-passes').on('blur', function() {
		checkPasses('#login-passes');
	})

	// 注册事件：只有同意协议才可以点击注册按钮
	$('.form-check-input').click(function() {
		checkBox('.form-check-input');
	})

	// 发送验证码： 当发送验证码之后60s只内不能点击

	/*
	 * 封装函数
	*/
	// 验证手机号
	function checkPhone(phoneId) {
		let loginNumber = $(phoneId).val();
		// 如果手机号为空
		if (loginNumber == '') {
			$(phoneId).addClass('error-input');
			$('.error-name').addClass('show');
		} else {
			// 如果手机号不为空
			// 进行手机号格式判断：如果手机号格式错误
			if(!(isPhone(loginNumber)) && loginNumber != '') {
				$(phoneId).addClass('error-input');
				$('.error-name').text('手机号有误，请重新填写');
				$('.error-name').addClass('show');
			} else {
				$('.error-name').removeClass('show');
				$(phoneId).removeClass('error-input');
				$('.error-name').text('手机号不能为空');
				// 发送验证码按钮可以点击
				$('.btn-secondary').addClass('btn');
				$('.btn').removeClass('btn-secondary');
			}
		}
	}

	// 验证验证码不为空
	function checkCode(codeId) {
		let loginCode = $(codeId).val();
		if(loginCode == '') {
			$(codeId).addClass('error-input');
			$('.error-code').addClass('show');
		} else {
			$(codeId).removeClass('error-input');
			$('.error-code').removeClass('show');
		}
	}

	// 检验密码不为空
	function checkPass(passId) {
		let loginPass = $(passId).val();
		if (loginPass == '') {
			$(passId).addClass('error-input');
			$('.error-pass').addClass('show');
		} else {
			$(passId).removeClass('error-input');
			$('.error-pass').removeClass('show');
		}
	}

	// 检验确认密码不为空且是否和密码相等
	function checkPasses(passesId) {
		let loginPass = $('#login-password').val();
		let loginPasses = $(passesId).val();
		if (loginPasses == '') {
			$(passesId).addClass('error-input');
			$('.error-passes').addClass('show');
		} else if(loginPasses != loginPass) {
			$(passesId).addClass('error-input');
			$('.error-passes').text('两次输入密码不一致');
			$('.error-passes').addClass('show');
		} else {
			$(passesId).removeClass('error-input');
			$('.error-passes').removeClass('show');
			$('.error-passes').text('确认密码不能为空');
		}
	}

	// 检验是否同意协议
	function checkBox(boxId) {
		if($(boxId).prop('checked')) {
			console.log("hola datevid");
			$('.btn-markedness').addClass('mybtn');
			$('.mybtn').removeClass('btn-markedness');
		} else {
			$('.mybtn').addClass('btn-markedness');
			$('.btn-markedness').removeClass('mybtn');
		}
	}

	// 发送验证码
	function sendCode(obj) {
		// 获取输入的手机号
		let phonenum = $('#login-number').val();
		// 校验手机号
		let result = isPhone(phonenum);
		if(result) {
			sendAjax('../../test.html', backCodeSucc, {"phonenum": phonenum})
		}
	}



	// 封装ajax请求
	// 将手机号利用ajax提交到后台短信接口
	function sendAjax(url, backFunc, queryParam) {
		$.ajax({
			async: false,
			cache: false,
			type: 'POST',
			url: url,
			data: queryParam,
			error: function() {
				// 提交失败的处理函数
			},
			success: backFunc
		})
	}

	// 成功获取验证码
	function backCodeSucc(data) {
		let backData = $.parseJSON(data);
		if(!backData.success) {
			console.log("backData.msg:", backData.msg);
		} else {
			// 返回验证码
			console.log("模拟验证码：", backData.msg);
			// $("#code").val(d.msg);
			// 未完成。。。。
		}
	}

	// 倒计时：
	$('#send-msg').on('click', function() {
		buttonCound($(this), 10*1000);
	})

	function buttonCound($el, msNum) {
		let text = $el.data('text') || $el.text();
		let timer = 0;
		$el.prop("disabled", true).addClass("disabled")
				.on("bc.clear", function () {
					clearTime();
				});

		(function countdown() {
			let time = msNum;
			$el.text('已发送'+'('+time/1000+ 's)');
			if(msNum <= 0) {
				msNum = 0;
				clearTime();
			} else {
				msNum -= 1000;
				timer = setTimeout(arguments.callee, 1000);
			}
		})();

		function clearTime() {
			clearTimeout(timer);
			$el.prop('disabled', false).removeClass('disabled').text(text)
		}
		return this;
	}

	// 点击登录发送ajax请求,判断验证码是否与后台数据一致
	function checkLoginCode() {
		
	}


	// 封装：验证手机号格式函数
	function isPhone(phoneNumber) {
		if(!(/^1[34578]\d{9}$/.test(phoneNumber))) {
			return false;
		} else {
			return true;
		}
	}

})