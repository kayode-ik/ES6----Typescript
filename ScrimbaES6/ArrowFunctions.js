//function declaration
function breakfastMenu() {
    return "I'm going to eat scrambled eggs for breakfast";

}

//anonymous function
const lunchMmenu = function() {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = (food) => {
    return `I'm going to eat ${food} for dinner`;
}

console.log(dinnerMenu("chicken salad"));