
var homeBtn = document.querySelectorAll(".homeBtn")
for(var i = 0; i < homeBtn.length; i++) {
	    homeBtn[i].onclick = function(event) {
	      window.location.href="beerMainApp.html"
	    }
	  }

var infoBtn = document.querySelectorAll(".infoBtn")
for(var i = 0; i < infoBtn.length; i++) {
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
	  

