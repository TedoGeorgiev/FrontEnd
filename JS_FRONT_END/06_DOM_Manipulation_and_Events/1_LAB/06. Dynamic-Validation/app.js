function validate() {
    const emailInputEl = document.getElementById('email');
    
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/;
    emailInputEl.addEventListener('change', (e) => {
        if (!pattern.test(e.currentTarget.value)){
            return e.currentTarget.classList.add('error');
        } else {
            e.currentTarget.classList.remove('error');
        }
        
    });
    
}