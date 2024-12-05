const form = document.getElementById('myForm');
const nameField = document.getElementById('nameField');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function (event) {
    if (nameField.value.trim() === '') {
        errorMessage.textContent = 'Name field cannot be empty!';
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.textContent = '';
        alert(`Form submitted with name: ${nameField.value}`);
    }
});