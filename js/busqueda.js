$(document).ready(function() {
	var resultados = [];
	resultados.push("rgba");
	resultados.push("calculadora");
	resultados.push("receta");
	$("#btnBuscar").focus(function() {
		$(this).keyup(function() {
			for (var i = 0; i < resultados.length; i++) {
				if($(this).val()==resultados[i]){
					alert("Un resultado encontrado");
					if(i==0){
						$("#resultados").html('<div class="alert alert-success"><a href="rgbaGenerator/rgba.html"><strong>encontrado </strong>Rgba</a><button class="close" data-dismiss="alert"><span>&times;<span></button></div>');
					}					
					break;
				}else if($(this).val()==resultados[i].toUpperCase()){
					alert(resultados[i].toUpperCase());
					break;
				}

			}
			//if($(this).val()==''){
			//	alert(re)
			//}
		});
	});
});