function attachEventsListeners() {
    const buttonElements =
        Array.from(document.querySelectorAll('input[type = "button"]'));
    
    buttonElements.forEach((button) => {
        button.addEventListener('click', (e) => {
            
            const converterID = e.currentTarget.getAttribute('id');
            const inputEl = e.currentTarget.parentElement.children[1].value;
            
            switch (converterID) {
                
                case 'daysBtn':
                    document.getElementById('hours').value = inputEl * 24;
                    document.getElementById('minutes').value = inputEl * 24 * 60;
                    document.getElementById('seconds').value = inputEl * 24 * 60 * 60;
                    break;
                case 'hoursBtn':
                    document.getElementById('days').value = inputEl / 24;
                    document.getElementById('minutes').value = inputEl * 60;
                    document.getElementById('seconds').value = inputEl * 60 * 60;
                    break;
                case 'minutesBtn':
                    document.getElementById('days').value = inputEl / 60 /24;
                    document.getElementById('hours').value = inputEl / 60;
                    document.getElementById('seconds').value = inputEl * 60;
                    break;
                case 'secondsBtn':
                    document.getElementById('days').value = inputEl / 60 / 60 /24;
                    document.getElementById('hours').value = inputEl / 60 / 60;
                    document.getElementById('minutes').value = inputEl / 60;
                    break;
            }
            
        });
    })
}