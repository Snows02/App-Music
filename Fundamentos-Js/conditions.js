var ivan = {
    name: 'Iván',
    lastname: 'Nieves Ardila',
    age: 17,
    engineer: true,
    weight: 62
}

console.log(`At the beginning of the year ${ivan.name} weighed ${ivan.weight}kg`);

for (let i = 0; i < 366; i++) {
    var random = Math.random()

    if (random < 0.25) {

    } else if (random < 0.5) {

    }
}


console.log(`At the end of the year ${ivan.name} weighs ${ivan.weight}kg`);

function printProfession(person) {
    console.log(`${person.name} is:`)
    if (person.engineer) {
        console.log('Engineer');
    } else {
        console.log('Is not an engineer');
    }
    if (person.chef) {
        console.log('Chef');
    }
    if (person.singer) {
        console.log('Singer');
    }
    if (person.swordman) {
        console.log('Swordman');
    }
    if (person.martial_artist) {
        console.log('Marcial artist');
    }
}

const COMING_AGE = 18

// const isOlder = function (person) {
//     return person.age >= COMING_AGE
// }

// const isOlder = person => person.age >= COMING_AGE

const isOlder = ({ age }) => age >= COMING_AGE

const isYounger = ({ age }) => age < COMING_AGE

function printIsOlder(person) {
    if (isOlder(person)) {
        console.log(`${person.name} is older`);
    } else {
        console.log(`${person.name} is not older`);
    }
}

function allowAccess(person) {
    if (isOlder(person)) {
        console.log(`${person.name} welcome`);
    } else {
        console.log(`You are not allowed ${person.name}`);
    }
}
