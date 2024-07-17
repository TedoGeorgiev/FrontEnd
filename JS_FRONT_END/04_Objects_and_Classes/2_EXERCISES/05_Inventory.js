function solve(input = []) {
    let heroesArr = [];

    for (const element of input) {
        const dataArr = element.split(' / ');
        const heroName = dataArr[0];
        const heroLevel = Number(dataArr[1]);
        const items = dataArr[2];

        const hero = {
            heroName,
            heroLevel,
            items,
        };

        heroesArr.push(hero);
    }

    heroesArr.sort((a, b) => a.heroLevel - b.heroLevel)
        .forEach((hero) => {
            console.log(`Hero: ${hero.heroName}`);
            console.log(`level => ${hero.heroLevel}`);
            console.log(`items => ${hero.items}`);
        });

}

function fancySolve(input = []) {

    let heroesArr = input.reduce((acc, hero) => {
        let [heroName, heroLevel, heroItems] = hero.split(' / ');

        const newHero = {
            heroName,
            heroLevel: Number(heroLevel),
            heroItems,
        };

        acc.push(newHero);
        return acc.sort((a, b) => a.heroLevel - b.heroLevel);
    }, []);

    heroesArr.forEach((hero) => {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.heroItems}`);
    });
}

function solveWithMap(input = []) {

    input.map((heroData) => {
        const [heroName, heroLevel, heroItems] = heroData.split(' / ');
        return {
            heroName,
            heroLevel: Number(heroLevel),
            heroItems,
        }
    }).sort((a, b) => a.heroLevel - b.heroLevel)
        .forEach((hero) => {
            console.log(`Hero: ${hero.heroName}`);
            console.log(`level => ${hero.heroLevel}`);
            console.log(`items => ${hero.heroItems}`);
        });
}

fancySolve([
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
    ]
);

solve([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

solveWithMap([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);