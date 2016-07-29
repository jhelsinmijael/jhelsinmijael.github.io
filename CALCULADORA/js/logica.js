var cifra = "";

var operacion = "";

var total = 0.0;

var first = true;

var borrar_total = false;

var suma = false;

var resta = false;

var multiplica = false;

var divide = false;

var boolean_raiz = false;

var boolean_potencia = false;

var decimal = false;

var darSigno = false;

function teclear(num){

	document.getElementById("lcd").value=cifra+""+num;

	if(decimal){

		document.getElementById("lcd").value = "0."+num;
		decimal = false;

	}


	cifra = document.getElementById("lcd").value;

	if(darSigno){

		document.getElementById("lcd").value = "-"+num;

		darSigno = false;

	}

	/*document.getElementById("mini-lcd").value = total*/;

	borrar_total = false;

	if (cifra === ".") {

		document.getElementById("lcd").value = "0.";
		decimal = true;

	}

}

function sumar(){

	if(resta){

		if(cifra !== ""){

			total = total - parseFloat(cifra);

			document.getElementById("lcd").value = total;

		}

	}else if(multiplica){

		if(cifra !== ""){

			total = total * parseFloat(cifra);

			document.getElementById("lcd").value = total;

		}

	}else if(divide){

		if(cifra !== ""){

			total = total / parseFloat(cifra);

			document.getElementById("lcd").value = total;

		}

	}else if(boolean_potencia){

		if(cifra !== ""){



		}

	}else{

		if(cifra !== ""){

			total = total + parseFloat(cifra);

			document.getElementById("lcd").value = total;

		}
		else{

		}
	}

	cifra = "";

	suma = true;

	resta = false;

	multiplica = false;

	divide = false;

	first = false;

	document.getElementById("mini-lcd").value = total + "  +";
	operacion = document.getElementById("mini-lcd").value = total + "  +";

}
function restar(){

	if(total==0 && cifra === ""){

		darSigno = true;

	}else{

		if(first == false){

			if (suma) {

				if(cifra !== ""){

					total = total + parseFloat(cifra);

					document.getElementById("lcd").value = total;

				}

			}else if(multiplica){

				if(cifra !== ""){

					total = total * parseFloat(cifra);

					document.getElementById("lcd").value = total;

				}

			}else if(divide){

				if(cifra !== ""){

					total = total / parseFloat(cifra);

					document.getElementById("lcd").value = total;

				}

			}else{

				if(cifra !== ""){

					total = total - parseFloat(cifra);



					document.getElementById("lcd").value = total;

					document.getElementById("mini-lcd").value = total;

				}
				else{

				}

			}

		}else{

			if(cifra !== ""){

				total = parseFloat(cifra);

			}
			else{

				//corregir

				//total = 0;

			}

			first = false;

		}
	}

	cifra = "";

	resta = true;

	suma = false;

	multiplica = false;

	divide = false;

	document.getElementById("mini-lcd").value = total + "  -";
	operacion = document.getElementById("mini-lcd").value = total + "  -";

}
function multiplicar(){

	if(first == false){

		if(resta){

			if(cifra !== ""){

				total = total - parseFloat(cifra);

				document.getElementById("lcd").value = total;
			}

		}

		else if (suma) {

			if(cifra !== ""){

				total = total + parseFloat(cifra);

				document.getElementById("lcd").value = total;

			}

		}else if(divide){

			if(cifra !== ""){

				total = total / parseFloat(cifra);

				document.getElementById("lcd").value = total;

			}

		}else{

			if(cifra !== ""){

				total = total * parseFloat(cifra);

				document.getElementById("lcd").value = total;

			}

		}
	}
	else{

		if(cifra !== ""){

			total = parseFloat(cifra);

		}
		else{

			//corregir

			//total = 0;

		}

		first = false;

	}

	cifra = "";
	multiplica = true;
	resta = false;
	suma = false;
	divide = false;
	document.getElementById("mini-lcd").value = total + "  *";
	operacion = document.getElementById("mini-lcd").value = total + "  *";

}
function dividir(){

	if(first == false){

		if(resta){

			if(cifra !== ""){

				total = total - parseFloat(cifra);

				document.getElementById("lcd").value = total;

			}

		}

		else if (suma) {

			if(cifra !== ""){

				total = total + parseFloat(cifra);

				document.getElementById("lcd").value = total;

			}

		}else if(multiplica){

			if(cifra !== ""){

				total = total * parseFloat(cifra);

				document.getElementById("lcd").value = total;

			}



		}else{

			if(cifra !== ""){

				total = total / parseFloat(cifra);

				document.getElementById("lcd").value = total;

			}

		}
	}else{

		if(cifra !== ""){

			total = parseFloat(cifra);

		}
		else{

			//corregir

			//total = 0;

		}

		first = false;

	}

	cifra = "";
	multiplica = false;
	resta = false;
	suma = false;
	divide = true;
	document.getElementById("mini-lcd").value = total + "  /";
	operacion = document.getElementById("mini-lcd").value = total + "  /";
}

