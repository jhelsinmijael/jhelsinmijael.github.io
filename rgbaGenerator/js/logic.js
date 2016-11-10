function pintar(color){
	var boton = document.getElementById("boton");
	boton.style.background = color;
}
			
function pintar2(color){
	document.getElementById("codigo2").value = document.getElementById("codigo").value;
	var opacidad = document.getElementById("select_opacidad").value;
	var cantidad_rojo = document.getElementById("select_rojo").value;
	var cantidad_verde = document.getElementById("select_verde").value;
	var cantidad_azul = document.getElementById("select_azul").value;

				
	var cabecera = document.getElementById("cabecera");
	var boton = document.getElementById("boton");
	if(opacidad==10){
	boton.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+","+opacidad+")";
	cabecera.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+","+opacidad+")";
		
	document.getElementById("codigo").value="rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",1)";
	}else{
		boton.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",0."+opacidad+")";
		document.getElementById("codigo").value="rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",0."+opacidad+")";
		cabecera.style.background = "rgba("+cantidad_rojo+","+cantidad_verde+","+cantidad_azul+",0."+opacidad+")";
	}

}

function copiar(){

	$("#codigo2").select(); // Acá se obtiene el id del boton que hemos creado antes y se le agrega un valor y luego se le sombrea con select(). Para agregar lo que se quiere copiar editas val("EDITAESTOAQUÍ")
    document.execCommand("copy"); 

}