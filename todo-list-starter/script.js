const addTask = () => {};

const updateTodoList = () => {};

const createNewTodoItemElement = (task, index) => {};

const toggleComplete = (index) => {};

let todoTasks = [
  "finish JavaScript homework",
  "Clean the house",
  "Make dinner",
];

let todoTasksStatus = [false, true, false];

const todoList = document.getElementById("todo-list");

for (const [index, task] of todoTasks.entries()) {
  // Create a <p> element to store the task description
  const newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;

  // Apply a CSS class to the completed items
  if (todoTasksStatus[index]) {
    newTodoTaskTextElement.classList.add("complete");
  }

  // Create a <li> element to contain the paragraph
  const newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  // Adding a button to mark each item as complete
  const completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = "Completed";
  newTodoTaskElement.appendChild(completeButtonElement);

  // Add the <li> element to the list
  todoList.appendChild(newTodoTaskElement);
}
