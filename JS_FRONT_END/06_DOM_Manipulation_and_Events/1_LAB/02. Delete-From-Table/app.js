function deleteByEmail() {
    
    const trElements =  
        document.querySelectorAll('tbody tr');
    
    const tdMailElements = 
        document.querySelectorAll('tbody tr td:last-of-type');

    const inputEl = 
        document.querySelector('label input[type="text"][name="email"]');

    const resultElement = 
        document.getElementById('result');
    
    const deleteEl = Array.from(tdMailElements)
        .find((element) => element.textContent === inputEl.value);

    if (deleteEl) {
        deleteEl.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }

    inputEl.value = '';
}