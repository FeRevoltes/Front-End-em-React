// Array.prototype.every(): verifica se todos os elementos do array seguem uma determindada condição retornada pela função

const numeros = [10, 20, 30, 40, 50, 60]

const todosPositivos = numeros.every((elementos) => elementos > 0) // retorna true se todos os elementos comprirem a condição
console.log(todosPositivos)

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

const todosMaiorDeIdade = pessoas.every((pessoa) => pessoa.idade >= 18 && pessoa.altura > 1.7)
console.log(todosMaiorDeIdade)

// Array.prototype.some() verifica se algum dos elementos de um array seguem uma determinada condição retornada pela função

const numeros2 = [-1, 3, 7, -3, 5]

const retorno = numeros2.some((numero) => numero > 0) // retorna true
console.log(retorno)