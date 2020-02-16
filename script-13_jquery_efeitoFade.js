//JQuery

//JQuery - Esconder o texto lento
$(function(){
	//Button Azul
	$('#azul').click(function(){
		$('p').css("background-color", "blue");//color azul
		$('p').css("text-align", "right");//texto p/ direita
		$('p').fadeOut();//esconde devagar
	});

	//Button Vermelho
	$('#vermelho').click(function(){
		$('p').hide();//esconde rapido
		$('p').css("background-color", "red");//color vermelho
		$('p').css("text-align", "center");//texto p/ centro
	});

	//Button Laranja
	$('#laranja').click(function(){
		$('p').css("background-color", "orange");//color laranja
		$('p').css("text-align", "left");//texto p/ esquerda
		$('p').fadeOut();//esconde devagar
		$('p').delay(3000);//pause de segundos
		$('p').fadeIn();//aparece depois do delay
	});
});