"use strict";
// Spread Operator 
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    //  console.log(colors)
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of Colors";
var colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors.apply(void 0, __spreadArrays([message], colorArray));
// displayColors(message,'Red');
// displayColors(message,'Red','blue');
// displayColors(message,'Red','Blue','Green');
//# sourceMappingURL=tutorial13.js.map