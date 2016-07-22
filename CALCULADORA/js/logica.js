var cifra = "";

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

function teclear(num){


	document.getElementById("lcd").value=cifra+""+num;

	if(decimal){

		document.getElementById("lcd").value = "0."+num;
		decimal = false;
		
	}

	cifra = document.getElementById("lcd").value;

	document.getElementById("mini-lcd").value = total;

	borrar_total = false;

	if (cifra === ".") {

		document.getElementById("lcd").value = "0.";
		decimal = true;

	}

}

function sumar(){

	if(resta){

		total = total - parseFloat(cifra);

		document.getElementById("lcd").value = total;

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

	document.getElementById("mini-lcd").value = total;

}
function restar(){

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

			}

		}

	}else{

		if(cifra !== ""){

			total = parseFloat(cifra);

		}
		else{

			//corregir

			total = 0;

		}

		first = false;

	}

	cifra = "";

	resta = true;

	suma = false;

	multiplica = false;

	divide = false;

	document.getElementById("mini-lcd").value = total;

}
function multiplicar(){

	if(first == false){

		if(resta){

			total = total - parseFloat(cifra);

			document.getElementById("lcd").value = total;

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

			total = 0;

		}

		first = false;

	}

	cifra = "";
	multiplica = true;
	resta = false;
	suma = false;
	divide = false;

}
function dividir(){

	if(first == false){

		if(resta){

			total = total - parseFloat(cifra);

			document.getElementById("lcd").value = total;

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

			total = 0;

		}

		first = false;

	}

	cifra = "";
	multiplica = false;
	resta = false;
	suma = false;
	divide = true;
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

	cifra = "";

	document.getElementById("mini-lcd").value = total;

	boolean_raiz = true;

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

	cifra = "";

	document.getElementById("mini-lcd").value = total;

	boolean_potencia = true;

}

function igual(){

	if(suma){

		if(cifra !== "")
		
			document.getElementById("lcd").value = total + parseFloat(cifra);
		
		else

			document.getElementById("lcd").value = 0;	
	}
	if(resta){

		if(cifra !== "")

			document.getElementById("lcd").value = total - parseFloat(cifra);
	
		else

			document.getElementById("lcd").value = 0;	

	}
	if(multiplica){

		if(cifra !== "")
		
			document.getElementById("lcd").value = total * parseFloat(cifra);
		
		else

			document.getElementById("lcd").value = 0;	
	}

	if(divide){

		if(cifra !== "")
		
			document.getElementById("lcd").value = total / parseFloat(cifra);
		
		else

			document.getElementById("lcd").value = 0;	
	}

	if(boolean_raiz){

		document.getElementById("lcd").value = total;

		boolean_raiz = false;

	}else if(boolean_potencia){

		document.getElementById("lcd").value = total;

		boolean_potencia = false;

	}else{

		total = parseFloat(document.getElementById("lcd").value);

		document.getElementById("mini-lcd").value = total;
	}

	cifra = "";

	borrar_total = true;

	suma = false;

	resta = false;

	multiplica = false;

	divide = false;

	

}

function clearLCD(){

	cifra = "";
	total = 0;
	document.getElementById("lcd").value="0";
	document.getElementById("mini-lcd").value = total;

	first = true;

	borrar_total = false;

	suma = false;

	resta = false;

	multiplica = false;

	divide = false;

	boolean_raiz = false;
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