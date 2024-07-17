function solve (input = '') {

    const allWords = input.toLowerCase()
        .split(' ')
        .reduce((acc, word) => {
        if (acc.hasOwnProperty(word)) {
            acc[word] += 1;
        } else {
            acc[word] = 1;
        }
        return acc;
    }, {});

    console.log(Object.keys(allWords)
        .filter((word) => allWords[word] % 2 !== 0)
        .join(' '));


}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');