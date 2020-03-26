//ready: verifica se foi clicado
//hide: esconde a div
$(document).ready(function(){
	$('#azul').click(function(){
		$('p').css("background-color", "blue");
		$('p').fadeOut();//some gradativamente
		$('p').delay(1000);//1000segundos delay: pausa de segundos
		$('p').fadeIn();//retorna
	});
	$('#vermelho').click(function(){
		$('p').css("background-color", "red");
		$('p').fadeOut('slow');//some gradativamente(slow: lento)(fast: rapido)
		$('p').delay(1000);//delay: pausa de segundos
		$('p').fadeIn('fast');//retorna
	});
});