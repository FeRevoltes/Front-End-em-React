const prompt = require("readline-sync");
const idade = prompt.question("Qual a sua idade?");
const idadeNumber = Number(idade);
console.log(idadeNumber, typeof idadeNumber);
console.log(Number("x")); // ! NaN: Not a Number
console.log(String(10), typeof String(10));
console.log(Boolean(2))
console.log(Boolean(0)) // * Só o 0 é falso

//Correção Implícita
console.log(10 + "5") //= 105
console.log(10 + "5") // = 5
console.log(10 * "5") // 50