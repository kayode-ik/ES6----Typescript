

const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
};

// console.log(player.name);

const {name, club , address:{city}} = player;

// console.log(`${name} plays for ${club}`);
// console.log(`${name} lives in  ${city}`);

//Exercise

const student = {
    name1: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {name1, age, projects:{diceGame}} = student;

console.log(`${name1} is ${age} years old`);
console.log(`${name1} is good at ${diceGame}`);