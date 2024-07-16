function noobSolve (text, searchedWord) {
    const wordsArr = text.split(' ');
    let counter = 0;
    for (let word of wordsArr) {
        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);
}

function proSolve (text = '', searchedWord) {
    //const pattern = /\b\is\b/g;

    const pattern = new RegExp(`\\b${searchedWord}\\b`, 'g');

    const result = text.match(pattern) || [];
    console.log(result.length);
}

noobSolve('This is a word and it also is a sentence', 'is');

proSolve('This is a word and it also is a sentence', 'is');