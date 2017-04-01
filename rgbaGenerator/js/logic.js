$(document).ready(function() {
	var cabecera = $("#cabecera");
	var boton = $("#boton");
	var body = $("#body");
	var content1 = $("#content1");
	var content2 = $("#content2");
	//var content3 = $("#content3");
	var btn_circle = $("#btn_circle");
	var header = $("#header");

});

function pintar(r,g,b){
	//only javascript form
	//var boton = document.getElementById("boton");
	//boton.style.background = color;
	//JQuery form
	var boton = $("#boton");	var boton2 = $("#boton2");
	var color = "rgba("+r+","+g+","+b+",1)";
	boton.css('background', color);
	
}

function pintar2(color){
	//document.getElementById("codigo2").value = document.getElementById("codigo").value;
	var codigo = $("#codigo").val();
	$("#codigo2").val(codigo)
	var opacidad = $("#select_opacidad").val();
	var cantidad_rojo = $("#select_rojo").val();
	var cantidad_verde = $("#select_verde").val();
	var cantidad_azul = $("#select_azul").val();

	definirColor(cantidad_rojo,cantidad_verde,cantidad_azul);

	if(opacidad==10){
		boton.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+","+opacidad+")";
		$("#boton2").css('border', "1px solid rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+","+opacidad+")");
		$("#boton2").css('color', "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+","+opacidad+")");
		$("#boton2").css('background', "white");
		cabecera.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+","+opacidad+")";
		body.style.background = "rgba("+(parseFloat(cantidad_rojo)/2)+","+(parseFloat(cantidad_verde)/2)+","+(parseFloat(cantidad_azul)/2)+",0.2)";
		
		btn_circle.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+","+opacidad+")";

	//content3.style.borderTop = "3px solid rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+","+opacidad+")";
	document.getElementById("codigo").value="rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",1)";
}else{
	boton.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",0."+opacidad+")";
	document.getElementById("codigo").value="rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",0."+opacidad+")";
	cabecera.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",0."+opacidad+")";
	body.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",0.1)";
	if(opacidad==3 || opacidad==2 || opacidad==1 || opacidad==0){

		header.style.color = "#006699";

	}else{
		header.style.color = "#fff";
	}
}

}

function copiar(){
	$("#codigo2").select(); // Acá se obtiene el id del boton que hemos creado antes y se le agrega un valor y luego se le sombrea con select(). Para agregar lo que se quiere copiar editas val("EDITAESTOAQUÍ")
	document.execCommand("copy"); 

}

function cambiarColor(){
	var cantidad_rojo = $("#select_rojo").val();
	var cantidad_verde = $("#select_verde").val();
	var cantidad_azul = $("#select_azul").val();
	btn_circle.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",0.9)";
}

function regresarColor(){
	var cantidad_rojo = $("#select_rojo").val();
	var cantidad_verde = $("#select_verde").val();
	var cantidad_azul = $("#select_azul").val();
	btn_circle.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",1)";
}

definirColor = function(rojo,verde,azul){
		$("#boton2").hover(function(){
			$(this).css('background', "rgba("+rojo+","+verde+","+azul+",1)");
			$(this).css('color', 'white');

		});
		$("#boton2").mouseout(function(){
			$(this).css('background', "white");
			$(this).css('color', "rgba("+rojo+","+verde+","+azul+",1)");

		});
	}
