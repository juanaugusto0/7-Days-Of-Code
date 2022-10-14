let listaDeComparacoes = [1,'1',30,'30',10,'10'];
let i;
let tipos;

function checkType (x) {
    typeof x;
}

function checkTypeList () {
    for (i=0 ; i <= 5 ; i++) {
       tipos = [checkType (listaDeComparacoes[i])];
    }
}
console.log (tipos[0])
if (listaDeComparacoes[0]==listaDeComparacoes[1]){
    if (tipos[0]==tipos[1]){
        console.log ('O número e o tipo são iguais')
    }else {
        console.log ('O número é igual mas o tipo é diferente')
    }
}else {
    if (tipos[0]==tipos[1]){
        console.log ('O número é diferente mas o tipo é igual')
    }else {
        console.log ('O número e o tipos são diferentes')
    }
}