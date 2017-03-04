



$("#beerAddSaveBtn").click(function(event) {
	var beer = {
			brbrname: $("#beerBrand").val(),
			scname: $("#beerCate").val(),
			country: $("#beerCtry").val(),
			describe: $("#beerDesc").val(),
			company: $("#beerComp").val(),
			alchol: parseFloat($("#beerAchl").val()),
			brphoto_path: $("#newFileName").text()
	}
	
	
	if (beer.brbrname == 1) {
		beer.brbrname = $("#brandText").val()
	}
	
	if (beer.scanem == 1) {
		beer.scname = $("#cateText").val()
	}
	
	if (beer.country == 1) {
		beer.country = $("#ctryText").val()
	}
	
	if (beer.company == 1) {
		beer.company = $("#compText").val()
	}
	
	 
	if (beer.brbrname == 0) {
		alert("Beer Brand(맥주 브랜드)를 선택 해 주세요.")
		return
	}else if (beer.catename == 0) {
		alert("Category(맥주 분류)를 선택 해 주세요.")
		return
	} else if (beer.country == 0) {
		alert("Country(제조 국가)를 선택 해 주세요.")
		return
	} else if (beer.describe.length == 0 || beer.describe.length > 20) {
		alert("Description(맥주 설명)을 입력 해 주세요\n 0~20자 내로 입력 해 주세요.")
		return
	} else if (beer.company == 0) {
		alert("Company(제조사)를 입력 해 주세요.")
		return
	} else if (beer.alchol == 0) {
		alert("Alcohol(도수)를 입력 해 주세요.")
		return
	} else if (isNaN(beer.alchol) == true) {
		alert("Alchol(도수)의 값을 숫자로 입력 해 주세요.")
		return
	}  else if(beer.brphot_path == "") {
		alert("사진을 등록 해 주세요")
		return
	}
	
	
	
	alert("등록 되었습니다.");
	window.location.reload();
	
})



function checkBrandText() {
	var brandForm = document.forms['beerBrandForm']
	if (brandForm.Brand.value == '1') {
		brandForm.brandText.style.display = "inline"
		brandForm.Brand.style.display = "none"
	} else {
		brandForm.brandText.style.display = "none"
	}
}

function checkCateText() {
	var cateForm = document.forms['beerCateForm']
	if (cateForm.cate.value == '1') {
		cateForm.cateText.style.display = "inline"
		cateForm.cate.style.display = "none"
	} else {
		cateForm.cateText.style.display = "none"
	}
}

function checkCtryText() {
	var ctryForm = document.forms['beerCtryForm']
	if (ctryForm.country.value == '1') {
		ctryForm.ctryText.style.display = "inline"
		ctryForm.country.style.display = "none"
	} else {
		ctryForm.ctryText.style.display = "none"
	}
}

function checkCompText() {
	var compForm = document.forms['beerCompForm']
	if (compForm.company.value == '1') {
		compForm.compText.style.display = "inline"
		compForm.company.style.display = "none"
	} else {
		compForm.compText.style.display = "none"
	}
}


