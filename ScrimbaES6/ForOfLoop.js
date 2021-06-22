let incomes = [3000,4000,5000]

let total = 0;

for (const income of incomes) {
    // console.log(income);
    total += income;
}
// console.log(total);

//Exercise 

const students = [
    {name:"John", city: "New york"},
    {name:"Peter", city: "Paris"},
    {name:"Kate", city: "Sidney"},

]

// const {name, city} = students;

for (const student of students) {
    console.log(`${student.name} lives in ${student.city}`);
}

// console.log(`${name1}`);
