function solve() {

    const [generateBtn, buyBtn] =
        document.querySelectorAll('button');

    const tBodyEl = document.querySelector('tbody');
    const firstTrEl = tBodyEl.querySelector('tr');

    const [inputTextArea, outputTextArea] =
        document.querySelectorAll('textarea');

    function appendTrForEachData({img, name, price, decFactor}) {
        const checkBoxEl = firstTrEl.children[4].children[0];
        checkBoxEl.disabled = false;

        const currentTrClone = firstTrEl.cloneNode(true);
        currentTrClone.children[0].children[0].setAttribute('src', img);
        currentTrClone.children[1].children[0].textContent = name;
        currentTrClone.children[2].children[0].textContent = price;
        currentTrClone.children[3].children[0].textContent = decFactor;

        tBodyEl.appendChild(currentTrClone);
    }

    function onGenerateBtnClickHandler() {
        const inputData = JSON.parse(inputTextArea.value);

        inputData.forEach(appendTrForEachData);
    }

    function onBuyBtnClickHandler() {
        const allChecked = [...document.querySelectorAll('tbody tr')]
            .filter(el => el.querySelector('input[type="checkbox"]').checked === true);
        
        
        let namesArr = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        
        allChecked.forEach((item) => {
            const name = item.children[1].children[0].textContent;
            const price = Number(item.children[2].children[0].textContent);
            const decFactor = Number(item.children[3].children[0].textContent);
            
            namesArr.push(name);
            totalPrice += price;
            totalDecFactor += decFactor;
        })
        
        const allItems = namesArr.join(', ');
        
        const result = (`Bought furniture: ${allItems}.\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(totalDecFactor / allChecked.length).toFixed(2)}`).trim();
        outputTextArea.value = result;

    }

    generateBtn.addEventListener('click', onGenerateBtnClickHandler);
    buyBtn.addEventListener('click', onBuyBtnClickHandler);

}