function valida(){
	var nome = document.getElementById('nome');
	//imprimindo o atributo valor, inserido no formulário
	if(nome.value == ""){
		alert("Inserir Nome, não envia vazio!");
	}else{
		alert("Eviado com SUCESSO!");
	}
}