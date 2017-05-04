
$("#menu-bar").click(function() {
	if( $('#menu-bar').prop('checked') ){
		$("#label_menu").css('transition-duration', '0.4s');
		$("#label_menu").html('<span id="img-menu" class="glyphicon glyphicon-remove"></span>');
		$("#label_menu").css('color', 'rgba(255,137,128,1)');
		
	}else{
		$("#label_menu").css('transition-duration', '0.1s')
		$("#label_menu").html('<span id="img-menu" class="glyphicon glyphicon-align-justify"></span>');
		$("#label_menu").css('color', 'white');
	}

});

