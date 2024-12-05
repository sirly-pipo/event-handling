
const inputField = document.getElementById('itemInput');
const addButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');


addButton.addEventListener('click', function() {
    const itemText = inputField.value;

    if (itemText.trim() === '') {
        alert('Please enter a valid item.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    itemList.appendChild(listItem);

    inputField.value = '';
});