//  FILTER

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const valoresPares = valores.filter((par) => {
  return par % 2 === 0;
});
console.log(valoresPares);

// * exemplo 1
const alunos = [
  { nome: "Quincy", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "Sam", media: 65 },
  { nome: "Katie", media: 90 },
];

const alunosMediaAcimaDe85 = alunos.filter((aluno) => {
  return aluno.media > 85;
});

console.log(alunosMediaAcimaDe85);

// * exemplo 2
const produtos = [
  { nome: "Suco de laranja", preco: 7.5, tipo: "Bebida" },
  { nome: "Batata frita", preco: 10.5, tipo: "Comida" },
  { nome: "Pizza", preco: 12.49, tipo: "Comida" },
  { nome: "Chocolate", preco: 1.5, tipo: "Comida" },
  { nome: "Pastel", preco: 4.5, tipo: "Comida" },
  { nome: "Coca", preco: 6.99, tipo: "Bebida" },
];

const produtosFiltrados = produtos.filter((produto) => {
  return produto.preco < 10 && produto.tipo != "Bebida";
});
console.log(produtosFiltrados);
