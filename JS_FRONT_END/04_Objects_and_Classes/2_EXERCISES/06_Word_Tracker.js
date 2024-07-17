function solve(input = []) {

    let inputArr = input;
    let searchWords = inputArr.shift().split(' ');

    let wordsArr = [];
    for (const word of searchWords) {
        const wordObj = {
            word,
            times: 0,
        }
        wordsArr.push(wordObj);
    }

    for (const searchWord of wordsArr) {
        const current = searchWord.word;
        for (const word of inputArr) {
            if (current === word) {
                searchWord.times ++;
            }
        }
    }

    wordsArr.sort((a, b) => b.times - a.times)
        .forEach((wordObj) => console.log(`${wordObj.word} - ${wordObj.times}`));

}

function fancySolve (input = []) {

    const [specialWords, ...restOfTheWords] = input;

    const words = specialWords.split(' ').reduce((acc, word) => {
        acc[word] = 0; // Every word is a key with 0 value
        return acc;
    }, {}); // returns an Object

    restOfTheWords.forEach((word) => {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    });

    Object.keys(words).sort((a, b) => words[b] - words[a])
        .forEach((word) => console.log(`${word} - ${words[word]}`));

}

fancySolve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)
solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);