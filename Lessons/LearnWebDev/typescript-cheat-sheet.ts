

/**
 * 
 * I have made a cheat sheet of the main js/ts constructs below. To run this file you will
 * need typescript installed. 
 * 
 */

/////////////////////////////
// Syntax Notes
/////////////////////////////
/**
 * General Info:
 * ============
 * 
 * Javascript is bullshit. It's the wild west of programming. 
 * See https://www.destroyallsoftware.com/talks/wat 
 * and http://www.cs.sjsu.edu/~austin/cs152-fall14/slides/CS152-Day09-JavaScript.pdf
 * 
 * 
 * The ridiculousness of js is mostly because of historical reasons. See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript for some context
 * 
 * Typescript is better. MUCH better. Most of the oddities of js can be attributed to poor understanding of types.
 * Typescript fixes this isssue, so you never have to encounter javascript's oddities.
 * 
 * Line Endings:
 * ============
 * 
 * Lines should end with a semicolon in javascript. But it also doesn't actually matter. But you should do it.
 * 
 * Comments Syntax:
 * ========
 * 
 * Single-line comments are defined with a "//".
 * Multi-line comments are notated with "/*" and close once the starting notation is found in reverse.
 * 
 * 
 * Typescript Info:
 * ===============
 * Typescript has pretty good type inference. You can often ellide type signatures, EXCEPT in defining functions
 * and some other special circumstances. If ts complains, just explicitly add types.
 * Typescript is javascript, but with types. It is a superset of javascript.
 * 
 * It can be installed by `npm i -g typescript` (Assuming you already have node installed)
 * 
 */


/////////////////////////////
// Variable Declaration
/////////////////////////////

// Mutable Variables are notated with the `let` keyword. A variable that can be re-assigned.
let myVariable = 12;

// Print with console.log
console.log(myVariable);

// Reassign just with typical equality
// Note that in typscript, you cannot change types with reassignment.
// In other words, since we defined `myVariable` as a number, it is always a number. We can change
// the value of that number, but we can't change it to a string or something.
myVariable = 13;
console.log(myVariable);

// Immutable variables are notated with the `const` keyword
const immutableVariable = 144;
// If I tried to do `immutableVariable = 12` it would throw an error.

/////////////////////////////
// Primative Types
/////////////////////////////
/**
 * The primitive types in js/ts are:
 *   1. number (float or int)
 *   2. boolean
 *   3. string
 *   4. array
 *   5. object
 */

const aNumber = 12;
const aNumber2 = 12.5;
const aBool = true; // false;
const aString = "Some string";
const aString2 = 'Some string';
const aFmtString = `Declare with backticks, can then inject expressions like ${aNumber + aNumber2}`;
 
const aList = [1, 2, 3]; // Declare with brackets;
const theFirstElem = aList[0];

 // Objects are basically just key/value pairs. Keys should be strings (or numbers). values can be any type.
 // String keys can be notated as bare strings if they are just alphanumeric
 // values are pulled up by indexing or with "dot notation"
const aObj = {a: 1, 'nonstandard key': 12, anythingElse: 'Some other string'};
const firstElem = aObj.a;
const anythingElseElem = aObj['anythingElse'];
const nonStd = aObj['nonstandard key'];

/////////////////////////////
// Code Flow
/////////////////////////////
// Scopes/code blocks are determined by curly braces.

// If statements look like

if (12 < 13) {
  console.log("This is true so this block runs");
} else if (14 > 15) {
  console.log("This is false so it should not print.");
} else {
  console.log("This should not run because the first condition was met");
}

// Comparisons should use triple-equals:
// console.log("1" === "2"); // FALSE
// console.log("2" !== "1"); // TRUE

// For loops are defined in the same syntax as in C/C++/Java
// Where you give a starting condition, ending condition, and condition mutator:
//    start cond. | end cond. | mutator
for (  let i = 0;     i < 5;     i++) {
  console.log(`I = ${i}`);
}

// While loops define their condition in parenthesis
let i = 0 ;
while (i < 3) {
  console.log(`I = ${i}`);
  i += 1;
}

/////////////////////////////
// Functions
/////////////////////////////

// If you google around you'll probably see a few ways to write functions.
// I'm going to show you the preferred way that most people use (arrow notation).

// Typescript has pretty good type inference. But sometimes you need to explicitly give types.
// Function declarations are on of those times
// Types are notated after a variable name by a colon. The return type is given after a colon
// after you close parenthesis on the arguments.
const addTwoNumbers = (arg1: number, arg2: number): number => {
  return arg1 + arg2;
}

console.log(`3 + 5 = ${addTwoNumbers(3, 5)}`);

// Short one-liner functions can omit the curly braces and return statement
const anotherAddTwoNumbers = (a: number, b: number): number => a + b;

// This creates a small issue if you want to return an object because when you open
// a brace to start the object it thinks you're opening a new code block.
// This can be fixed by wrapping the brace in parenthesis.
const returnsAnObject = (a: number, b: number) => ({arg1: a, arg2: b});



/////////////////////////////
// Modules & Import/Export
/////////////////////////////

/**
 * For a variable function to be importable in another file, you have to export it
 * at the declaration with the `export` keyword
 * 
 * There is also an `export default` keyword that describes how it should be imported.
 * export default doesn't need a variable name. There can only be one default export per file.
 * See below for details.
 */

const hiddenVariable = 12; // Cannot be imported in other files.
export const exposedVariable = 12; // Can be imported in other files.
export default (a: number): number => a + 1;

/**
 * There are 3 ways to import in js/ts.
 * 
 * Modules are located from relative paths.
 * I've added 3 other .ts files so I can demonstrate below. 
 */

// Things that are `export-default` can be imported with the pattern:
// `import SOME_MODULE from './module1';`
console.log("\nExport example 1");
import DefaultFunction from './module1'; // Notice we omit the `.ts` extension.
DefaultFunction();

// Regular exports should be imported by variable name between curly braces:
console.log("\nExport example 2");
import { export1, export2, } from './module1';
export1();
export2();

// An entire module's exports can be imported with a wildcard import and aliasing.
// A particular export is then accessed by dot notation.
console.log("\nExport example 3");
import * as AnotherModule from './module2';

AnotherModule.export1();
AnotherModule.default();

/////////////////////////////
// Typescript-specific
/////////////////////////////
// There's honestly a lot here. See
// https://www.typescriptlang.org/docs/handbook/basic-types.html
// to scratch the surface.

// Types are explicitly given with a colon after a variable name
const aNumber3: number = 1433;

// Object types are defined just like objects, but the "values" are types.
type SomeObject = {a: number, b: number};

// Arrays of some type are specified with brackets after the type name
type ArrayOfNumbers = number[];

// Optional keys on objects can be notated with a questionmark before the colon

type OptionalArg = {a?: number, b: string};

const optValue: OptionalArg = {b: "Something"};
const optValue2: OptionalArg = {a: 3, b: "Something"};

// types can be recursive
type Node = {value: number, nextNode?: Node};

// Union types can be one thing OR another

type StringOrNum = string | number;

// There are 2 types of nothingness. It's really dumb.
// You shouldn't use null unless you have a very specific reason.

type Nothing = null | undefined;

// There also exists an "any" type which is an escape hatch from ts
// back to wild-typed ts. But you don't really want to use it unless
// you have a very specific reason for it.