const pergunta1 = prompt ("Qual área de estudo você quer seguir, front-end ou back-end?").toUpperCase();
let pergunta2;
if (pergunta1 == 'FRONT-END') {
    pergunta2 = prompt ('Você quer aprender Vue ou React?');
}else if (pergunta2 == 'BACK-END'){
    const pergunta2 = prompt ('Você quer aprender Java ou C#?');
}else {
    alert ('Inválido');
}
const pergunta3 = prompt ("Digite 1 se você quer se especializar na área ou 2 se você quiser se tornar FullStack.");

if (pergunta3 == 1) {
    alert ("Continue estudando e você vai longe");
}
let i;
if (pergunta3 == 2) {
    alert ("Cê que sabe");
    for (i=0; i<= 999; i++) {
        const pergunta4 = prompt ("Que outra linguagem você quer aprender?");
        if (pergunta4 != null){
            alert ('Essa é uma boa escolha.');
        }
        var confirmacao = confirm("Você quer aprender outras linguagens?");
        if (!confirmacao){
            i = 999;
        }
    }
}
