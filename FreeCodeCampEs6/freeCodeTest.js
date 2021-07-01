// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card)  {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6: 
//       count++;
//         break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--;
//       break;
//   }
//   if (count > 0) {
//     return count + ' Bet';
//   }else {
//     return count + ' Hold';
//   }
//   return "Change Me";
//   // Only change code above this line
// }

// const show = cc(10);
// console.log(show)
//  cc(3); cc(7); cc('K'); cc('A');

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };

  var entreeValue = testObj["an entree"];   // Change this line
  console.log(entreeValue);
  var drinkValue = testObj["the drink"];    // Change this line
//   ********************************

  var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
  };
  var myDog = "Hunter";
  var myBreed = dogs[myDog];
  console.log(myBreed);
//   ********************************
  var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str;
  }
  var someProp = propPrefix("Name");
  console.log(someObj[someProp]);

//   *************************************************
// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = testObj[16];
  console.log = (playerNumber) ;     // Change this line;
  var player = testObj;   // Change this line