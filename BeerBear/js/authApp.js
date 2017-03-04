//confirm button

$("#confirmBtn").click(function(event) {
	
	if ( $("#sign_up_email").val().split("@").length == 1 || $("#sign_up_email").val().split("@").length > 2) {
		alert("이메일 양식이 아닙니다.")
		return
	}
	
	var user = {
		email: $("#sign_up_email").val()
	}

	alert("사용 가능한 이메일 입니다.");

})


//sign up btn 

$("#sign_up_btn").click(function(event) {
	
	var flag = true
	
	if($("#sign_up_password").val() === "") {
		alert("비밀번호 입력 해 주세요.")
		return
	} else if ($("#sign_up_confirm_password").val() === "") {
		alert("확인 비밀번호를 입력 해 주세요.")
		return
	} else if ($("#sign_up_password").val() !== $("#sign_up_confirm_password").val()) {
		alert("비밀번호가 일치하지 않습니다.")
		return
	} else if ($("#sign_up_nickname").val() === "") {
		alert("닉네임을 입력 해 주세요.")
		return
	}
	
	var year = new Date();
	
	if ($("#birth_year").val() !== "") {
		if ($("#birth_year").val() <= year.getFullYear() - 19) {
			var birth_year = $("#birth_year").val()
			flag = false
		} else {
			alert("성인이 아닙니다.")
			return
		}
	}
	
	if ($("#birth_month").val() !== "") {
		if ($("#birth_month").val() < 1 || $("#birth_month").val() > 12) {
			alert("날짜를 확인 해 주세요.")
			return
		} else if ($("#birth_month").val().length == 1) {
			var birth_month = "0"+$("#birth_month").val()
		} else {
			var birth_month = $("#birth_month").val()
		}
	} else if ($("#birth_year").val() !== "" && $("#birth_month").val() === "") {
		alert("날짜를 확인 해 주세요.")
		return
	}
	
	if ($("#birth_date").val() !== "") {
		if ($("#birth_date").val() < 1 || $("#birth_date").val() > 31) {
			alert("날짜를 확인 해 주세요.")
			return
		} else if ($("#birth_date").val().length == 1) {
			var birth_date = "0"+$("#birth_date").val()
		} else {
			var birth_date = $("#birth_date").val()
		}
	} else if ($("#birth_year").val() !== "" && $("#birth_month").val() !== "" && $("#birth_date").val() === "") {
		alert("날짜를 확인 해 주세요.")
		return
	}
	
	
	if (flag) {
		var user = {
				password : $("#sign_up_password").val(),
				nickname: $("#sign_up_nickname").val()
		}

		alert("회원가입을 축하드립니다.")
		window.location.reload();
		
	} else if(!flag) {
		if ($("input[name=gender]:checked").val() === undefined) {
			alert("성별을 입력 해 주세요.")
			return
		}
		if ($("#option_addr").val() === "") {
			alert("주소를 입력 해 주세요.")
			return
		}
		if ($("#option_drink").val() === "") {
			alert("주량을 입력 해 주세요.")
			return
		}
		
		var user = {
				password : $("#sign_up_password").val(),
				nickname: $("#sign_up_nickname").val(),
				birth: birth_year + birth_month + birth_date,
				gender: $("input[name=gender]:checked").val(),
				address: $("#option_addr").val(),
				drink: $("#option_drink").val()
		}
		
		alert("회원가입을 축하드립니다.")
		window.location.reload();
	}
	
	
	
})