function raizCuadrada(){

	var num = document.getElementById("lcd").value;

	if(suma){

		total = total + parseFloat(Math.sqrt (num));

		suma = false;

	}else if(resta){

		total = total - parseFloat(Math.sqrt (num));

		resta = false;

	}else if(multiplica){

		total = total * parseFloat(Math.sqrt (num));

		multiplica = false;

	}else if(divide){

		total = total / parseFloat(Math.sqrt (num));

		divide = false;

	}else {

		total =  parseFloat(Math.sqrt (num));

	}

	document.getElementById("lcd").value = Math.sqrt (num);

	document.getElementById("mini-lcd").value = '√'+" "+num ;

	boolean_raiz = true;

	//1 de 2 cifra = "";

}

function potencia(){

	var num = document.getElementById("lcd").value;

	if(suma){

		total = total + parseFloat(Math.pow (num,2));

		suma = false;

	}else if(resta){

		total = total - parseFloat(Math.pow (num,2));

		resta = false;

	}else if(multiplica){

		total = total * parseFloat(Math.pow (num,2));

		multiplica = false;

	}else if(divide){

		total = total / parseFloat(Math.pow (num,2));

		divide = false;

	}else {

		total =  parseFloat(Math.pow (num,2));

	}

	document.getElementById("lcd").value = Math.pow (num,2);

	document.getElementById("mini-lcd").value = num+"^2";

	boolean_potencia = true;

	//1 de 2 cifra = "";

}

function igual(){

	if(boolean_raiz){

		document.getElementById("lcd").value = total;

		boolean_raiz = false;

		operacion = operacion + "  √";

	}else if(boolean_potencia){

		document.getElementById("lcd").value = total;

		boolean_potencia = false;

		operacion = operacion + "  pow2 ";

	}/*else{

		total = parseFloat(document.getElementById("lcd").value);

		document.getElementById("mini-lcd").value = total;
	}*/

	if(suma){

		if(cifra !== ""){

			document.getElementById("lcd").value = total + parseFloat(cifra);
			}

		else

			document.getElementById("lcd").value = 0;
	}else if(resta){

		if(cifra !== "")

			document.getElementById("lcd").value = total - parseFloat(cifra);

		else

			document.getElementById("lcd").value = 0;

	}else if(multiplica){

		if(cifra !== "")

			document.getElementById("lcd").value = total * parseFloat(cifra);

		else

			document.getElementById("lcd").value = 0;
	}else if(divide){

		if(cifra !== "")

			document.getElementById("lcd").value = total / parseFloat(cifra);

		else

			document.getElementById("lcd").value = 0;
	}


	operacion +=" "+ cifra;

	document.getElementById("mini-lcd").value = operacion;

	cifra = "";

	borrar_total = true;

	suma = false;

	resta = false;

	multiplica = false;

	divide = false;



}

function clearLCD(){

	document.getElementById("lcd").value="0";
	document.getElementById("mini-lcd").value = "";

	cifra = "";

	operacion = "";

	total = 0.0;

	first = true;

	borrar_total = false;

	suma = false;

	resta = false;

	multiplica = false;

	divide = false;

	boolean_raiz = false;

	boolean_potencia = false;

	decimal = false;

	darSigno = false;
}

function borrar(){

	var string_total = total.toString();

	var valor = document.getElementById("lcd").value;

	cifra = document.getElementById("lcd").value=valor.substring(0,(valor.length-1));

	if((valor.length-1)==0){

		document.getElementById("lcd").value = 0;

	}

	if(borrar_total){

		if((string_total.length-1)==0){

			total = 0.0;
			first = true;

		}else{
			total = parseInt(string_total.substring(0,(string_total.length-1)));
		}

		if((valor.length-1)==0){

			document.getElementById("lcd").value = 0;

		}else{
			document.getElementById("lcd").value=valor.substring(0,(valor.length-1));
		}

		document.getElementById("mini-lcd").value = total;

		cifra = "";
	}
	else{



	}

}
