function desactivar(){
	document.getElementById("caja_numero_subred").disabled = true;
}


function definirClase(){

	var ip = document.getElementById("caja_ip").value;
	var cont = 0;

	for (var i = 0; i < ip.length; i++) {
		if(ip.charAt(i)=='.'){
			cont++;
		}
	}

	if(ip.length>=8 && ip.length<=15 ){
		if(cont ==3){
			var tres = parseInt(ip.substring(0,3));

			if(tres>=1 && tres<=127){
				var mascara = "255.0.0.0";
				document.getElementById("caja_clase").value="A";
			}
			else if(tres>=128 && tres<=191){
				var mascara = "255.255.0.0";
				document.getElementById("caja_clase").value = "B";
			}
			else if(tres>=192 && tres<=223){
				var mascara = "255.255.255.0";
				document.getElementById("caja_clase").value = "C";
			}
			else{

			}
			definirMascara(mascara);
			document.getElementById("caja_numero_subred").disabled = false;
		}
		else{
			document.getElementById("caja_clase").value=null;
			document.getElementById("caja_mascara").value=null;
			document.getElementById("caja_numero_host").value=null;
			document.getElementById("mask").value = null;
			document.getElementById("bit").value = null;
		}
	}
	else{
		document.getElementById("caja_clase").value=null;
		document.getElementById("caja_mascara").value=null;
		document.getElementById("caja_numero_host").value=null;
			document.getElementById("mask").value = null;
			document.getElementById("bit").value = null;
	}
}
function definirMascara(mascara){
	var caja_mascara = document.getElementById("caja_mascara");
	caja_mascara.value = mascara;
}

function definirSubred(){

	var clase = document.getElementById("caja_clase").value;

	if(clase === "C"){

		var octeto="";

		var valor_octeto = [128,64,32,16,8,4,2,1];

		var n = [0,1,2,3,4,5,6,7,8];

		var num_subred = document.getElementById("caja_numero_subred").value;

		var bits = 0;

		var mask=0;
		
		for (var i = 0; i < n.length; i++) {
			
			if(Math.pow(2,n[i])>= num_subred){
				bits = n[i];
				break;
			}
		}

		for (var i = 0; i < bits; i++) {
			
			mask=mask+valor_octeto[i];

		}
		for (var i = 0; i < 8; i++) {
			if(i<bits){
				octeto = octeto + "1";
			}
			else{
				octeto = octeto + "0";
			}
			
		}


		document.getElementById("caja_numero_host").value=(256-mask);
		document.getElementById("mask").value = "255.255.255."+mask+"  /"+(24+bits);
		document.getElementById("bit").value = "11111111.11111111.11111111."+octeto;

		llenarTablaC();
	}
	else if(clase === "B"){

		var octeto="";

		var valor_octeto = [128,64,32,16,8,4,2,1,128,64,32,16,8,4,2,1];

		var n = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

		var num_subred = document.getElementById("caja_numero_subred").value;

		var bits = 0;

		var mask=0;

		var second_mask=0;
		
		for (var i = 0; i < n.length; i++) {
			
			if(Math.pow(2,n[i])>= num_subred){
				bits = n[i];
				break;
			}
		}

		for (var i = 0; i < bits; i++) {

			if(bits<=8){
				mask=mask+valor_octeto[i];
			}
			
			
			else{
				second_mask=second_mask+valor_octeto[i];
			}
		}
		for (var i = 0; i < 8; i++) {
			if(i<bits){
				octeto = octeto + "1";
			}
			else{
				octeto = octeto + "0";
			}
			
		}

		var saltos = 256-parseInt(mask);

		document.getElementById("mask").value = "255.255."+mask+".0";
		document.getElementById("caja_numero_host").value=(Math.pow(2,(16-bits)));
		document.getElementById("bit").value = "11111111.11111111."+octeto+".00000000";

		llenarTablaB(saltos);
	}

	else if(clase === "A"){

		var octeto="";

		var valor_octeto = [128,64,32,16,8,4,2,1];

		var n = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

		var num_subred = document.getElementById("caja_numero_subred").value;

		var bits = 0;

		var mask=0;
		
		for (var i = 0; i < n.length; i++) {
			
			if(Math.pow(2,n[i])>= num_subred){
				bits = n[i];
				break;
			}
		}

		for (var i = 0; i < bits; i++) {
			
			mask=mask+valor_octeto[i];
		}

		for (var i = 0; i < 8; i++) {
			if(i<bits){
				octeto = octeto + "1";
			}
			else{
				octeto = octeto + "0";
			}
			
		}

		var saltos = 256-parseInt(mask);

		document.getElementById("mask").value = "255."+mask+".0.0";
		document.getElementById("caja_numero_host").value=(Math.pow(2,(24-bits)));
		document.getElementById("bit").value = "11111111."+octeto+".00000000.00000000";

		llenarTablaA(saltos);
	}
}

