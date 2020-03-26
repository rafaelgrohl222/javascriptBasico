//ready: verifica se foi clicado
//hide: esconde a div
$(document).ready(function(){
	$('#azul').click(function(){
		$('p').css("background-color", "blue");
		$('p').fadeOut();//some gradativamente
		$('p').delay(1000);//1000segundos delay: pausa de segundos
		$('p').fadeIn(5000);//retorna
	});
	$('#vermelho').click(function(){
		$('#mensagem').text("Cor alterada com sucesso!");
		$('#mensagem').css('color', 'red');
		$('#mensagem').css('border','1px solid red');
		$('#mensagem').delay(3000);
		$('#mensagem').fadeOut('fast');
	});
});