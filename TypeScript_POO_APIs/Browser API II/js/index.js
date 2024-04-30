const botaoAumentar = document.querySelector("#aumentar-botao");
const botaoDiminuir = document.querySelector("#diminuir-botao");

const contador = document.querySelector("#contador");

botaoAumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);
  contador.textContent = valorAtual + 1;
  botaoAumentar.classList.add("btn");
  botaoDiminuir.classList.remove("btn");
});

botaoDiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);
  contador.textContent = valorAtual - 1;
  botaoDiminuir.classList.add("btn");
  botaoAumentar.classList.remove("btn");
});

//
const input = document.querySelector("#input");
input.addEventListener("input", () => {
  console.log(input.value);
});

//Adcionando estilos inline
contador.style.color = "red";
contador.style.padding = "0 2rem";
contador.style.border = "1px solid #eee";
contador.style.width = "75px";

// Manipular classes
console.log(botaoDiminuir.classList);
botaoAumentar.classList.add("btn");
botaoDiminuir.classList.remove("btn");

const themeButton = document.querySelector("#theme");

let darkTheme = false;

// Definindo uma função que será executada ao carregar o conteúdo da janela/página
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem("isDarkTheme");
  darkTheme = isDarkThemeStorage === "true";
  const body = document.querySelector("body");
  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};

themeButton.addEventListener("click", () => {
  darkTheme = !darkTheme;
  localStorage.setItem("isDarkTheme", darkTheme);

  const body = document.querySelector("body");
  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
