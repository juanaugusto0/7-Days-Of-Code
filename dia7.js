function soma () {
    let soma_a = prompt ("Digite o primeiro valor a ser somado");
    let soma_b = prompt ("Digite o segundo valor a ser somado");
    soma_a = parseInt (soma_a);
    soma_b = parseInt (soma_b);
    let resultado_soma = soma_a + soma_b;
    alert (resultado_soma);
}

function subtracao () {
    let sub_a = prompt ("Digite o primeiro valor a ser subtraído");
    sub_a = parseInt (sub_a);
    let sub_b = prompt ("Digite o segundo valor a ser subtraído");
    sub_b = parseInt (sub_b);
    let resultado_sub = sub_a - sub_b;
    alert (resultado_sub);
}

function multiplicacao () {
    let multi_a = prompt ("Digite o primeiro valor a ser multiplicado");
    multi_a = parseInt (multi_a);
    let multi_b = prompt ("Digite o segundo valor a ser multiplicado");
    multi_b = parseInt (multi_b);
    let resultado_multi = multi_a * multi_b;
    alert (resultado_multi);
}

function divisao () {
    let div_a = prompt ("Digite o primeiro valor a ser dividido");
    div_a = parseInt (div_a);
    let div_b = prompt ("Digite o segundo valor a ser dividido");
    div_b = parseInt (div_b);
    let resultado_div = div_a / div_b;
    alert (resultado_div);
}
let boolean = true;
while (boolean){
    const expressao = prompt ("Você quer fazer uma conta de adição, subtração, multiplicação, divisão ou quer sair?");
	switch (expressao) {
	    case 'adição':
	        soma ();
	        break;
	    case 'subtração':
	        subtracao ();
	        break;
	    case 'multiplicação':
	        multiplicacao ();
	        break;
	    case 'divisão':
	        divisao ();
	        break;
	    case 'sair':
           boolean = false;
           break;
        default:
            alert ("Não reconhecido");
	}
}