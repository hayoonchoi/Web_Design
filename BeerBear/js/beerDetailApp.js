	var logoMenu = document.querySelectorAll(".homeBtn")
	  for(var i = 0; i <logoMenu.length; i++) {
	    logoMenu[i].onclick = function(event) {
	      window.location.href="../html/beerMainApp.html"
	    }
	  }
	
	var infoMenu = document.querySelectorAll(".infoBtn")
	for(var i = 0; i <infoMenu.length; i++) {
	  infoMenu[i].onclick = function(event) {
	    window.location.href="../html/beerDetailApp.html"
	  }
	}

	var noticeBtn = document.querySelectorAll(".noticeBtn")
	for(var i = 0; i < noticeBtn.length; i++) {
		noticeBtn[i].onclick = function(event) {
	      window.location.href="../html/beerNoticeApp.html"
	    }
	 }
	    
	
	$(document.body).on('click','#htAddBtn',function(event) {

		if ($("#tagContent").val() == "") {
			alert("내용을 입력 해 주세요.")
			return
		}
		
		var beerHashTag = {
			tagContent : $("#tagContent").val(),
			brno : $("#beerNo").val()
		}
		
		document.getElementById("tagContent").value=""
		window.location.reload();
		
			
	})


// 평가하기 check css적용
$(document).ready(function(){
	  $('input').iCheck({
	    checkboxClass: 'icheckbox_square-orange',
	    radioClass: 'iradio_square-orange',
	    increaseArea: '20%' // optional
	  });
	});
