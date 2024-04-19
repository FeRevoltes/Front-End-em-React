const array = ["Fernando", 20, 1.81, true];

const pessoa = {
  nome: "Fernando",
  idade: 20,
  altura: 1.81,
  programador: true,
  hobbie: ["Jogar", "karate", "manga"],
  imprimir: () => console.log("Bom dia"),
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["nome"]); //forma alternativa

pessoa.nome = "Fernando Gutierrez"; // Renomear
pessoa.profissao = "Desenvolvedor"; // Adicionar
console.log(pessoa);

delete pessoa.profissao;
console.log(pessoa);

pessoa.imprimir();

// --------------

const idade = 20;
const altura = 1.81;

const objeto = { idade: idade, altura: altura }; //pode ser simplificado para
const objeto2 = { idade, altura };
console.log(objeto2);


// --------------
console.clear()
const {nome, hobbie} = pessoa; //pega os atributos de mesmo nome e coloca na variavel
console.log(nome)
console.log(hobbie)
console.log(pessoa)