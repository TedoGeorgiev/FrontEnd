function addItem() {

    const ulListElements =
        document.querySelector('ul#items');
    const inputEl = 
        document.querySelector('input[type="text"]');

    let addNewLiElement = document.createElement('li');
    addNewLiElement.textContent = inputEl.value;
    
    ulListElements.append(addNewLiElement);
    inputEl.value = '';
}