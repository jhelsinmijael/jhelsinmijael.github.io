$(document).ready(function() {
	$(".modal-info").click(function() {
		var i = $(".modal-info").index(this);
		var src = $('img:eq('+i+')').attr('src');
		$(".modal-body").html("<img id=''img-modal'' src='"+src+"' alt=''''>");
		var titulo = $(".tittle:eq("+i+")").text();
		$(".modal-header").html('<h4 class="modal-title">'+
						titulo+
					'</h4>');
	});
});