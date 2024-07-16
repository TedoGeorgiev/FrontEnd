function revealWords (specialWords, template) {

    const words = specialWords.split(', ');

    let finalSentence = template;
    words.forEach((word) => {
        const searchValue = '*'.repeat(word.length);
        finalSentence = finalSentence.replace(searchValue, word);
    })
    console.log(finalSentence);
}


function myTry (specialWords, template) {
    specialWords.split(', ').forEach((word) => {
        const wordMatch = '*'.repeat(word.length);
        template = template.replace(wordMatch, word);
    });
    console.log(template);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);

myTry('great',
    'softuni is ***** place for learning new programming languages'
);