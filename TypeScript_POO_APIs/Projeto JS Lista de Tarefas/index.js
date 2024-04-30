const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];

function renderTaskOnHTML(taskTitle, done = false) {
  const li = document.createElement("li");

  const input = document.createElement("input"); // <input />
  input.setAttribute("type", "checkbox"); // <input type="checkbox"/>
  input.addEventListener("change", (event) => {
    const liToToggle = event.target.parentElement;
    const done = event.target.checked;
    const spanToToggle = liToToggle.querySelector("span");
    if (done) {
      spanToToggle.style.textDecoration = "line-through";
    } else {
      spanToToggle.style.textDecoration = "none";
    }

    tasks = tasks.map((t) => {
      if (t.title === spanToToggle.textContent) {
        return {
          title: t.title,
          done: !t.done,
        };
      }
      return t;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  input.checked = done;

  
  const span = document.createElement("span");
  span.textContent = taskTitle;
  if (done) {
    span.style.textDecoration = "line-through";
  }
  
  const button = document.createElement("button");
  button.textContent = "Remover";
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;
    const titleToRemove = liToRemove.querySelector("span").textContent;
    tasks = tasks.filter((t) => t.title !== titleToRemove);

    todoListUl.removeChild(liToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  todoListUl.appendChild(li);

  taskTitleInput.value = "";
}

window.onload = () => {
  const taksOnLocalStorage = localStorage.getItem("tasks");
  if (!taksOnLocalStorage) return;
  tasks = JSON.parse(taksOnLocalStorage);

  tasks.forEach((t) => {
    renderTaskOnHTML(t.title, t.done);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault(); //Evita o coportamento padrão de recarregar a página ao submeter o formulário
  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter pelo menos 3 caracteres ");
    return;
  }

  //adicionando a nova tarefa no array
  tasks.push({
    title: taskTitle,
    done: false,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  //Adicionando a nova tarefa no html
  renderTaskOnHTML(taskTitle);
});
