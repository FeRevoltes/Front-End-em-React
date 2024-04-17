const prompt = require("readline-sync");

// * Exemplo 1
let saldo = Number(prompt.question("Qual o seu saldo? "));

while (saldo < 0) {
  saldo = Number(prompt.question("Saldo invalido!, Informe novamente: "));
}
console.log(saldo);

// * Exemplo 2
let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));
let somaDasNotas = 0;
let qtNotas = 0;

while (notaDoAluno >= 0) {
  somaDasNotas += notaDoAluno;
  qtNotas++;
  notaDoAluno = Number(prompt.question("Informe a proxima nota do aluno: "));
}

console.log(
  `Total de notas ${qtNotas}, Somas das notas: ${somaDasNotas}, Media das notas: ${
    somaDasNotas / qtNotas
  }`
);

// * Exemplo 3
const numeroAleatorio = parseInt(Math.random() * 10); // * pode usar Math.round() para arredondar
let numDoUsuario = Number(prompt.question("informe um número entre 0 e 10: "));

while (numDoUsuario !== numeroAleatorio) {
  console.log("\nVoce errou o numero, tente novamente!");
  numDoUsuario = Number(prompt.question("\nInforme um numero entre 0 e 10: "));
}

console.log(`Parabens você acertou! número era ${numeroAleatorio}`);

// * do while

do {
  saldo = Number(prompt.question("informe seu saldo: "));
} while (saldo < 0);
