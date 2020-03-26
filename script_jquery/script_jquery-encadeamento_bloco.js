//ready: verifica se foi clicado
//hide: esconde a div
$(document).ready(function(){
	$('#azul').click(function(){
		$('p')//ENCADEAMENTO P/ BLOCO: Colocar separando por (.) ponto
		.css("background-color", "blue")
		.fadeOut()//some a liha
		.delay(1000)//1000segundos delay: pausa de segundos
		.fadeIn(5000);//retorna c/ segundos(5000)5seg
	});
	
	$('#vermelho').click(function(){
		$('p').css("background-color", "red");
		$('#mensagem')//ENCADEAMENTO P/ BLOCO: Colocar separando por (.) ponto
			.text("Cor alterada com sucesso!")
			.css('color', 'red')
			.css('border','1px solid red')
			.delay(3000)
			.fadeOut('fast');
	});
});