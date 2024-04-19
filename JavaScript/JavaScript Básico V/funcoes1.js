function saudacao(nomeDoEstudante, curso = "Front-end em react") {
  // * parametro padrão 'curso="Front-end em react"', caso não tenha uma resposta do usuario, a variavel vai para o padrão
  return `Olá ${nomeDoEstudante}, Seja bem-vindo(a) ao curso de ${curso}!`;
}

const mensagemDaSaudacao = saudacao("Fernando"); // chama a função saudacao
console.log(mensagemDaSaudacao);

// exemplo 2
function somar(num1, num2) {
  return num1 + num2;
}

const resultado = somar(13, 17);
console.log(resultado);
console.log(resultado / 10);

// Funções anônimas
const dobroDoNumero = function (num) {
  return num * 2;
};

const dobro = dobroDoNumero(5);
console.log(dobro);

// ARROW FUNCTIONS
const subtrair = (num1, num2) => {
  return num1 - num2;
};

const subtracao = subtrair(25, 15);
console.log(subtracao);

const multiplicar = (num1, num2) => num1 * num2; //sem chaves já vem com return
const multiplicacao = multiplicar(10, 5);
console.log(multiplicacao);

const triploDoNumero = (numero) => numero * 3; //com apenas um parâmetro não precisa de parênteses
