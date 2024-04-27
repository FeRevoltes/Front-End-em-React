"use strict";
// Programação Orientada a Objeto
// Classe: Abstração
// Definindo a abstração de uma pessoa
class Pessoa {
    // métodos: ação (funções)
    // Método construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log("Dormindo.");
    }
    //accessor: getter
    get cpf() {
        return this._cpf;
    }
    //accessor: setter
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            // lançando um erro!
            throw new Error("CPF lenght is incorrect!");
        }
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log("Ensinando.");
    }
}
// Criando uma pessoa (indivíduo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa("Pessoa1", 21, 1.81, "123.456.789-00");
const pessoa2 = new Pessoa("Pessoa2", 23, 1.74, "123.456.789-01");
console.log(pessoa1);
pessoa2.dormir();
pessoa1.nome = "Fulano";
console.log(pessoa1.nome);
console.log(pessoa1.cpf);
pessoa1.cpf = "987-654-321-00"; // se o cpf não tiver um comprimento de 14 caracteres vai surgir um erro no console criado pelo set
console.log(pessoa1.cpf);
//Objeto da classe professor
const professor = new Professor("Professor", 30, 1.82, "123.456.789-03", "A1");
console.log(professor);
// Polimorfismo
console.log(pessoa1 instanceof Pessoa);
console.log(pessoa1 instanceof Professor);
console.log(professor instanceof Pessoa);
console.log(professor instanceof Professor);
