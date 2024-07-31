function solve() {

    const validNamingArr = ['Camel Case', 'Pascal Case'];

    const textInputEl = document.getElementById('text');
    const namingConventionEl =
        document.getElementById('naming-convention');

    const resultEl = document.getElementById('result');
    
    if (!validNamingArr.includes(namingConventionEl.value)) {
        resultEl.textContent = 'Error!';
        return;
    }
    
    const pascalCaseText = textInputEl.value
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase().concat(word.slice(1)))
        .join('');
    
    resultEl.textContent = 
        namingConventionEl.value === validNamingArr[0] ?
            pascalCaseText[0].toLowerCase().concat(pascalCaseText.slice(1)) :
            pascalCaseText;
}