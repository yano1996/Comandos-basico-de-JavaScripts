console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);// adicionando um item na lista

console.log("Destinos possiveis");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1);// Remover na array com o numero da posição e quantas vão ser excluidos

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);

//Caso quiser saber mais sobre array pesquisa array js no google