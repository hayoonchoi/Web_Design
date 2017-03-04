


function ajaxLoadTasteInfo() {
		
	    var radarData = {
		  labels : ["BITTER (쓴맛)","SOUR (신맛)","SWEET (단맛)","SPARKLE (탄산)","BODY (풍미)","AROMA (향미)"],
		  datasets : [
		    {
		      backgroundColor: "rgba(255,187,0,.7)",  //영역 전체배경색
		      borderColor: "rgba(255,0,0,.5)",        //영역 선
		    //  pointBorderColor: "rgba(0,84,255,1)", // 꼭지점 테두리 색
		    //  pointBackgroundColor: "rgba(29,219,22,1)", // 꼭지점 안에 색
		      data : [8, 6, 9, 4, 7, 10]
		    }
		  ]
		}

		var radarOption = {
	      //responsive: false,
		  legend: false,  // 제목 없애기
	      scale : {
	    	pointLabels : {   //라벨글자 크기
	            fontSize: 14,
	            fontStyle: "bold",
	            fontColor: "rgba(255,187,0,1)"
	      },
	      ticks: {
	        min: 0,
	        max: 10,
	        stepSize: 1,
	        fontSize: 12,
	        fontStyle: "bold",
	        fontColor: "rgba(140,140,140,1)", //차트 점수색
	        //backdropColor: "rgba(0,255,255,1)"  // 차트점수배경색
	      },
	      gridLines: {
	        color: "rgba(140,140,140,1)" //차트라인 색
	      }
	      }
		}

		var ctx2 = document.getElementById("radarChart");
	    
		var myNewChart = new Chart(ctx2, {
		  type: "radar",
		  data: radarData,
		  options : radarOption
		})
	
}



$("#reviewAddBtn").click(function(event) {
	var brno = $("#beerNo").val()
	
	  var beerTasteInfo = {
			brno: brno,
	    bitter: parseInt($("input[name=bitter]:checked").val()),
	    sour: parseInt($("input[name=sour]:checked").val()),
	    sweet: parseInt($("input[name=sweet]:checked").val()),
	    sparkle: parseInt($("input[name=sparkle]:checked").val()),
	    body: parseInt($("input[name=body]:checked").val()),
	    aroma: parseInt($("input[name=aroma]:checked").val()),
	    score: $("#avgScore").val()
	  }
	  
	  if (beerTasteInfo.bitter == 0 ) {
		  alert("Bitter(쓴맛)의 점수를 입력 해 주세요.")
		  return
	  } else if (beerTasteInfo.sour == 0) {
		  alert("Sour(신맛)의 점수를 입력 해 주세요.")
		  return
	  } else if (beerTasteInfo.sweet == 0) {
	    alert("Sweet(단맛)의 점수를 입력 해 주세요.")
	    return
	  } else if (beerTasteInfo.sparkle == 0) {
	    alert("Sparkle(탄산)의 점수를 입력 해 주세요.")
	    return
	  } else if (beerTasteInfo.body == 0) {
	    alert("Body(풍미)의 점수를 입력 해 주세요.")
	    return
	  } else if (beerTasteInfo.aroma == 0) {
	    alert("Aroma(향미)의 점수를 입력 해 주세요.")
	    return
	  } else if (beerTasteInfo.score == 0 || beerTasteInfo.score == "" || beerTasteInfo.score < 0 || beerTasteInfo.score > 10) {
	    alert("평점을 입력 해 주세요. (0~10점 사이에만 입력 해 주세요)")
	    return
	  }
	  
	  alert("저장 되었습니다.");
	  window.location.reload();
	  
	});
	


