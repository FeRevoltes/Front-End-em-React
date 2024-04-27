"use strict";
// * TypeScript Tipagens
let num = 10; // Inferência de tipo
const pi = 3.14; //Valor constante
let nome = "Fernando"; //string
let correta = true; //boolean
const resultado = num * pi; // o pi vira um number
/* const nomeDoUsuario = prompt("Qual o seu nomes");
console.log(nomeDoUsuario?.toLowerCase());  */ // o ? serve para colocar um undefined em vez de null caso o usuário não escolha nada
// array types
// numeros: string[] | numeros: numbers[]
const numeros = [1, 2, 3, 4, 5];
// misto: (number | string | boolean) or (any)
const misto = ["Fernando", 20, 1.81, true]; // ! não é uma boa prática fazer um misto no arrays, typescript serve para definir os tipos, por isso não usar o any
const idade = []; // * Sempre definir o tipo para variaveis vazias
idade.push(33);
idade.push(12);
idade.push(15);
idade.push(24);
const menorDeIdade = idade.filter((idades) => idades < 18); // não precisa typar idades pois o typescript ja coloca ele como um number por causa de idade: number[]
console.log(menorDeIdade);
//tuples
const pessoaTupla = ["Fernando", 20]; // sempre vai haver apenas 2 valores
const pessoa = {
    nome: "Fernando",
    idade: 20,
    altura: 1.81,
};
pessoa.profissao = "desenvolvedor";
console.log(pessoa);
function chooseNumer(num1, num2, criterio
// * union types e literal types
) {
    switch (criterio) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 < num2 ? num1 : num2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return num1;
            return num2;
    }
}
const numeroEscolhido = chooseNumer(10, 20, "lower");
console.log("numero escolhido: ", numeroEscolhido);
const pessoas = {
    "123.456.789-00": {
        nome: "Fulano",
        idade: 20,
        altura: 1.8,
    },
    "123.456.789-01": {
        nome: "Fulana",
        idade: 20,
        altura: 1.8,
    },
};
