function palindromeIntegers (input = []) {
    function reverseNumber (number) {
        const splitNumber = number
            .toString()
            .split('')
            .reverse();

        let result = '';
        for (const number of splitNumber) {
            result += number;
        }

        return Number(result);
    }

    for (const number of input) {
        const reversed = reverseNumber(number);
        if (number === reversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);