// * Funções de alta ordem de arrays

// 1. Array.prototype.forEach()
const numeros = [40, 50, 60, 80, 100, 120];

numeros.forEach((item, index, arrayCompleto) => {
  console.log(index, item, arrayCompleto);
});

console.clear();

// 2. Array.prototype.find(): útil para encontrar um elemento no array

const numeroEcontrado = numeros.find((numero) => {
  return numero < 90 && numero > 60;
});
console.log(numeroEcontrado);

// array de objetos
const pessoas = [
  {
    nome: "pessoa1",
    idade: 30,
    altura: 1.84,
  },
  {
    nome: "pessoa2",
    idade: 27,
    altura: 1.67,
  },
  {
    nome: "pessoa3",
    idade: 43,
    altura: 1.72,
  },
];

const pessoaEncontrada = pessoas.find(
  (pessoa) => pessoa.idade > 27 && pessoa.altura < 1.8
);
console.log(pessoaEncontrada);

// 3. Array.prototype.findIndex()

const indiceDaPessoaEncontrada = pessoas.findIndex(
  (pessoa) => pessoa.idade < 40 && pessoa.altura > 1.7
);
console.log(indiceDaPessoaEncontrada)