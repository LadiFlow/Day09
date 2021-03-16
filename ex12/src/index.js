function switchCaseSequential(num) {
    // Write code below this line   
    var answer;
    switch(num) {
        case 1:
            return (num = "Low");
        case 2:
            return (num = "Low");
        case 3:
            return (num = "Low");
                break;
        case 4:
            return (num = "Mid");
        case 5:
            return (num = "Mid");
        case 6:
            return (num = "Mid");
                break;
        case 7:
            return (num = "High");
        case 8:
            return (num = "High");
        case 9:
            return (num = "High");
                break;
    }
    
    // Write code above this line
      return answer;  
    }
    console.log(switchCaseSequential(1)); // Change this line
    console.log(switchCaseSequential(2)); // Change this line
    console.log(switchCaseSequential(3)); // Change this line
    console.log(switchCaseSequential(4)); // Change this line
    console.log(switchCaseSequential(5)); // Change this line
    console.log(switchCaseSequential(6)); // Change this line
    console.log(switchCaseSequential(7)); // Change this line
    console.log(switchCaseSequential(8)); // Change this line
    console.log(switchCaseSequential(9)); // Change this line

    module.exports = switchCaseSequential;