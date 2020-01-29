// oh yeah, you can color your console log!
console.log("%c-------------------------------------- 1. Basic Variables --------------------------------------", "color: darkviolet;");

// Create a variable called helloWorld that says Howdy World! and print it!

// Create a number age that represents how old you are

// Create a object person that has 4 different properties: name, age, saying

// Create an variable called intro that is the following string:
// Hi my name is {name}, I am {age} years old and I say {saying}.
// Print it out!

console.log("%c-------------------------------------- 2. Loops --------------------------------------", "color: darkviolet;");

// a. Print out the sum of 1-10!

// b. Using this example array, print each of the values using two different types of for loops.
// 1. Use a index-based for loop (like above)
// 2. Use a for of loop to get the values at each index
let arr = ["Apples", "Bananas", "Mangoes"];

// c. Multiply each number in the array by its index and add them up
let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Answer: 285

// d. You can also get the keys of an object using a for in loop!
// Print out the countries and their capitals!
let map = {
    China: "Beijing",
    Japan: "Tokyo",
    USA: "Washington DC"
};

console.log("%c-------------------------------------- 3. Object exploration --------------------------------------", "color: darkviolet;");

let people = [
    {
        name: "Jon",
        age: "21",
        friends: ["Thomas", "Arata"],
        traits: {
            happy: true,
            friendly: false
        }
    },
    {
        name: "Thomas",
        age: "20",
        friends: ["Jon", "Scott"],
        traits: {
            happy: false,
            friendly: true
        }
    }
];

// a. How do you access the name property of the 2nd person?

// b. How do you add another friend to the friend list for the 1st person?

// c. How do you find whether the 2nd person is happy?

// d. Add a new person in the proper format!

console.log("%c-------------------------------------- 4. JS Things to Remember --------------------------------------", "color: darkviolet;");

// a. When doing comparisons, types can be coerced!

let value = 1;

// try adding value + true

// Print it out. What is happening here???

// b. Cool trick: you can do null or undefined checks using comparisons!
let undefinedVariable;
// if (undefinedVariable) {
//     console.log("1. It's defined!");
// } else {
//     console.log("1. It's undefined.")
// }

// Now give it a value!

// if (undefinedVariable) {
//     console.log("2. It's defined!");
// } else {
//     console.log("2. It's undefined.")
// }

// b. Objects (like objects and arrays) are pass by reference, not copy

// Use the function below to edit an index in the array with a new value
// It will edit the index with the particular id to the new value
// Print the list first, and then print it again!

let list = [
    {
        id: 0,
        value: "Hi"
    },
    {
        id: 1,
        value: "Yo"
    },
    {
        id: 2,
        value: "Hello"
    },
    {
        id: 3,
        value: "Howdy"
    }
]

// console.log("List before:", list);

/**
 * 
 * @param  arr 
 * @param index 
 * @param value 
 */
function editValueAtId(arr, index, value) {
    arr[index].value = value
}

// Use that function here!

// this is a useful way to print out objects / arrays! You can give some text beforehand.
// Check that the lists are different!
// console.log("List after:", list);

console.log("%c-------------------------------------- 5. Extra fun! --------------------------------------", "color: darkviolet;");

// creates a 2D matrix of size 10x10
function create2DArray() {
    let oneDim = new Array(10);
    for (let i = 0; i < 10; i ++) {
        oneDim[i] = new Array(10);
    }
    return oneDim;
}

let matrix = create2DArray();

// console.log(matrix);

// a. Fill this matrix with random integer values between 0 and 10!
// Hint: Math.random and Math.round

// Take the sum of this matrix using a nested for of loop! (or a normal for loop)

// b. Fill this matrix with either 0 or 1s
let hitMatrix = create2DArray();
// options for values, how do you fill with one or the other?
// Hint: Math.random, Math.round again
let values = [0, 1];

// console.log("Hit matrix", hitMatrix);

let hits = 0;

// Guess 5 different [x, y]s and see if you win!
// Usage: hits += guessHit(hitMatrix, <x>, <y>);

/**
 * 
 * @param {matrix of values} field 
 * @param {x value} x 
 * @param {y value} y
 * Takes in x y coordinates and checks whether there is a hit!
 */
function guessHit(field, x, y) {
    // setting that x,y to be hit so it won't count again!
    if (field[x][y] === 1) {
        field[x][y] = 0;
        return 1;
    }
    return 0;
}

// if (hits >= 3) {
//     console.log("You won!");
// } else {
//     console.log("You lost...");
// }
