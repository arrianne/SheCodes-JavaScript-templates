let todoTasks = [
  "finish JavaScript homework",
  "Clean the house",
  "Make dinner",
];

let todoTasksStatus = [false, true, false];

const todoList = document.getElementById("todo-list");

for (const [index, task] of todoTasks.entries()) {
  // create a <p> element to store the task description
  const newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;

  // Apply a css class if the task is complete
  if (todoTasksStatus[index]) {
    newTodoTaskTextElement.classList.add("complete");
  }

  // create a <li> element to store the task item
  const newTodoItemElement = document.createElement("li");
  newTodoItemElement.appendChild(newTodoTaskTextElement);

  // add the new todo item to the todo list
  todoList.appendChild(newTodoItemElement);
}

const addTask = () => {};

const updateTodoList = () => {};

const createNewTodoItemElement = (task, index) => {};

const toggleComplete = (index) => {};
