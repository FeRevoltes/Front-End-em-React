const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];

function renderTaskOnHTML(taskTitle, done = false) {
  const li = document.createElement("li");

  //input checkbox
  const input = document.createElement("input");
  input.classList.add("task-checkbox");
  input.setAttribute("type", "checkbox");
  input.addEventListener("change", (event) => {
    const liToToggle = event.target.parentElement;
    const done = event.target.checked;
    const spanToToggle = liToToggle.querySelector("span");
    if (done) {
      spanToToggle.style.color = "#00ff48";
    } else {
      spanToToggle.style.color = "black";
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

  //span text
  const span = document.createElement("span");
  span.classList.add("task-item");
  span.textContent = taskTitle;
  if (done) {
    span.style.color = "#00ff48";
  }

  //button remove
  const button = document.createElement("button");
  button.classList.add("remove-btn");
  button.textContent = "Remover";
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;
    const titleToRemove = liToRemove.querySelector("span").textContent;
    tasks = tasks.filter((t) => t.title !== titleToRemove);

    todoListUl.removeChild(liToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  //Adicionar ao ul
  li.classList.add("task-list");
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  todoListUl.appendChild(li);
  taskTitleInput.value = "";
}

window.onload = () => {
  const tasksOnLocalStorage = localStorage.getItem("tasks");
  if (!tasksOnLocalStorage) return;
  tasks = JSON.parse(tasksOnLocalStorage);

  tasks.forEach((t) => {
    renderTaskOnHTML(t.title, t.done);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault(); //Evita o comportamento padrão de recarregar a página ao submeter o formulário
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
