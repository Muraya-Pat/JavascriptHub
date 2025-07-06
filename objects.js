// Objects in Javascript
let person = {
};
// Adding properties to the object
person.name = "John";
person.age = 30;
// Adding a method to the object
person.greet = function() {
    console.log("Hello, my name is " + this.name);
};
// Accessing properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
// Calling the method
person.greet(); // Output: Hello, my name is John

// an object that already has properties and values in it
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log("The car has started.");
    }
};