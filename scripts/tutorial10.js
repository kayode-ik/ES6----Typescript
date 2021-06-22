"use strict";
//This Keyword
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        // let self = this;
        // setTimeout(function(){console.log(self.id)},1000);
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=tutorial10.js.map