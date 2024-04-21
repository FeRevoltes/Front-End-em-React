const prompt = require("readline-sync");
const idade = Number(prompt.question("Qual a sua idade? "));

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

const mediaDoAluno = 7;

if (mediaDoAluno >= 7) {
  console.log("Aprovado!\nParabéns 😁👍");
} else if (mediaDoAluno >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}

const idadeDaPessoa = 18;
const temCNH = false;

if(idadeDaPessoa >=18 && temCNH){
    console.log("Pode dirigir!")
} else{
    console.log("Não pode dirigir!")
}