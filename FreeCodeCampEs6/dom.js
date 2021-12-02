// var arr = [
//     [1,2], [3,4], [5,6]
//   ];
//   for (var i=0; i < arr.length; i++) {
//     for (var j=0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }

  // function countup(n) {
  //   if (n < 1) {
  //     return [];
  //   } else {
  //     const countArray = countup(n -1 );
  //     countArray.push(n);
  //     return countArray;
  //   }
  // }
  // console.log(countup(10));


  // Only change code below this line
function countdown(n){
  if(n < 1) {
    return [];
  }else {
    const countArray = countdown(n - 1);
    countArray.unshift(n)
    return countArray;
  }
}
const show = countdown(5);
console.log(show);
// Only change code above this line

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

const display = countdown(10);
console.log(display);