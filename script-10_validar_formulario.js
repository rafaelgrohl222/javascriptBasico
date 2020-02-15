function valida(){
	var nome = document.getElementById('nome');

	//imprimi o OBJETO - [object HTMLInputElement]
	//alert(nome);

	//imprimi o valor da variavel
	//alert(nome.value);

	//imprimi o atributo valor,
	//oque está na variavel
if(nome.value == ""){
		alert("Campo 'nome' NÃO pode ser VAZIO");
	}
	else{
		alert("Formulário enviado com SUCESSO!");
	}
}