function switchCase(letter) {
// Write code below this line   
var animals;
switch(letter) {
    case "a":
        return (letter = "antelope");
            break;
    case "b":
        return (letter = "bird");
            break;
    case "c":
        return (letter = "cat");
            break;
    default:
         return (letter = "stuff");
            break;
}

// Write code above this line
  return animals;  
}
console.log(switchCase("a")); // Change this line
console.log(switchCase("b")); // Change this line
console.log(switchCase("c")); // Change this line
console.log(switchCase("d")); // Change this line
console.log(switchCase(4)); // Change this line
module.exports = switchCase;