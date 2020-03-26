//ready: verifica se foi clicado
//hide: esconde a div
$(document).ready(function(){
	$('.botao').click(function(){
	  $('h1').hide();//hide: esconde
	});
	$('#azul').click(function(){
		$('p').css("background-color", "blue");
	});
	$('#vermelho').click(function(){
		$('p').css("background-color", "red");
	});
});