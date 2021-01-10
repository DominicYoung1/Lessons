/**
 * Javascript: Originalally designed to be in the browser only. It sucks but we're stuck with it.
 * 
 * 
 */

// Javascript vs Python
//
// Line endings in javascript have a semicolon.

// aName = "name"
// In Javascript, this is invalid. We need to say that we are specifying a variable
// With the keywords `let` and `const`


// hello = "Some other value";

// Const vs. Let
// Const variables are IMMUTABLE, meaning once you set them you cannot reassign them.
// let variable are MUTABLE, meaning you can reassing them.


const hello = "Hello World";

// Print it!
console.log(hello); // Equivalent of just print(aName)

// The next line would faile because hello is const:
// hello = "something else";

// With let, you can do reassignment
let something = "something";
console.log(something);
something = "something new";
console.log(something);


// Datatypes
/**
 * The primitive types in js/ts are:
 *   1. number (float or int)
 *   2. boolean
 *   3. string
 *   4. array
 *   5. object
 */


if (true) {

const aNumber = 12;
const aNumber2 = 12.5;
const aBool = true; // false;
const aString = "Some string"; // Double quotes is fine
const aString2 = 'Some string'; // single quotes is fine
const aFmtString = `Declare with backticks, can then inject expressions like ${aNumber + aNumber2}`;
const aFmtString2 = 'Declare with backticks, can then inject expressions like ${aNumber + aNumber2}';

const myname = "Jordan";
const age = 24;
console.log(aFmtString);
console.log(aFmtString2);

console.log(`${myname} is ${age} years old`);

const anArray = [1, 2, 3];
console.log(anArray);

// Some array operations:
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let myArray = [1, 2, 3];

// Indexing into an array, is just like in python

console.log(myArray[1]);
myArray[1] = 100;
console.log(`[${myArray}]`);
myArray.push(4); // Add to an array
const concated = myArray.concat(anArray); // Makes a NEW ARRAY

console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.push(4); // Add to an array
// Splicing to remove
// Let's splice out 2,3
// [1, 2, 3 ,4]
myArray.splice(1, 2);
console.log(`Spliced array looks like [${myArray.toString()}]`);
console.log(myArray);

// YOU SHOULDN"T DO THIS, but you can use splice to add elements to an array or replace elements
myArray = [1, 2, 3, 4]
myArray.splice(1, 2, 10, 12, 14);
// [1, 2, 3, 4] => [1, 4] => [1, 10, 12, 14, 4];
console.log(myArray);

// You can also use splice just to insert new elements
myArray = [1, 2, 3, 4]
myArray.splice(1, 0, 10, 12, 14);
// [1, 2, 3, 4] => [1, 10, 12, 14, 2, 3, 4];
console.log(myArray);

// OBJECTS!
// There are classes in javascript, but using them is kind of frowned upon except in very particular circumstances

// Construction
let obj = {
  'key1': 'value1',
  'key2': 'value2',
  'key3': 'value3',
  'key with spaces': 'value with spaces',
};

// you can also skip the quotes on the keys:
obj = {
  key1: 'value1', 
  key2: 'value2',
  key3: 'value3',
  'key with spaces': 'value with spaces',
};

// Accessing values:

console.log(`Key1 = ${obj['key with spaces']}`);
console.log(`Key 1 can also be accesed by ${obj.key1}`);

obj.key1 = "some new value";
console.log(obj.key1);

const objWithFunctions = {
  data: [1, 2, 3],
  squareFunc: x => x * x,
  dataSquared: () => objWithFunctions.data.map(objWithFunctions.squareFunc)
};

console.log(objWithFunctions.data.map(objWithFunctions.squareFunc));
console.log(objWithFunctions.dataSquared());

}
// Code Flow things:
// for loops, while loops, if statements, etc.
if (false) {
if (true) {
  console.log("It's true!");
}
const four = 4;

if (four === 4) {
  console.log("it's four!");
} else {
  console.log("This shouldn't run");
}
console.log("\n\n\n\n");
const five = 5;
if (five === 4) {
  console.log("it's not four!");
} else if (five === 3) {
  console.log("It's three");
} else {
  console.log("It's not four or 3");
}

// You NEVER want to use a double equal because you're just asking for trouble
if (4 == '4') {
  console.log("Stings equal numbers apparently?");
}
if ('[object Object]' == {1: 1, 2: 2, 3: 3, 4: 4}) {
  console.log("These certainly should not be equal");
}

let i = 0;
while (i < 4) {
  console.log(`I = ${i}`);
  i = i + 1;
}

// For loops are declared like the are iin
// C/C++, Java, C#, F#, PHP,
// Four parts to a For loop:
// Loop variable, condition, stepper, body
// ++ operator just adds one to i
// -- operator just subtracts one from i
for (let i=0; i < 4; i++) {
  console.log(`I in a for loop ${i}`);
}



// Functions!!!
console.log("FUNCTIONS\n======")

// Preferred function declaration!
const addTwoNumbers = (arg1, arg2) => {
  console.log(`Arg 1 was ${arg1} and arg2 was ${arg2} which added together equals ${arg1 + arg2}`);

  return arg1 + arg2;
};

const summation = addTwoNumbers(3, 4);
console.log(summation);

// The "old" function declaration:
function addTwoNumbersOldWay(arg1, arg2) {
  return arg1 + arg2;
}

console.log(`The old function returned ${addTwoNumbersOldWay(7,8)}`);

const printMyName = () => {
  console.log("Jordan");
}
printMyName("argument");

console.log(addTwoNumbers(4));


// Higher order methods:
// function vs method:
  // methods exist on an object. Functions just exist out in the wild.

const numbers = [1, 2, 3, 4];

const squared = numbers.map((x) => {
  return x*x;
});
console.log(squared);
// const squared = [1, 4, 9, 16];

const newData = [];

for (let i=0; i < numbers.length; i++) {
  newData.push(numbers[i] * numbers[i]);
}
// Equivalent to const newData = numbers.map(x => x*x);

// Some common higher-order-methods
console.log(numbers.map(x => x * x)); // Apply the passed in function to each element, and construct a new array from all the outputs
numbers.forEach(value => console.log(value)); for (let i=0; i < numbers.length; i++) { console.log(numbers[i])}

// reduce folds a value through an array, applying the function at each step, and producing one final output value.

const sumNumbers = (accumulation, element) => accumulation + element;

console.log(numbers.reduce(sumNumbers, 0));


// For loop equivalent of reduce:

let initialValue = 0;
for (let i=0; i < numbers.length; i++) {
  // 0 => 1
  // 1 => 3
  // 3 => 6
  // 6 => 10
  initialValue = sumNumbers(initialValue, numbers[i]);
}
// InitialValue looks like 10 after this finishes.

// Last higher order method: flatMap

const myNumbers = [[1,2], [3,4], [5,6]];
const flattened = myNumbers.flat();
console.log(myNumbers,  "\n", flattened);
const squareFlat = myNumbers.flatMap(subArray => subArray.map(x => x * x));
console.log(squareFlat);

}


