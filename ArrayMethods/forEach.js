const number = [1,2,'3',4,5]

console.log(number);
let _number = [];
let _string = [];
number.forEach(v => {
    if(typeof v === 'string') {
        _string.push(v)
    } else {
        _number.push(v)
    }
})
_number = _number.sort();
_string = _string.sort();

console.log(_string.concat(_number));