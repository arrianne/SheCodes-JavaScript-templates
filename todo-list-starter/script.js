// ======================================================
// STATE
// ======================================================

// Task text
let todoTasks = [
  "finish JavaScript homework",
  "Clean the house",
  "Make dinner",
];

// Whether each task is completed
let todoTasksStatus = [false, false, false];

// Whether each task is marked as important
let importanceStatus = [false, false, false];

// Due dates ("" means no due date)
let dueDates = ["", "", ""];

// Used for drag-and-drop reordering
let draggedIndex = null;

// Category for each task (must stay in sync with other arrays)
let categories = ["work", "home", "personal"];

// ======================================================
// ADD A NEW TASK
// ======================================================

const addTask = () => {
  const textInput = document.getElementById("new-task-text");
  const dateInput = document.getElementById("new-task-date");
  const categoryInput = document.getElementById("new-task-category");

  const taskText = textInput.value.trim();
  const dueDate = dateInput.value; // YYYY-MM-DD or ""
  const category = categoryInput.value; // "work" | "home" | "personal"

  // Do nothing if the task text is empty
  if (!taskText) return;

  // Add new task to all state arrays
  todoTasks.push(taskText);
  todoTasksStatus.push(false);
  importanceStatus.push(false);
  dueDates.push(dueDate);
  categories.push("personal");
  categories.push(category);
  categoryInput.value = "personal"; // reset dropdown to default

  // Clear inputs
  textInput.value = "";
  dateInput.value = "";

  // Re-render list
  updateTodoList();
};

// ======================================================
// RENDER THE TODO LIST
// ======================================================

const updateTodoList = () => {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  // Rebuild the list from state
  for (const [index, task] of todoTasks.entries()) {
    const todoItem = createNewTodoItemElement(task, index);
    todoList.appendChild(todoItem);
  }
};

// ======================================================
// MOVE TODO ITEM (DRAG & DROP)
// ======================================================

const moveTodo = (fromIndex, toIndex) => {
  if (fromIndex === toIndex) return;

  // Helper to move an item inside an array
  const moveInArray = (arr) => {
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, item);
  };

  // Keep all arrays in sync
  moveInArray(todoTasks);
  moveInArray(todoTasksStatus);
  moveInArray(importanceStatus);
  moveInArray(dueDates);
  moveInArray(categories);
  updateTodoList();
};

// ======================================================
// CREATE A SINGLE TODO LIST ITEM (<li>)
// ======================================================

const createNewTodoItemElement = (task, index) => {
  //create a list item to hold the task
  const li = document.createElement("li");

  // Apply category class for background colour
  li.classList.add(`category-${categories[index]}`);

  // create a p element to hold the task text
  const text = document.createElement("p");
  text.innerText = task;

  // make cursor up/down on drag
  const handle = document.createElement("span");
  handle.className = "drag-handle";
  handle.textContent = "↕"; // or "⋮⋮"
  li.prepend(handle);

  if (todoTasksStatus[index]) {
    text.classList.add("complete");
  }

  if (importanceStatus[index]) {
    text.classList.add("important-task");
  }

  li.appendChild(text);

  // ------------------
  // Drag & drop setup
  // ------------------
  li.draggable = true;
  li.dataset.index = index;

  li.addEventListener("dragstart", (e) => {
    draggedIndex = Number(li.dataset.index);
    e.dataTransfer.effectAllowed = "move";
  });

  li.addEventListener("dragover", (e) => {
    e.preventDefault(); // Required to allow dropping
  });

  li.addEventListener("drop", (e) => {
    e.preventDefault();
    const targetIndex = Number(li.dataset.index);

    if (draggedIndex === null) return;

    moveTodo(draggedIndex, targetIndex);
    draggedIndex = null;
  });

  // ------------------
  // Due date display
  // ------------------
  if (dueDates[index]) {
    const dateEl = document.createElement("small");
    dateEl.innerText = `Due: ${dueDates[index]}`;
    dateEl.classList.add("due-date");
    li.appendChild(dateEl);
  }

  // ------------------
  // Complete / incomplete button
  // ------------------
  const completeButton = document.createElement("input");
  completeButton.type = "button";
  completeButton.value = todoTasksStatus[index] ? "completed" : "complete";
  completeButton.onclick = () => toggleComplete(index);
  li.appendChild(completeButton);

  // ------------------
  // Important flag button
  // ------------------

  const flagButton = document.createElement("button");
  flagButton.type = "button";
  flagButton.classList.add("flag-button");
  flagButton.innerText = "🚩";

  if (importanceStatus[index]) {
    flagButton.classList.add("important");
  }

  flagButton.onclick = () => toggleImportant(index);
  li.appendChild(flagButton);

  return li;
};

// ======================================================
// TOGGLE COMPLETE STATUS
// ======================================================

const toggleComplete = (index) => {
  todoTasksStatus[index] = !todoTasksStatus[index];
  updateTodoList();
};

// ======================================================
// TOGGLE IMPORTANT STATUS
// ======================================================

const toggleImportant = (index) => {
  importanceStatus[index] = !importanceStatus[index];
  updateTodoList();
};

// ======================================================
// INITIAL RENDER
// ======================================================

updateTodoList();
