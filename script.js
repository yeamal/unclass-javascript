$(document).ready(function(){
	$('#Thumbnails').click(function(){
		$('#primary').fadeTo("fast", 0.5);
	});

	$('#Thumbnails2').click(function(){
		$('#primary').attr("src","cat-two.jpg");
	});

	$('#Thumbnails3').click(function(){
		$('#primary').attr("src","cat-three.jpg");
	});

	$('#Thumbnails4').click(function(){
		$('#primary').attr("src","cat-four.jpg");
	});
});