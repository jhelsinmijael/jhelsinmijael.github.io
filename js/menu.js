
$("#menu-bar").click(function() {
	if( $('#menu-bar').prop('checked') ){
		$("#label_menu").css('transition-duration', '0.4s');
		$("#label_menu").html('<span id="img-menu" class="glyphicon glyphicon-remove"></span>');
		$("#label_menu").css('color', 'rgba(255,88,87,1)');
		
	}else{
		$("#label_menu").css('transition-duration', '0.1s')
		$("#label_menu").html('<span id="img-menu" class="glyphicon glyphicon-align-justify" ></span>');
		$("#label_menu").css('color', 'white');
	}

});

$("#check").click(function() {
	if($('#check').prop('checked')){

		$(".menu").css('transform', 'translateY(0%)');
		$(".menu").css('transform', 'translateX(0%)');
		$(".menu").css('opacity', '1');
		$("#icon-menu").html('<span class="glyphicon glyphicon-remove" style="font-size: 45px"></span>');
		$("#icon-menu").css('color', 'rgba(255,88,87,1)');

	}else{
		$(".menu").css('transition-duration', '0.3s');
		$(".menu").css('transform', 'translateY(-10%)');
		$(".menu").css('transform', 'translateX(-10%)');
		$(".menu").css('opacity', '0');
		$("#icon-menu").html('<span class="glyphicon glyphicon-align-justify" style="font-size: 45px"></span>');
		$("#icon-menu").css('color', 'white');
	}
});
