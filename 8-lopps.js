console.log(`\n Trabalhando com condicionais`);
const idadeComprador = 19;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(" \n Destinos possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;

while (contador < 3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste=true;
        break;
    } 
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpa estivemos um erro");
}

for (let i = 0 ; i < 3; i++){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste=true;
       
    } 
}