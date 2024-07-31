function generateReport() {
    
    const thEls = document.querySelectorAll('table thead tr th');
    const tbodyRows = document.querySelectorAll('table tbody tr');

    const checkedInputEls = [...thEls]
        .map((x, i) => ({input: x.children[0], index: i}))
        .filter((x) => x.input.checked);
        
    const outputData = [...tbodyRows].map((tr) => {
        return checkedInputEls.reduce((acc, current) => {
            acc[current.input.name] = tr.children[current.index].textContent 
            
            return acc;
        }, {});
    });

    document.querySelector('#output').value = JSON.stringify(outputData);
}