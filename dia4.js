function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
let numeroSecreto = aleatorio(1,9);
console.log (numeroSecreto)
let numeroDeTentativas = 3;
while (numeroDeTentativas > 0){
    const chutes = prompt ("Tente acertar o número escondido!");
    if (chutes == numeroSecreto){
        alert ("Parabéns você acertou");
    }else {
        numeroDeTentativas -= 1;
        if (numeroDeTentativas != 0){
        alert (`Que pena você errou, mas tem mais ${numeroDeTentativas} tentativas!`);  
        }
    }
}
if (numeroDeTentativas == 0){
alert (`O número secreto era ${numeroSecreto}`)
}