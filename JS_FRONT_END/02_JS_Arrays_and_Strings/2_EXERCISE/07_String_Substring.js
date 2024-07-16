function stringSubstring (word, text) {

    const match = text.split(/\s+/g)
        .find((x) => x.toLowerCase() === word.toLowerCase());
    console.log(match ? word : `${word} not found!`);

    // const wordsArr = text.split(/\s+/g);
    //
    // let isFound = false;
    // for (let i = 0; i < wordsArr.length; i++) {
    //     if (word.toLowerCase(                      B) === wordsArr[i].toLowerCase()) {
    //         console.log(word);
    //         isFound = true;
    //         break;
    //     }
    // }
    // if(!isFound) {
    //     console.log(`${word} not found!`);
    // }
}

function regexSubstring (word, text) {

    const regex = new RegExp(`\\b${word}\\b`, "i");
    const result = text.match(regex);
    console.log(result ? word : `${word} not found!`);
}

stringSubstring('javascript',
    'JavaScript is the best programming language'
);

stringSubstring('python',
    'JavaScript is the best programming language'
);

regexSubstring('javascript',
    'JavaScript is the best programming language'
);

regexSubstring('python',
    'JavaScript is the best programming language'
);