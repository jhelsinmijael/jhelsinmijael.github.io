$(document).ready(function() {


	$(document).scroll(function() {

		var position_window = $(window).scrollTop()

		var position_menu = $("#menu").offset();

		var titulo_aplicaciones = $("#titulo1").offset();

		var titulo_articulos = $("#titulo2").offset();


		//console.log("window:"+$(window).scrollTop());
		
		console.log('oe'+position_menu.top);

		console.log(titulo_aplicaciones.top-position_window);
		
		//console.log(",,"+titulo_aplicaciones.top);
		
		//console.log(position_window-position_menu.top);

		if(position_menu.top-position_window<3){

			$("#menu").addClass('navbar-fixed-top');
			$("#div_padding").html("<div style='height:70px;'>...<div>");

		}else{

			$("#menu").removeClass('navbar-fixed-top');
			$("#div_padding").html("");

		}
		if(position_window<=69){
			$("#menu").removeClass('navbar-fixed-top');
			$("#div_padding").html("");
		}
		//titulo aplicaciones

		if((titulo_aplicaciones.top-position_window)<=50){
			$("#body").css('margin', '0px');
			$("#body").css('padding', '0px');
			$("#space").html('<div id="titulo_aplicaciones" style="background: '+
				'rgba(0,86,137,0.1); text-align: center;padding: 5px 0px;'+
				'font-size: 30px;border-top-right-radius: 5px;border-top-left-radius: 5px;" class="color-white row ">'+
				'Aplicaciones'+
				'</div>');
			$("#titulo_aplicaciones").addClass('fixed-titulo');
			$("#titulo_aplicaciones").css('background', '#006699');
		}else{

			$("#space").html('');
			$("#titulo_aplicaciones").removeClass('fixed-titulo');
			$("#titulo_aplicaciones").css('background', 'rgba(0,86,137,0.1)');
			
		}

		//titulo articulos

		if((titulo_articulos.top-position_window)<=100){

			$("#space2").html('<div id="titulo_aplicaciones" style="background: '+
				'rgba(40,249,129,1); text-align: center;padding: 5px 0px;'+
				'font-size: 30px;border-top-right-radius: 5px;border-top-left-radius: 5px;" class="color-white row ">'+
				'Articulos generales'+
				'</div>');
			$("#titulo_articulos").addClass('fixed-titulo');
			$("#titulo_articulos").css('background', 'rgba(6,180,150,1)');
		}else{

			$("#space2").html('');
			$("#titulo_articulos").removeClass('fixed-titulo');
			$("#titulo_articulos").css('top', '100px');
			$("#titulo_articulos").css('background', 'rgba(6,180,150,0.1)');
		}



		
	});
});