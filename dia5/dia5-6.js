let frutas = [];
let laticinios = [];
let doces = [];

for (let index = 0; index < 999; index++) {
	const addItens = prompt ("Que item você quer adicionar?");
	const addCategorias = prompt ("Digite a categoria na qual você quer encaixar o item, 1 para frutas, 2 para laticinios e 3 para congelados");
	if (addCategorias == 1){
	    frutas.push(addItens);
	}
	if (addCategorias == 2){
	    laticinios.push(addItens);
	}
	if (addCategorias == 3){
	    doces.push(addItens);
	}
	removerItens ();
    var confirmacao = confirm("Você quer adicionar mais itens?");
        if (!confirmacao){
            index = 999;
}
}

function removerItens () {
	var negacao = confirm ("Você quer remover algum item?")
	if (negacao) {
		const remocao = prompt ("Diga qual item você quer remover")
		let indexArray;
		console.log (remocao);
		console.log (frutas.indexOf(remocao))
		if (frutas.indexOf(remocao) != -1) {
			indexArray = frutas.indexOf(remocao);
			frutas.splice(indexArray,indexArray+1);
		}
		else if (laticinios.indexOf(remocao) != -1) {
			indexArray = laticinios.indexOf(remocao);
			laticinios.splice(indexArray,indexArray+1);
		}
		else if (doces.indexOf(remocao) != -1) {
			indexArray = doces.indexOf(remocao);
			doces.splice(indexArray,indexArray+1);
		}else {
			alert ("Valor não encontrado");
		}
	}
}

alert (`A lista de compras ficou assim:
        Frutas: ${frutas.slice(0)}
        Laticínios: ${laticinios.slice(0)}
        Doces: ${doces.slice(0)}`);