function solve (input = []) {
    let encodedSpell = input.shift();

    let commands = input.shift();

    function removeEven (text) {
        let newText = '';
        for (let i = 0; i <= text.length; i+= 2) {
            newText += text.charAt(i);
        }
        return newText;
    }

    function takePart (text, start, end) {
        let newText = '';
        const textArr = text.split('').slice(start, end);
        newText = textArr.join('');
        return newText;
    }

    function reverse (text, phrase) {
        const newText = text.replace(phrase, '');
        const reversed = phrase.split('').reverse().join('');
        return newText.concat(reversed);
    }


    while (commands !== 'End') {

        const command = commands.split('!')[0];
        switch (command) {
            case 'RemoveEven':
                encodedSpell = removeEven(encodedSpell);
                console.log(encodedSpell);
                break;

            case 'TakePart':
                const start = Number(commands.split('!')[1]);
                const end = Number(commands.split('!')[2]);
                encodedSpell = takePart(encodedSpell, start, end);
                console.log(encodedSpell);
                break;

            case 'Reverse':
                const phrase = commands.split('!')[1];
                if (encodedSpell.includes(phrase)) {
                    encodedSpell = reverse(encodedSpell, phrase);
                    console.log(encodedSpell);
                } else {
                    console.log('Error');
                }
                break;
        }

        commands = input.shift();
    }

    console.log(`The concealed spell is: ${encodedSpell}`)

}

solve(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])

