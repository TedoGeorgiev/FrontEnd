function solve (ch1, ch2, ch3) {

    let text = '';

    text = ch1 + ch2 + ch3;
    let output = '';

    for (let i = text.length - 1; i >= 0 ; i--) {
        let currentChar = text[i];
        output += currentChar + ' ';
    }
    console.log(output.trim());
}

function hacky (...args) {
    console.log(args.reverse().join(" "));
}

solve('A',
    'B',
    'C'
);

hacky ('A',
    'B',
    'C'
);
