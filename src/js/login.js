$(function() {
	// 获取焦点事件

	// 校验手机号
	$('#login-username').on('blur', function() {
		checkPhone('#login-username');
	})
	// 校验密码
	$('#login-password').on('blur', function() {
		checkPass('#login-password');
	})

	// 点击mybtn判断输入框是否有值
	// 如果有值进行提交数据
	let userName = $('#login-username').val();
	let userPass = $('#login-password').val();
	if(userPass == '' || userName == ''){
		$('.mybtn').attr('disabled', 'true');
	} else {
		$('.mybtn').attr('disabled', 'false');
		$('.mybtn').click(function() {
			$.ajax({
				type: 'POST',
				url: '////',
				// 数据提交
				data: {
					userName: userName,
					userPass: userPass,
				},
				dataType: 'json',
				success: function(data) {
					if(data.state === 200) {
						// 跳转到选择个性标签页面
						window.location.href = '../../index.html'
					} else {
						$('.error-info').addClass('show');
					}
				}
			})
		})
	}



	/*
	 * 封装函数
	 */ 
	// 验证手机号
	function checkPhone(phoneId) {
		let phoneNumber = $(phoneId).val();
		// 如果手机号为空
		if(phoneNumber == '') {
			$(phoneId).addClass('error-input');
			$('.error-name').addClass('show');
		} else {
			// 如果手机号不为空
			// 进行手机号格式判断：如果手机号格式错误
			if(!(/^1[34578]\d{9}$/.test(phoneNumber)) && phoneNumber != '') {
				$(phoneId).addClass('error-input');
				$('.error-name').text('手机号有误，请重新填写');
				$('.error-name').addClass('show');
			} else {
				// 手机号格式正确
				$('.error-name').removeClass('show');
				$(phoneId).removeClass('error-input');
				$('.error-name').text('用户名不能为空');
			}
		}
	}

	// 检验输入密码不能为空
	function checkPass(passId) {
		let phonePass = $(passId).val();
		if(phonePass == '') {
			$(passId).addClass('error-input');
			$('.error-pass').addClass('show');
		} else {
			$(passId).removeClass('error-input');
			$('.error-pass').removeClass('show');
		}
	}


	// 点击立即登录跳转到选择标签页面
	// $('.mybtn').click(function() {
	// 	window.location.href = 'label.html'
	// })
})
