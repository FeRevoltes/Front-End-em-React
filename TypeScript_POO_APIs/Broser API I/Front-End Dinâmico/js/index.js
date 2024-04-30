console.log(document.title);
console.log(document.URL);

//Selecionar elementos HTML da página utilizando o documento

// 1. Pelo nome da tag
const todosP = document.getElementsByTagName("p");
console.log(todosP);

// 2. Pela class da tag
const todosParagrafos = document.getElementsByClassName("paragrafo");
console.log(todosParagrafos);

// 3. Pelo name da tag
const emailInput = document.getElementsByName("email");
console.log(emailInput);

// 4. Pelo id da tag
const jsLogoImg = document.getElementById("js-logo");
console.log(jsLogoImg);

// 5. Query Selectior
const imagem = document.querySelector("body > img#js-logo");
console.log(imagem);

const paragrafos = document.querySelectorAll("body > p");
console.log(paragrafos);

console.clear();

//Alterando o conteúdo dos elementos HTML

const primeiroP = document.querySelector("p.paragrafo");
console.log(primeiroP);

console.log("textContent: ", primeiroP.textContent);
console.log("innerHTML", primeiroP.innerHTML);

primeiroP.innerHTML = "<strong>Outra coisa</strong>!";

console.clear();

console.log(emailInput.value);
emailInput[0].value = "Fernando";

// Criando elementos na página
const listaUl = document.querySelector('ul#lista')
const listasLi = document.querySelectorAll('ul > li')

const novaTagLi = document.createElement("li");
novaTagLi.textContent = "Segundo item";

/* listaUl.appendChild(novaTagLi) */

listaUl.insertBefore(novaTagLi, listasLi[1])

listaUl.removeChild(novaTagLi)