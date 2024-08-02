function attachGradientEvents() {
    // Get element references
    const resultElement = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');
    
    // Attach mouse event
    gradientElement.addEventListener('mousemove', (ev) => {
        const currentPosition = ev.offsetX;
        const elementWidth = ev.currentTarget.clientWidth;
        
        const percent = Math.floor((currentPosition / elementWidth) * 100);
        
        resultElement.textContent = `${percent}%`;
    });

    gradientElement.addEventListener('mouseout', () => {
        resultElement.textContent = '';
    });
}