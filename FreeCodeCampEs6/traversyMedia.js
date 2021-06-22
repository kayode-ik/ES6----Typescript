const todos = [
    {
        id : 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id : 2,
        text: 'Create a new Website',
        isCompleted: true
    },
    {
        id : 3,
        text: 'Design a logo',
        isCompleted: false
    }
]

const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// for (let todo of todos) {
//     console.log(todo.text);
// }

//forEach, map, filter
//forEach *****************
// todos.forEach(function(todo) {
//     console.log(todo.text);
// })
//map**********************
// const todoText = todos.map(function(todo) {
//     return(todo.text);
// });
//filter**********************
const todoCompleted = todos.filter(function(todo) {
    return(todo.isCompleted === true);
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);