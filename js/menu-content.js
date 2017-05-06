$("#div_menu").html(
	'<input type="checkbox" id="menu-bar">'+
	'<label  id="label_menu" class="icon-menu" for="menu-bar">'+
	'<span id="img-menu" class="glyphicon glyphicon-align-justify"></span>'+
	'</label>'+
	'<nav class="menu">'+

	'<ul>'+
	'<li>'+
	'<a href="../index.html"><span class="primero"><i class="glyphicon glyphicon-home"></i></span>Inicio</a>'+
	'</li>'+
	'<li>'+
	'<a href="#"><span class="segundo"><i class="glyphicon glyphicon-hd-video"></i></span>Canal</a>'+
	'</li>'+
	'<li>'+
	'<a href="#"><span class="tercero"><i class="glyphicon glyphicon-book"></i></span>Blog</a>'+
	'</li>'+
	'<li>'+
	'<a href="#"><span class="cuarto"><i class="glyphicon glyphicon-phone"></i></span>Contacto</a>'+
	'</li>'+
	'</ul>'+

	'</nav>'
	);

//adaptar la altura del menu segun el tamaño del header
var alturaHeader = $("header").height();
$(".menu").css('top', alturaHeader);
$(document).ready(function() {
	$(".menu").css('top', alturaHeader);
	$(window).resize(function() {
		var alturaHeader = $("header").height();
		$(".menu").css('top', alturaHeader);
	});
});

