const fs = require("fs");

// * 1. Callbacks

/* console.log("ANTES de ler um arquivo");

// Função assicrona (ler um arquivo leva um tempo)
fs.readFile(
  "./JavaScript/JavaScript Avançado I/arquivo.txt",
  (erro, conteudoDoArquivo) => {
    if (erro) {
      console.log("Ocorreu um erro: ", erro);
    } else {
      console.log(String(conteudoDoArquivo));
    }
  }
);

console.log("DEPOIS de ler um arquivo");

// Exemplo 2
setTimeout(() => {
  console.log("Isso aqui vai ser executado após 2 segundos!");
}, 2 * 1000); */

// * 2. Promises

/* console.log("ANTES da promise"); */
function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "./JavaScript/JavaScript Avançado I/arquivo.txt",
      (erro, conteudoDoArquivo) => {
        if (erro) {
          reject("Ocorreu um erro: ", erro);
        } else {
          resolve(String(conteudoDoArquivo));
        }
      }
    );
  });
}
/* 
lerArquivoPromise()
  .then((retornoDoResolveDaPromise) => {
    console.log("Deu certo: ", retornoDoResolveDaPromise);
  })
  .catch((erro) => {
    console.log("Deu ruim: ", erro);
  })
  .finally(() => {
    console.log("Isso aqui vai ser executado, independente do resultado");
  }); */

// * 3. Async/await

async function leituradeDados() {
  console.log("Antes");
  try {
    const dadosDoArquivoLido = await lerArquivoPromise(); //espera a promessa ser resolvida para avançar
    console.log(dadosDoArquivoLido);
    console.log("Depois");
  } catch (err) {
    console.log(err)
    console.log("Depois com Erro")
  } finally{
    console.log("Dentro do finally")
  }
}
leituradeDados();
