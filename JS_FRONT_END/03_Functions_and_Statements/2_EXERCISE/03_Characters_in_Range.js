function charactersInRange (firstChar, secondChar) {
    function checkSmaller (a, b) {
        if (a < b) {
            return a;
        }
        return b;
    }

    function checkBigger (a, b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    const smaller = checkSmaller(firstChar, secondChar);
    const bigger = checkBigger(firstChar, secondChar);

    let result = [];
    for (let i =  smaller.charCodeAt(0) + 1; i < bigger.charCodeAt(0); i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}

function printCharactersInRange(char1, char2) {
    // Get ASCII code of the characters
    const asciiCode1 = char1.charCodeAt(0);
    const asciiCode2 = char2.charCodeAt(0);

    // Determine the starting and ending ASCII code
    const start = Math.min(asciiCode1, asciiCode2);
    const end = Math.max(asciiCode1, asciiCode2);

    // Collect characters in the range
    let charactersInRange = [];
    for (let code = start + 1; code < end; code++) {
        charactersInRange.push(String.fromCharCode(code));
    }

    // Print the result
    console.log(charactersInRange.join(' '));
}

printCharactersInRange('#',
    ':'
);

charactersInRange('C',
    '#'
);