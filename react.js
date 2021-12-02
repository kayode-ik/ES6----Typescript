// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }

//   const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
//   };

//   const element = (
//     <h1>
//       Hello, {formatName(user)}!
//     </h1>
//   );

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );

// function find_max(nums) {
//     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//     for (let num of nums) {
//         if (num > max_num) {
//             // (Fill in the missing line here)
//             max_num += num;
//         }
        
//     }
//     return max_num;
// }


// num = max_num
// max_num += 1
// max_num = num
// max_num += num



// let nums = [ 4 , 5];
// let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers

// for (let num of nums) {
//     if(num > max_num){
//         max_num = num;
//     }

//     // const element = num;

//     // console.log(element);
//     // console.log(max_num);
//     return max_num;
// }

const details = {
    name : 'kayode',
    gender: 'male',
    occupation : 'Developer',
    height: '178cm'

}

const userDetails = ({name , gender}) =>  {
    const fullName = name;

    console.log(fullName);
}
console.log(userDetails);