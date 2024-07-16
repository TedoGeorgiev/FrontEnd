function solve (text, word) {
    const replaceWord = text.replaceAll(word, '*'.repeat(word.length));
    console.log(replaceWord);
}

solve('A small sentence with some words small', 'small');
