const prompt = require("readline-sync");

for (let i = 0; i < 5; i++) {
  console.log("hello world");
}
console.clear();

let maiorNumero = 0;
let numeroInformado;

for (let i = 0; i < 5; i++) {
  numeroInformado = Number(prompt.question("Digite um numero: "));
  if (numeroInformado > maiorNumero) {
    maiorNumero = numeroInformado;
  }
}
console.log(`Maior numero: ${maiorNumero}`);

const nome = "Fernando";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
  if (i === 4) {
    break;
  }
}

console.clear();

// * array

const notaDoAluno = [10, 8, 5];
const pessoa = ["Fernando", 20, 1.81, true];

console.log(notaDoAluno);
console.log(pessoa);
console.log(pessoa[0]);
pessoa[3] = false; //alterando o conteudo interno da variável e não a variável
console.log(pessoa);
console.log(pessoa.length); // 4 elementos dentro do array

const num = [40, 32, 43, 54, 76, 10];
console.log(num.slice(0, 2)); // end pega apenas 2 itens 0 e 1, não 0 1 2
console.log(num.slice(2));

console.clear();

num.push(15); //adiciona um elemento no final do array
console.log(num);

num.unshift(-1); //adiciona um elemento no início do array
console.log(num);

num.pop(); // remove o último elemento do array
console.log(num);

num.shift(); // remove o primeiro elemento do array
console.log(num);

console.log(num.includes(43)); //saber se um elemento está no array, se sim == true

console.clear();

// * indexOf

const array = [10, 20, 30, 40, 50];
console.log(array.indexOf(30)); // Saída: 2 (o índice de 30 é 2)
console.log(array.indexOf(35)); // Saída: -1 (35 não está no array)
console.log(array.indexOf(30, 2)); // Saída: 2 (começa a busca a partir do índice 2)
console.log(array.indexOf(20, 3)); // Saída: -1 (começa a busca a partir do índice 3 e 20 não está presente depois do índice 3)
console.log(array.lastIndexOf(40)); // Saída: 3 (começa a busca a partir do final, peganado a primeira variavel correspondente)

// * percorrer um array usando for

const num2 = [20, 40, 60, 80, 100, 120];
for (let i = 0; i < num2.length; i++) {
  console.log(i, num2[i]);
}

// * for-of
for (const elemento of num2){ //percorre os elementos de um objeto
  console.log(elemento)
}
// * for-in
for (const indice in num2){ //percorre os indices de um objeto // ! a variavel do for in é semrpe uma string
  console.log(indice)
}