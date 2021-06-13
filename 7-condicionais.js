console.log(`Trabalhando com condicionais`);


const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


console.log("Destinos possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprandor maior de idade");
//     listaDeDestinos.splice(1, 1);// Remover na array com o numero da posição e quantas vão ser excluidos

// } else if (estaAcompanhada) {
//     //A pessoa é menor de idade
//     console.log("Comprandor Acompanhando de idade");
//     listaDeDestinos.splice(1, 1);// Remover na array com o numero da posição e quantas vão ser excluidos

// } else {
//     console.log("Não é maior de idade e não posso vender.");
// }

if (idadeComprador >= 18 || estaAcompanhada ) {
    console.log("Comprandor com permissão de comprar");
    listaDeDestinos.splice(2, 1);// Remover na array com o numero da posição e quantas vão ser excluidos

} else {
    console.log("Não é maior de idade e não posso vender.");
}

console.log("Embarque: \n \n")// Funcionalidade do "\n serve para pular linha"

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Voce não pode embarcar")
}

console.log(listaDeDestinos);

// exibindo a idade do comprador se e maior de 18 anos de forma true e false
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

//Caso quiser saber mais sobre array pesquisa array js no google