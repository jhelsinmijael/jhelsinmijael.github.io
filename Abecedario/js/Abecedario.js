var audio = new Audio('Different Heaven & EH!DE - My Heart.mp3');

function decirVocal(){
	
	audio.volume = 0.5;

	audio.play();
	
	var play = document.getElementById("play");

	//play.style.width = "0px";
	//play.style.height = "0px";
	//play.style.border = "0px";
}
function detener(){
	
	audio.volume = 0.5;

	
		audio.pause();
	
	
}
