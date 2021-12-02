// const today = new Date();
// const day = today.getDate();
// const year = today.getFullYear();

// const dob = 1998;
// const currentAge = year - dob;

// // console.log(today);
// // console.log(day);
// // console.log(year);
// console.log(currentAge);

// const person = {
//     hello: function () {
//         console.log('Hello')
//     },
//     age: function (age) {
//         console.log(`I am ${age} years old`)
//     }
// }

// person.hello();
// person.age(20);

const users = ['Alan', 'Peter', 'John']

// for loop
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// for of
// for (const user of users) {
//     console.log(user)
// }

// for each
// users.forEach( function (user, index, arr) {
//     console.log(index + arr + ' New')
// });

// Map
// const hiUsers = users.map(function (user) {
//     return `Hi ${users + user.length}`
// })

// console.log(hiUsers);

// for in

const user = {
    name: "Alan",
    age: 20,
    title: 'programmer'
}

for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}

