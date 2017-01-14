$(document).ready(function(){
	$(".item1").mouseover(function(){
		$(".info1").html("visit youtube channel");
		$(".info1").addClass("infoshow");
	});

	$(".item2").mouseover(function(){
		$(".info2").html("visit facebook page");
		$(".info2").addClass("infoshow");
	});

	$(".item3").mouseover(function(){
		$(".info3").html("hello katherim <3");
		$(".info3").addClass("infoshow");
	});

	$(".item4").mouseover(function(){
		$(".info4").html("hello katherim <3");
		$(".info4").addClass("infoshow");
	});

	$(".item5").mouseover(function(){
		$(".info5").html("hello katherim <3");
		$(".info5").addClass("infoshow");
	});

	$(".item1").mouseout(function(){
		$(".info1").html("");
		$(".info1").removeClass("infoshow");
	});

	$(".item2").mouseout(function(){
		$(".info2").html("");
		$(".info2").removeClass("infoshow");
	});

	$(".item3").mouseout(function(){
		$(".info3").html("");
		$(".info3").removeClass("infoshow");
	});

	$(".item4").mouseout(function(){
		$(".info4").html("");
		$(".info4").removeClass("infoshow");
	});

	$(".item5").mouseout(function(){
		$(".info5").html("");
		$(".info5").removeClass("infoshow");
	});
})