// Class Definition

class SomeClassName {
  data1;
  data2;
  data3;

  constructor(a, b,c ) {
    this.data1 = a;
    this.data2 = b;
    this.data3 = c;
  }

  printDatas() {
    console.log("Printing from class", this.data1, this.data2, this.data3);
  }
}

class AnotherClass extends SomeClassName {
  // whateever
}

const myClassInstance = new SomeClassName(1, 2, 3);

myClassInstance.printDatas();

console.log("Starting the bubblesort \n\n");

// HTML practice from last time
// I want you to practice with javascript!

// Bubble sort?
// What is bubblesort??
// Algorithm for sorting an array
// For looop through an array, compare adjacent elements and if they are out of order, swap them

// What to do with this:

// First understand it
// let's make it higher-order, where you provide a comparison function
// Comparator returns true if they are in order.

// I want you to then bubble sort on an array of numbers, asc. and desc.
// Alphabetize an array of strings.

// bubbleSort(["c","b","a"], inOrder)
// inOrder is a helperfunction, that takes in two arguements
//     inOrder = (a,b) => ...
//     inOrder's job is to return TRUE if a <= b, and FALSE if a > b
const bubbleSort = (array, inOrder) => {
  let counter = 0;
  let foundAnIssue = true;
  while (foundAnIssue) {
    foundAnIssue = false;
    for (let i=1; i < array.length; i++) {
      counter += 1;
      if (!inOrder(array[i - 1], array[i])) {
        const temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        foundAnIssue = true;
      }
    }
  }
  console.log(`Took ${counter} loops to process an array of ${array.length} elements`);
  return array;
}

const inOrder = (a, b) => {
  if (a <= b) return true;
  else return false;
}

const myArray = [];
bubbleSort("A STRING", "some ohter string");
const n = 100000;
for (let i = 0; i < n; i++) myArray.push(n - i);
// console.log(myArray);
// const myArray = [4, 3, 8, 2, 3, 4, 5,7,8,6,3,1,3,6,8,9,3,4,6,8,9,6,54,23,21,4,5,675,654324,37,567,234,134,634,7,354562,345254,6345,6];
// console.log("About to sort myArray", myArray);
const sortedArr = bubbleSort(myArray, inOrder);
// console.log("Sorted it to", sortedArr);
