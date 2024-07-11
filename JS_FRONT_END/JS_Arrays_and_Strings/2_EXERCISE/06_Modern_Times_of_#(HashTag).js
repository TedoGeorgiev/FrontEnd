function modernTimes (text) {

    const regex = /#[A-Za-z]+\b/gm;

    const matches = text.matchAll(regex);
    for (const match of matches) {
        console.log(match[0].substring(1));
    }

    // let resultArr = [];
    // //Splitvame po space i povec he
    // text.split(/\s+/g).forEach((word) => {
    //     const result = regex.exec(word);
    //
    //     if (result?.length > 0) {
    //         //Destruktorirame i vzimame samo
    //         //parvia element na masiva ot EXEC
    //         const [match] = result;
    //         resultArr.push(match.substring(1));
    //     }
    // });
    //
    // resultArr.forEach((word) => {
    //     console.log(word);
    // });
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');