function passwordValidator (password) {

    function checkLength (pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    function containsLettersDigits (pass) {
        let regex = /^[A-Za-z0-9]+$/;
        return regex.test(pass);
    }

    function haveTwoDigits (pass) {
        let regex = /\d/g;
        let digitsCount = (pass.match(regex) || []).length;

        return digitsCount >= 2;
    }

    let functionArr = [checkLength(password),
        containsLettersDigits(password),
        haveTwoDigits(password)];

    if (functionArr[0] === true && functionArr[1] === true && functionArr[2] === true) {
        console.log('Password is valid');
    } else {
        if (!functionArr[0]) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!functionArr[1]) {
            console.log("Password must consist only of letters and digits");
        }
        if (!functionArr[2]) {
            console.log("Password must have at least 2 digits");
        }
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');