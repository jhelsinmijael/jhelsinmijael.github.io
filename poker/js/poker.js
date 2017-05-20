$(document).ready(function() {
	var not = [];
	var num1 = [];
	var num2 = [];
	num1.push(Math.round(Math.random()*6));
	num1.push(Math.round(Math.random()*6));
	num1.push(Math.round(Math.random()*6));
	num1.push(Math.round(Math.random()*6));
	num1.push(Math.round(Math.random()*6));
	num1.push(Math.round(Math.random()*6));

	num2.push(Math.round(Math.random()*6));
	num2.push(Math.round(Math.random()*6));
	num2.push(Math.round(Math.random()*6));
	num2.push(Math.round(Math.random()*6));
	num2.push(Math.round(Math.random()*6));
	num2.push(Math.round(Math.random()*6));

	var count=0;

	$("button").click(function() {
		if(count>1){
			count=0;
			$("button").html('click here!!');
		}else{
			var index = $(this).index("button");

			if(index<6){
				alert("hello:"+num1[index]);
				$("button:eq("+index+")").html(num1[index]);
			}else if(index>=6){
				alert("hello:"+num2[index-6]);
				$("button:eq("+index+")").html(num2[index-6]);
			}

			$("button:eq("+index+")").addClass('btn-primary');
			$("button:eq("+index+")").css('font-size', '25px');

			count++;
		}
		
	});
});