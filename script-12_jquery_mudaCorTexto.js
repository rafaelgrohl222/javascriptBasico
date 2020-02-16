//JQuery

//JQuery - Muda cor do texto
$(function(){
	//Button Azul
	$('#azul').click(function(){
		$('p').css("background-color", "blue");
		$('p').css("text-align", "right");
	});

	//Button Vermelho
	$('#vermelho').click(function(){
		$('p').css("background-color", "red");
		$('p').css("text-align", "center");
	});
});