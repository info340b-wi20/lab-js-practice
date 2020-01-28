// 1. Basic variables

// oh yeah, you can color your console log!
console.log("%c-------------------------------------- 1. Basic Variables --------------------------------------", "color: darkviolet;");

// Create a variable called helloWorld that says Howdy World! and print it!

let helloWorld = "Howdy World!";

// Create a number age that represents how only you are

let age = 21;

// Create a object person that has 4 different properties: name, age, saying

let person = {
    name: "Jonathan",
    age: age,
    saying: helloWorld
};

// Create an variable called intro that is the following string:
// Hi my name is {name}, I am {age} years old and I say {saying}.
// Print it out!
let intro = "Hi my name is " + person.name + ", I am " + person.age + " years old and I say " + person.saying + ".";
console.log(intro);

// 2. Loops

console.log("%c-------------------------------------- 2. Loops --------------------------------------", "color: darkviolet;");

// a. Print out the sum of 1-10!
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// b. Using this example array, print each of the values using two different types of for loops.
// 1. Use a index-based for loop (like above)
// 2. Use a for of loop to get the values at each index
let arr = ["Apples", "Bananas", "Mangoes"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

// c. Multiply each number in the array by its index and add them up
let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
    numSum += i * numArr[i];
}
console.log(numSum);

// Answer: 285

// d. You can also get the keys of an object using a for in loop!
// Print out the countries and their capitals!
let map = {
    China: "Beijing",
    Japan: "Tokyo",
    USA: "Washington DC"
};

for (let key in map) {
    console.log(key + ": " + map[key]);
}

// 3. Object exploration

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

console.log(people[1].name);

// b. How do you add another friend to the friend list for the 1st person?

people[0].friends.push("Jin")
console.log(people[0])

// c. How do you find whether the 2nd person is happy?

console.log(people[1].traits.happy);

// d. Add a new person in the proper format!

let newPerson = {
    name: "Abigail",
    age: "23",
    traits: {
        happy: true,
        friendly: true
    },
    friends: ["Jon", "Alex"]
};

people.push(newPerson);

console.log(people);

console.log("%c-------------------------------------- 4. JS Things to Remember --------------------------------------", "color: darkviolet;");

// a. When doing comparisons, types can be coerced!

let value = 1;

// try adding value + true

let add = value + true;

// Print it out. What is happening here???
console.log(add);

// b. Cool trick: you can do null or undefined checks using comparisons!
let undefinedVariable;
if (undefinedVariable) {
    console.log("1. It's defined!");
} else {
    console.log("1. It's undefined.")
}

// Now give it a value!
undefinedVariable = "Now defined.";

if (undefinedVariable) {
    console.log("2. It's defined!");
} else {
    console.log("2. It's undefined.")
}

// b. Objects (like objects and arrays) are pass by reference, not copy

// Using the array defined below, create a function that takes in an array, index, and value
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

console.log("List before:", list);

function editValueAtId(arr, index, value) {
    arr[index].value = value
}

editValueAtId(list, 1, "Sup");

// this is a useful way to print out objects / arrays! You can give some text beforehand.
console.log("List after:", list);

console.log("%c-------------------------------------- 5. Extra fun! --------------------------------------", "color: darkviolet;");

function create2DArray() {
    let oneDim = new Array(10);
    for (let i = 0; i < 10; i ++) {
        oneDim[i] = new Array(10);
    }
    return oneDim;
}

let matrix = create2DArray();

console.log(matrix);

// a. Fill this matrix with random integer values between 0 and 10!
// Hint: Math.random and Math.round
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        matrix[i][j] = Math.round(10 * Math.random());
    }    
}

// Take the sum of this matrix using a nested for of loop! (or a normal for loop)

let matrixSum = 0;

for (let arr of matrix) {
    for (let arrValue of arr) {
        matrixSum += arrValue;
    }
}

console.log(matrixSum);

// b. Fill this matrix with either 0 or 1s
let hitMatrix = create2DArray();
let values = [0, 1];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        hitMatrix[i][j] = values[Math.round(Math.random())];
    }    
}
console.log("Hit matrix", hitMatrix);

let hits = 0;

// Guess 5 different [x, y]s and see if you win!
// hits += guessHit(hitMatrix, <x>, <y>);

/**
 * 
 * @param {matrix of values} field 
 * @param {x value} x 
 * @param {y value} y
 * Takes in x y coordinates and checks whether there is a hit!
 */
function guessHit(field, x, y) {
    if (field[x][y] === 1) {
        field[x][y] = 0;
        return 1;
    }
    return 0;
}

hits += guessHit(hitMatrix, 0, 5);
hits += guessHit(hitMatrix, 1, 3);
hits += guessHit(hitMatrix, 3, 5);
hits += guessHit(hitMatrix, 2, 4);
hits += guessHit(hitMatrix, 3, 8);

if (hits >= 3) {
    console.log("You won!");
} else {
    console.log("You lost...");
}