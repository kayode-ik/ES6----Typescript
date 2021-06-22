"use strict";
//Object Literals part 2
var firstname = "Kayode";
var lastname = "Aanu";
var person = {
    firstname: firstname,
    lastname: lastname
};
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Kayode", "Ipentan", 652);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
//console.log(person.firstname);
//console.log(person.lastname);
//# sourceMappingURL=tutorial14.js.map