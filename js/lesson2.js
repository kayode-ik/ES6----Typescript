// let year = prompt('In which year was Babcock created');

// if (year == 1995 ? 
//     alert('You are right') 
//     : alert('Wrong'));

// let num = prompt('Enter a number', '');
// if (num > 0 ? alert(1) : 
//     (num < 0) ? alert(-1)  :
//     (num == 0) ? alert(0) :
//     alert('Try again')
//     );

// let i = 0;

// while (i < 3) {
//     // alert(i)
//     i++
    
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i)
        
//     }
//     // const num = array[i];

    
// }
// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);


// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }


let a = 2 + 3;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}