function solve() {
    
    const inputElement = 
        document.getElementById('input');
    const outputElement = 
        document.getElementById('output');
    
    // function createParagraphEl (text) {
    //     const pEl = document.createElement('p');
    //     pEl.textContent = text;
    //     return pEl;
    // }

    const sentenceArr = inputElement.value
        .split('.')
        .filter(Boolean)
        .map((x) => x.trim());
            

    for (let i = 0; i < sentenceArr.length; i+= 3) {
        const currentText = sentenceArr.slice(i, i + 3).join('. ').concat('.');
        // const currentParagraph = createParagraphEl(currentText);
        // outputElement.appendChild(currentParagraph);

        outputElement.innerHTML += `<p>${currentText}</p>>`; // add paragraph like a string
    }
}