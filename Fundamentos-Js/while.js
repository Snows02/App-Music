var ivan = {
    name: 'Iván',
    lastname: 'Nieves Ardila',
    age: 17,
    engineer: true,
    weight: 62
}

const GOAL = ivan.weight + 2
var days = 0

const gainWeight = person => person.weight += 0.2
const slimDown = person => person.weight -= 0.2
const eat = () => Math.random() < 0.4
const exercise = () => Math.random < 0.3

while (ivan.weight < GOAL) {
    if (eat()) {
        gainWeight(ivan)
    }
    if (exercise()) {
        slimDown(ivan)
    }
    days += 1
}

console.log(`${ivan.name} weighs ${ivan.weight.toFixed(1)}kg in ${days} days`);