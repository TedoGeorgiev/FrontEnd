function search() {
    const liElements =
        document.querySelectorAll('ul#towns li');

    const searchEl =
        document.querySelector('#searchText');

    const searchText = searchEl.value;
    
    const result = 
        document.getElementById('result');

    function clear (liElements) {
        for (const li of liElements) {
            li.style.textDecoration = 'none';
            li.style.fontWeight = 'normal';
        }
    }
    clear(liElements);
    
    let matches = 0;
    for (const li of liElements) {
        
        if (li.textContent.toLowerCase().includes(searchText.toLowerCase())) {
            matches ++;
            li.style.textDecoration = 'underline';
            li.style.fontWeight = 'bold';
        }
    }
    
    if (matches) {
        result.textContent = `${matches} matches found`;
    }
}
