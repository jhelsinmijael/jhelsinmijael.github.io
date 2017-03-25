$(document).ready(function() {
	var not = [];
	var num = [];
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	num.push(Math.round(Math.random()*12));
	for (var i = 0; i < num.length; i++) {
		var count = 0;
		for (var j = 0; j < num.length; j++) {

			if(num[i] == num[j]){

								
				

			}
			if((parseFloat(i)+parseFloat(1))==num[j]){

				count++;

			}
		}
		if(count==0){
			not.push(i+1);
			alert("no hay:"+(i+1));
		}
	}

	var count=0;

	for (var i = 0; i < num.length; i++) {
		
		for (var j = 0; j < num.length; j++) {

			if(num[i] == num[j]){

				alert("repetidos: "+num[i]);

				num[i] = not[1];

				count++;

				break;				
				

			}

		}

	}
	$("button:eq(1)").click(function() {
		alert("hello:"+num);
	});
});