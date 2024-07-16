function solve (word = '', start, end) {
    const subsWord = word.slice(start, start + end);
    console.log(subsWord);
}

solve('ASentence', 1, 8);