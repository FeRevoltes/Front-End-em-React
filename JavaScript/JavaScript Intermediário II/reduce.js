// REDUCE

const numeros = [1, 2, 3, 4, 5];

// Acumulador (acc), elemento (cur), Indice (idx), Array (src)
const soma = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  return elemento / arrayCompleto.length + acumulador;
}, 0);
console.log(soma);

const somaDosPares = numeros.reduce((acc, cur) => {
  console.log(acc);
  if (cur % 2 === 0) {
    return acc + cur;
  } else {
    return acc;
  }
}, 0);
console.log(somaDosPares);

// * Total a pagar do carrinho
const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1l", preco: 6.99, quantidade: 2 },
];
const carrinhoTotal = carrinho.reduce((acc, cur) => {
  return acc + cur.preco * cur.quantidade;
}, 0);
console.log(carrinhoTotal);
