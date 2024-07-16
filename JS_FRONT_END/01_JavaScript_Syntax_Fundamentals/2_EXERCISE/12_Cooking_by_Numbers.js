function solve (number, ...operators) {

    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        switch (operator) {

            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number = number + 1;
                break;
            case 'bake':
                number = number * 3;
                break;
            case 'fillet':
                number = number - (number * 0.20);
                break;
        }
        console.log(number);
    }

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');