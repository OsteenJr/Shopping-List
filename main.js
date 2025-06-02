const shoppingList = document.getElementById('shoppingList');
const comments = document.getElementById('comments');
const addButton = document.getElementById('addBtn');

function addItem() {
    const itemInput = document.getElementById('item');
    const itemValue = itemInput.value.trim();

    if (itemValue === '') {
        comments.textContent = 'Please enter an item.';
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = itemValue;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Attach delete functionality
    deleteButton.addEventListener('click', function() {
        shoppingList.removeChild(listItem);
        comments.textContent = `Removed "${itemValue}" from the shopping list.`;
    });

    listItem.appendChild(deleteButton);
    shoppingList.appendChild(listItem);

    comments.textContent = `Added "${itemValue}" to the shopping list.`;
    itemInput.value = '';
    itemInput.focus();
}

addButton.addEventListener('click', addItem);
