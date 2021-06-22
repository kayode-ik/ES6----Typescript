
//Anonymous function
let magic = function () {
    return new Date();
}

const magic2 = () => new Date();

console.log(magic());

const myConcat = (arr1,arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));