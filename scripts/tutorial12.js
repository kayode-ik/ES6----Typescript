"use strict";
// rest Operator 
//rest parameter is used to reference variables that are passed in a function
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of Colors";
displayColors(message, 'Red');
displayColors(message, 'Red', 'blue');
displayColors(message, 'Red', 'Blue', 'Green');
//# sourceMappingURL=tutorial12.js.map