// HIGH ORDER FUNCTIONS

// * 1. Função que retorna outra função como parâmetro (Cloujure)

function welcome(courseName) {
  return (StudentName) => {
    console.log(
      `Olá ${StudentName}, Seja bem vinda(o) ao curso de ${courseName}`
    );
  };
}

const displatyWelcomeToFrontEndCourse = welcome("Front-end em React");

displatyWelcomeToFrontEndCourse("Fernando");

// * 2. Função que recebe outra função como paramêtro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// funcaoDaOperacao: função que realiza uma operação entre os dois números
const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2)

// const calcular = (10, 5, somar) => somar(10, 5)
const retorno = calcular(10, 5, somar)
console.log(retorno)

const resultado = calcular(10, 5, (num1, num2) => (num1 * num2) + (2 * num1 * num2))
console.log(resultado)