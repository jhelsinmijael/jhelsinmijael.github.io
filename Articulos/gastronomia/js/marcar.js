$(document).ready(function() {
	$(".hover").click(function() {
		var i = $(".hover").index(this);
		var texto = $(".tengo:eq("+i+")").text();
		if(texto == "tengo"){
			$(".ingrediente:eq("+i+")").css('color', 'rgba(65,131,188,1)');
			$(".hover:eq("+i+")").html("<button type='button' class='btn btn-link'>no tengo</button>");
		}
		if(texto == "no tengo"){
			$(".ingrediente:eq("+i+")").css('color', 'black');
			$(".hover:eq("+i+")").html("<button type='button' class='btn btn-link'>tengo</button>");
		}
		

		//$(".hover:eq("+i+")").html("<button type='button' class='btn btn-link'>cancelar</button>");


		$(".hover:eq("+i+") button").addClass('tengo');

	});

});