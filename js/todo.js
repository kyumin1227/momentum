const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-List");
const toDoInput = toDoForm.querySelector("input");

const toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(todo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.append(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

function sayHello(item) {
    console.log("Hello", item);
}

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => {console.log("Hello", item);});
}