function llenarTablaC(){

	var ip = document.getElementById("caja_ip").value;

	var letras = [];

	for (var i = 0; i < ip.length; i++) {
		letras.push(ip.charAt(i));
	}

	var cont = 0;
	var cant = 0;

	for (var i = 0; i < letras.length; i++) {
		
		if(letras[i]=='.'){
			cont++;
			if(cont==3){
				cant = i;
				
				break;
			}
		}
	}

	var tabla = document.getElementById("tabla1");

	tabla1.innerHTML = "<thead><td>numero</td><td>direccion</td><td>1ra ip</td><td></td><td>ultima ip</td><td>broadcast</td></thead>";

	

	var num_host = document.getElementById("caja_numero_host").value;

	var host_var = 0;

	var num_subred = document.getElementById("caja_numero_subred").value;

	if(num_subred<=64){

		for (var i = 0; i < num_subred; i++) {

			var tr = document.createElement("tr");
			
			tr.innerHTML = "<td>"+(i+1)+"</td><td>"+ip.substring(0,cant)+"."+(host_var)+"</td><td>"+ip.substring(0,cant)+"."+(host_var+1)+"</td><td>---</td><td style>"+ip.substring(0,cant)+"."+(parseInt(host_var)+parseInt(num_host)-2)+"</td><td>"+ip.substring(0,cant)+"."+(parseInt(host_var)+parseInt(num_host)-1)+"</td>";

			$("#tabla1").append(tr);
			host_var = parseInt(host_var) + parseInt(num_host);
			if(host_var>256){
				break;
			}

		}
	}
	else{
		tabla1.innerHTML = "<thead><td>numero</td><td>direccion</td><td>1ra ip</td><td></td><td>ultima ip</td><td>broadcast</td></thead>";
	}

	
}


function llenarTablaB(saltos){

	var ip = document.getElementById("caja_ip").value;

	var letras = [];

	for (var i = 0; i < ip.length; i++) {
		letras.push(ip.charAt(i));
	}

	var cont = 0;
	var cant = 0;

	for (var i = 0; i < letras.length; i++) {
		
		if(letras[i]=='.'){
			cont++;
			if(cont==2){
				cant = i;
				
				break;
			}
		}
	}

	var tabla = document.getElementById("tabla1");

	tabla1.innerHTML = "<thead><td>numero</td><td>direccion</td><td>1ra ip</td><td></td><td>ultima ip</td><td>broadcast</td></thead>";

	

	var num_host = document.getElementById("caja_numero_host").value;

	var host_var = 0;

	var num_subred = document.getElementById("caja_numero_subred").value;

	for (var i = 0; i < num_subred; i++) {

		var tr = document.createElement("tr");
		
		tr.innerHTML = "<td>"+(i+1)+"</td><td>"+ip.substring(0,cant)+"."+(host_var)+".0</td><td>"+ip.substring(0,cant)+"."+(host_var)+".1</td><td>---</td><td>"+ip.substring(0,cant)+"."+(parseInt(host_var)+parseInt(saltos)-1)+".254</td><td>"+ip.substring(0,cant)+"."+(parseInt(host_var)+parseInt(saltos)-1)+".255</td>";

		$("#tabla1").append(tr);
		host_var = parseInt(host_var) + parseInt(saltos);
		if(host_var>256){
			break;
		}

	}
}

	function llenarTablaA(saltos){

		var ip = document.getElementById("caja_ip").value;

		var letras = [];

		for (var i = 0; i < ip.length; i++) {
			letras.push(ip.charAt(i));
		}

		var cont = 0;
		var cant = 0;

		for (var i = 0; i < letras.length; i++) {
			
			if(letras[i]=='.'){
				cont++;
				if(cont==1){
					cant = i;
					
					break;
				}
			}
		}

		var tabla = document.getElementById("tabla1");

		tabla1.innerHTML = "<thead><td>numero</td><td>direccion</td><td>1ra ip</td><td></td><td>ultima ip</td><td>broadcast</td></thead>";

		

		var num_host = document.getElementById("caja_numero_host").value;

		var host_var = 0;

		var num_subred = document.getElementById("caja_numero_subred").value;

		for (var i = 0; i < num_subred; i++) {

			var tr = document.createElement("tr");
			
			tr.innerHTML = "<td>"+(i+1)+"</td><td>"+ip.substring(0,cant)+"."+(host_var)+".0.0</td><td>"+ip.substring(0,cant)+"."+(host_var)+".0.1</td><td>---</td><td>"+ip.substring(0,cant)+"."+(parseInt(host_var)+parseInt(saltos)-1)+".255.254</td><td>"+ip.substring(0,cant)+"."+(parseInt(host_var)+parseInt(saltos)-1)+".255.255</td>";

			$("#tabla1").append(tr);
			host_var = parseInt(host_var) + parseInt(saltos);
			if(host_var>256){
				break;
			}

		}

	
}