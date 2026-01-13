let shoppingListItems = ["milk", "eggs", "bread"];

const addItem = () => {
  let item = document.getElementById("new-item-text").value;
  // add the new item to the shopping list along with all the other original shopping list items
  shoppingListItems = [...shoppingListItems, item];
  updateItems();
  // clear new item text box
  document.getElementById("new-item-text").value = "";
};

const updateItems = () => {
  // First we get the list element from the HTML that we want to populate
  let listElement = document.getElementById("shopping-list-items");
  // Then we clear it of any existing items
  listElement.innerHTML = "";

  // Then we loop through the shopping list items and add them to the list
  for (const shoppingItem of shoppingListItems) {
    // this step just creates a list itme but doesn't add it to the list yet.
    let itemElement = document.createElement("li");
    // set the text of the list item to be the shopping item
    itemElement.innerText = shoppingItem;
    // now we add the list item to the actual list
    listElement.appendChild(itemElement);
  }
};

// targets the clear button and adds an event listener to remove all items
const clearItems = () => {
  shoppingListItems = [];
  updateItems();
};

updateItems();
