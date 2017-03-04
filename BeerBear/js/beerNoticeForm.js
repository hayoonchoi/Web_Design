var homeBtn = document.querySelectorAll(".homeBtn")
for(var i = 0; i <homeBtn.length; i++) {
	    homeBtn[i].onclick = function(event) {
	      window.location.href="../html/beerMainApp.html"
	    }
	  }

var infoBtn = document.querySelectorAll(".infoBtn")
for(var i = 0; i <infoBtn.length; i++) {
		infoBtn[i].onclick = function(event) {
	      window.location.href="../html/beerDetailApp.html"
	    }
	  }

var noticeBtn = document.querySelectorAll(".noticeBtn")
for(var i = 0; i < noticeBtn.length; i++) {
		noticeBtn[i].onclick = function(event) {
	      window.location.href="../html/beerNoticeApp.html"
	    }
	  }


$("#addBtn").click(function(event) {
	var beerNotice = {
	  title: $("#title").val(),
	  contents: $("#contents").val(),
	  password: $("#password").val()
	}
	alert("등록 되었습니다.");
	window.location.href = "../html/beerNoticeApp.html";
});

