function lockedProfile() {
    
    const buttonElements = document.querySelectorAll('div.profile button');
    
    function showMoreClickHandler (event) {
        const button = event.target;
        
        const [lockInputEl, unlockInputEl] =
            button.parentElement.querySelectorAll('input');
        
        if (!unlockInputEl.checked) {
            return;
        }
        
        if (button.textContent === 'Show more') {
            button.parentElement.querySelector('div').style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            button.parentElement.querySelector('div').style.display = 'none';
            button.textContent = 'Show more'; 
        }
        
    }
    
    
    buttonElements.forEach((buttonEl) => 
        buttonEl.addEventListener('click', showMoreClickHandler));

}