function solve() {
    const correctAnswers = ['onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents'];

    const sectionArrEls
        = [...document.querySelectorAll('section')];


    const answerElements = document.querySelectorAll('div.answer-wrap');
    console.log(answerElements);

    const userAnswers = [];

    function countCorrectAnswers (correctAnswers, userAnswers) {
        let counter = 0;
        for (let i = 0; i < correctAnswers.length; i++) {
            if (correctAnswers[i] === userAnswers[i]) {
                counter ++;
            }
        }
        return counter;
    }
    
    function onClickAnswerHandler(event) {
        const answer = event.target.textContent;
        userAnswers.push(answer);
        console.log(userAnswers);
        
        const currentSectionEl = sectionArrEls[userAnswers.length - 1];
        currentSectionEl.style.display = 'none';

        if (userAnswers.length === 3) {
            
            const correctAnswerCount = 
                countCorrectAnswers(correctAnswers, userAnswers);
            
            const answerH1El
                = document.querySelector('.results-inner h1');
            
            
            if (correctAnswerCount === 3) {
                answerH1El.textContent = "You are recognized as top JavaScript fan!";
            } else {
                answerH1El.textContent = `You have ${correctAnswerCount} right answers`;
            }
            answerH1El.parentElement.parentElement.style.display = 'block';
            return;
        }
        const nextSectionEl = sectionArrEls[userAnswers.length];
        nextSectionEl.style.display = 'block';
        
    }

    answerElements.forEach((answer) => {
        answer.addEventListener('click', onClickAnswerHandler);
    });


}
