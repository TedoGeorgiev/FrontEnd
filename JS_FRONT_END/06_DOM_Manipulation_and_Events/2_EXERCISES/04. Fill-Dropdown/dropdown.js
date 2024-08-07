function addItem() {
    
    const textEl = document.getElementById('newItemText');
    const valueEl = document.getElementById('newItemValue');
    
    const dropDownEl = document.getElementById('menu');
    
    const newOptionEl = document.createElement('option');
    newOptionEl.textContent = textEl.value;
    newOptionEl.value = valueEl.value;
    
    dropDownEl.appendChild(newOptionEl);
    
    textEl.value = '';
    valueEl.value = '';
}