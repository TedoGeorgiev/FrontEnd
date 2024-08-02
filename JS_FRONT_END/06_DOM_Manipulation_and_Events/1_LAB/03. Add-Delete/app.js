function addItem() {
    //TODO...
    const itemsElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');

    const newItemText = inputElement.value;
    
    const newItemElement = document.createElement('li');
    newItemElement.textContent = newItemText;
    
    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    // deleteButton.href = '#';
    deleteButton.setAttribute('href', '#');
    
    deleteButton.addEventListener('click', (event) => {
        // newItemElement.remove();
        event.currentTarget.parentElement.remove();
        
    });
    
    // Add button to liElement
    
    newItemElement.append(deleteButton);
    itemsElement.append(newItemElement);

    inputElement.value = '';
}