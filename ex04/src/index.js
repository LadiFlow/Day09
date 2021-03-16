// Only change code below this line
function compareDifferentValues(a, b) {
    if (a === b) {
        return "Equal";
    }   else {
        return "Not equal";
    }
      
    }
    compareDifferentValues(8, 8);
    compareDifferentValues("8", 8);
    compareDifferentValues('8', 8);
    compareDifferentValues("8", "8");
    compareDifferentValues(8, 8);

console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));
   
// Only change code above this line
module.exports = compareDifferentValues;