const nome = prompt("Qual seu nome?  ");
const idade = prompt("Quantos anos você tem?  ");
const linguagem = prompt("Qual linguagem de programação você está estudando?  ");

alert (`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

const gostar = prompt (`Você gosta de estudar ${linguagem}? Digite 1 para sim e 2 para não.  `);

if (gostar != 1){
    alert ("Que pena, já tentou outra linguagem?")
}else {
    alert ("Que bom, se esforce nos estudos!")
}
