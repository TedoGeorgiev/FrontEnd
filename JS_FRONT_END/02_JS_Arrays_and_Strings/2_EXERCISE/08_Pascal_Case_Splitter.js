function pascalSpliterator (text) {

    // [A-Z][a-z]* ili tozi regex
    const regex = /[A-Z][a-z]+|[A-Z]/g;
    const matches = text.matchAll(regex);
    const output = [];

    for (const match of matches) {
        output.push(match);
    }

    console.log(output.join(', '));
}

pascalSpliterator('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalSpliterator('HoldTheDoor');
pascalSpliterator('ThisIsSoAnnoyingToDo');