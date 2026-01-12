// ===== STATE =====
let todoTasks = [
  "finish JavaScript homework",
  "Clean the house",
  "Make dinner",
];

let todoTasksStatus = [false, true, false];

let importanceStatus = [false, false, false];

// ===== ADD TASK =====
const addTask = () => {
  const newTask = document.getElementById("new-task-text");
  if (newTask.value) {
    todoTasks.push(newTask.value);
    todoTasksStatus.push(false);
    importanceStatus.push(false);
    newTask.value = "";
    updateTodoList();
  }
};

// ===== RENDER LIST =====

const updateTodoList = () => {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
  }
};

// ===== CREATE ONE TODO ITEM =====

const createNewTodoItemElement = (task, index) => {
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

  // Set label based on current status
  if (todoTasksStatus[index]) {
    completeButtonElement.value = "incomplete";
  } else {
    completeButtonElement.value = "complete";
  }

  completeButtonElement.onclick = function () {
    // Toggle the completion status
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);

  // 🚩 Flag button for importance
  const flagButtonElement = document.createElement("button");
  flagButtonElement.type = "button";
  flagButtonElement.classList.add("flag-button");
  flagButtonElement.innerText = "🚩";

  if (importanceStatus[index]) {
    flagButtonElement.classList.add("important");
  }

  flagButtonElement.onclick = () => toggleImportant(index);
  newTodoTaskElement.appendChild(flagButtonElement);

  return newTodoTaskElement;
};

// ===== TOGGLE COMPLETE =====

const toggleComplete = (index) => {
  // If it is complete, set it to incomplete.
  // If it is incomplete, set it to complete.
  if (todoTasksStatus[index] == false) {
    todoTasksStatus[index] = true;
  } else {
    todoTasksStatus[index] = false;
  }
  updateTodoList();
};

//  ===== TOGGLE IMPORTANT =====
const toggleImportant = (index) => {
  importanceStatus[index] = !importanceStatus[index];
  updateTodoList();
};

updateTodoList();
