// Fetch API

//then/catch
fetch("https://viacep.com.br/ws/01001000/json/")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((erro) => {
    console.log(erro);
  });

// asycn/await
async function obterDadosDoCep() {
  try {
    const resposta = await fetch("https://viacep.com.br/ws/01001000/json/");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.log("Deu errado!", erro)
  } finally{
    console.log("Terminou a requisição")
  }
}

obterDadosDoCep();
