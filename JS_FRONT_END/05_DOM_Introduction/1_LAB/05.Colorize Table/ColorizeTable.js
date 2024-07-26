function colorize() {
    
    // WITH ITERATION
    
    // const tableElement = document.querySelector('table tbody');
    // const tableRowElements = tableElement.children;
    //
    // console.log(tableRowElements);
    //
    // for (let i = 0; i < tableRowElements.length; i+= 2) {
    //     tableRowElements[i].style.backgroundColor = 'teal';
    // }
    
    // WITH CSS SELECTOR
    
    const evenTableRowElements = 
        document.querySelectorAll('table tr:nth-child(even)');
    
    console.log(evenTableRowElements);
    for (const trElement of evenTableRowElements) {
        trElement.style.backgroundColor = 'teal';
    }
}