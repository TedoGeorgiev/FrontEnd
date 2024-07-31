function toggle() {
    const extraTextEl = 
        document.getElementById('extra');
    
    const buttonEl = 
        document.querySelector('.head span.button');
    
    const isHidden = extraTextEl.style.display === 'none';
    
    if (isHidden || !extraTextEl.style.display) {
        extraTextEl.style.display = 'block';
        buttonEl.textContent = 'Less';
    } else {
        extraTextEl.style.display = 'none';
        buttonEl.textContent = 'More';
    }
    
}