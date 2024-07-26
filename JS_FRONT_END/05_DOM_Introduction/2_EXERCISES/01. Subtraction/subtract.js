function subtract() {
    const resultEl =
        document.getElementById('result');

    // const firstEl = 
    //     document.getElementById('firstNumber');
    // const secondEl =
    //     document.getElementById('secondNumber');
    //
    // const result = 
    //     Number(firstEl.value) - Number (secondEl.value);
    //
    // resultEl.textContent = result.toString();

    const htmlInputElements = 
        Array.from(document.querySelectorAll('input'));

    const result = 
        Number(htmlInputElements[0].value) - Number(htmlInputElements[1].value);
    
    resultEl.textContent = result.toString();
}