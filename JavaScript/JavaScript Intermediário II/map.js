// Map

const numeros = [14, 26, 38, 50, 62, 74, 86, 98];

const novoArray = numeros.map((elemento, index, arrayCompleto) => {
  return elemento * 2;
});
console.log(novoArray);

// Exemplo 1: Elevando todos os números ao quadrado
const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const valoresAoQuadrado = valores.map((valor) => valor ** 2);
console.log(valoresAoQuadrado);

//Exemplo 2: Adicionando uma propriedade aos objetos do array
const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1l", preco: 6.99, quantidade: 2 },
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade, //spread
  };
});
console.log(carrinhoComTotal);

// Exercício: calcular o IMC de pessoas

const peopleInfo = [
  { name: "Gustavo", height: 1.82, weight: 83 },
  { name: "Amanda", height: 1.73, weight: 63 },
  { name: "Lucas", height: 1.81, weight: 90 },
  { name: "Victor", height: 1.65, weight: 50 },
  { name: "Luiza", height: 1.68, weight: 73 },
  { name: "Pedro", height: 1.74, weight: 80 },
];

const peopleIMC = peopleInfo.map((info) => {
  return {
    ...info,
    IMC: info.weight / (info.height * info.height), 
  };
});
console.log(peopleIMC)