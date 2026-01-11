let shoppingListItems = ["milk", "eggs", "bread"];

const listElement = document.getElementById("shopping-list-items");

for (const shoppingItem of shoppingListItems) {
  console.log(shoppingItem);
  // We create a list element
  let itemElement = document.createElement("li");
  // Add the inner text to the list element
  itemElement.innerText = shoppingItem;
  // Add the list element to the ul
  listElement.appendChild(itemElement);
}

const addItem = () => {};

const updateItems = () => {};
