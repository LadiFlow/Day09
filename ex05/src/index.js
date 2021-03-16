// Only change code below this line
function myEqualFunction(m) {
    if (m != 55) {
        return "Not equal";
    }   else {
        return "Equal";
            }
    }

console.log(myEqualFunction(55));
console.log(myEqualFunction("55"));
console.log(myEqualFunction("21"));
console.log(myEqualFunction(12));
console.log(myEqualFunction("Doe"));

// Only change code above this line
module.exports = myEqualFunction;