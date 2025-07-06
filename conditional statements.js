// if statement
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
// Example usage
console.log(checkNumber(5));   // Output: Positive
console.log(checkNumber(-3));  // Output: Negative

// simple if ... else statement
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
// Example usage
console.log(isEvenOrOdd(4));  // Output: Even

// switch statement
function getDayName(day) {
    switch(day) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
// Example usage
console.log(getDayName(3));  // Output: Tuesday

// ternary operator
function isAdult(age) {
    return age >= 18 ? "Adult" : "Minor";
}
// Example usage
console.log(isAdult(20));  // Output: Adult

// nested if statement
function checkGrade(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
}
// Example usage
console.log(checkGrade(85));  // Output: B

// if statement with logical operators
function isEligibleForDiscount(age, membership) {
    if (age > 60 || membership === "premium") {
        return "Eligible for discount";
    } else {
        return "Not eligible for discount";
    }
}
// Example usage
console.log(isEligibleForDiscount(65, "basic"));  // Output: Eligible for discount

// if statement with multiple conditions (To be done later)